<template>
  <div style="background-color: var(--gray); overflow-y: auto;  height: calc(100vh - 66px); width: 100%; display: flex; flex-direction: column; position: absolute; margin-left: -19px;">
    <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 15px;">
      <div style="display: flex; width: 100%; flex-direction: row; justify-content: center; margin-bottom: 7px;">
        <VButtonIcon left="0" style="margin-right: auto; margin-left: 18px; z-index: 2; cursor: pointer" top="0" @click="toggleWarning" >
          <VIcon color="grey-7" name="west" size="28" />
        </VButtonIcon>
        <p style="font-weight: 600;  margin-left: -18px; font-size: 20px; line-height: 24px; margin-right: auto">
          {{ route.title }}
        </p>
      </div>
      <div style="display: flex; flex-direction: row; gap: 6px; margin: 0 auto;">
        <img style="width: 13px; height: 17px" src="../../../assets/icons/Marker.svg" alt="svg" />
        <p>Подойдите к точке, чтобы получить задание</p>
      </div>
    </div>
    <yandex-map
      style="z-index: 2;"
      v-if="!isLoading"
      :settings="{
      location: {
        center: position.coords,
        zoom: 17,
      },
    }"
    >
      <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
      <yandex-map-default-features-layer/>
      <yandex-map-marker
        v-for="(point, index) in route.allPoints"
        :key="index"
        position="top-center left-center"
        :settings="{ coordinates: point.coordinates }"
      >
        <img
          v-if="currentPoint.id === point.id"
          :alt="point.title"
          src="../../../assets/icons/Marker.svg"
        >
        <img v-else-if="currentPoint.index > index" :alt="point.title"
             src="../../../assets/icons/MarkerFilled.svg" />
        <img
          v-else
          :alt="point.title"
          src="../../../assets/icons/MarkerEmpty.svg"
        >
      </yandex-map-marker>

      <yandex-map-marker
        :settings="{ coordinates: position.coords }"
      >
        <img
          alt="position"
          src="../../../assets/icons/PositionMarker.svg"
        >
      </yandex-map-marker>
    </yandex-map>
    <div style="display: flex; position: absolute; height: 100%; width: 100%;">
      <button @click="changePoint" style="z-index: 2; height: 59px; background-color: #F9C972; border: 0; cursor: pointer; width: 308px; border-radius: 25px; margin: auto auto 8px;">
        <span style="font-weight: 600; font-size: 20px; line-height: 24px; color: #E9680A">Я на месте!</span>
      </button>
    </div>
    <div v-if="isOpenWarning" style="display: flex; overflow-y: auto; flex-direction: column; z-index: 3; position: absolute; height: 100%; width: 100%; background-color: #F1EDEC;">
      <p style="font-size: 20px; font-weight: 600; margin: 158px auto 93px;">Осторожно!</p>
      <p style="width: 290px; margin-right: auto; margin-left: auto; margin-bottom: 20px; text-align: center; color: #4D4D4D; font-size: 16px">Вы покидаете квест досрочно. Прохождение не сохранится.</p>
      <p style="width: 290px; margin-right: auto; margin-bottom: 30px; margin-left: auto; text-align: center; color: #4D4D4D; font-size: 16px">Вы уверены, что хотите выйти?</p>

      <button @click="toggleWarning" style="width: 203px; margin: auto auto 15px; cursor: pointer; background-color: #F9C972; border: 0; border-radius: 25px; padding: 8px 24px; white-space: nowrap">
        <span style="font-weight: 500; font-size: 16px; line-height: 24px; color: #E9680A">Продолжить квест</span>
      </button>
      <button @click="openQuest" style="width: 203px; margin-bottom: 36px; margin-right: auto; margin-left: auto; cursor: pointer; border: 0">
        <span style=" font-size: 15px; line-height: 20px; color: #4D4D4D">Выйти</span>
      </button>
    </div>
    <div v-if="isOpenQuestion" style="display: flex; overflow-y: auto; flex-direction: column; z-index: 4; position: absolute; height: 100%; width: 100%; background-color: #F1EDEC;">
      <div style="display: flex; width: 100%; flex-direction: row; justify-content: center; margin-bottom: 16px;">
        <VButtonIcon :disabled="isOpenResult" left="0" style="margin-right: auto; margin-left: 18px; z-index: 2; cursor: pointer" top="0" @click="() => {
          isOpenQuestion = false;

          currentPoint.id = props.route.allPoints[currentQuestion.index - 1].id;
          currentPoint.index = currentQuestion.index - 1

          currentQuestion.index = currentQuestion.index - 1;
        }" >
          <VIcon color="grey-7" name="west" size="28" />
        </VButtonIcon>
      </div>
      <p style="font-size: 20px; font-weight: 500; margin-left: auto; margin-right: auto">{{currentQuestion.title}}</p>
      <p style="font-size: 20px; font-weight: 500; margin-left: auto; margin-right: auto">{{`${currentQuestion.index - 1} /  ${props.route.allPoints.length - 1}`}}</p>
      <p style="font-size: 15px; font-weight: 500; margin-left: auto; margin-right: auto; margin-top: 19px">Описание</p>
      <p style="font-size: 15px; margin: 15px 25px 43px 26px;">{{currentQuestion.description}}</p>
      <div style="border-radius: 25px; margin-left: 20px; margin-right: 20px; display: flex; flex-direction: column; border: 1px solid #2C2C2C; padding-bottom: 18px; margin-bottom: 22px">
        <p style="margin-top: 21px; margin-left: auto; margin-right: auto; font-weight: 500;">Задание</p>
        <p style="font-size: 13px; margin: 13px 22px;">{{currentQuestion.question}}</p>
        <button @click="selectAnswer(item, index)"
                :disabled="indexAnswer !== index && !!selectedQuestion.text"
                :style="indexAnswer === index ? {backgroundColor: '#F9C972', color: '#E9680A'} : {backgroundColor: '#D0CDCC', color: '#2C2C2C'}"
                style="width: fit-content;  max-width: 276px; font-size: 10px; margin-left: auto; margin-right: auto; margin-bottom: 15px; padding: 7px 21px; border-radius: 25px; border: 0; cursor: pointer;"
                v-for="(item, index) in currentQuestion.answers" :key="item.text">
       {{ item.text }}
        </button>
        <div v-if="isOpenResult" style="display: flex; flex-direction: column">
          <p style="font-size: 13px; margin-left: 22px">{{ `${selectedQuestion.points === 0 ? 'Неверно!' : 'Верно!'}` }}</p>
          <p style="font-size: 13px; margin-left: 22px">Пояснительное пояснение</p>
          <p style="font-size: 13px; margin-left: 22px">{{`+ ${selectedQuestion.points}`}}</p>
          <button @click="() => {
            currentQuestion.index === props.route.allPoints.length ? toggleOutcome() :  toggleQuestion()
          }" style="margin: auto auto 12px; cursor: pointer; background-color: #F9C972; border: 0; border-radius: 25px; padding: 7px 24px; white-space: nowrap">
            <span style="font-weight: 500; font-size: 10px; color: #E9680A">Далее</span>
          </button>
        </div>
      </div>
    </div>
    <div v-if="isOpenOutcome" style="display: flex; overflow-y: auto; flex-direction: column; z-index: 4; position: absolute; height: 100%; width: 100%; background-color: #F1EDEC;">
      <div style="display: flex; width: 100%; flex-direction: row; justify-content: center; margin-bottom: 16px;">
        <VButtonIcon left="0" style="margin-right: auto; margin-left: 18px; z-index: 2; cursor: pointer" top="0" @click="() => {isOpenOutcome = false; isOpenQuestion = true}" >
          <VIcon color="grey-7" name="west" size="28" />
        </VButtonIcon>
      </div>
      <img :alt="route.title" :src="route.image" style="width: 100%; height: 186px;" />
      <p style="font-weight: 600; font-size: 20px; width: 297px; text-align: center; margin: 19px auto 91px;">{{`Вы прошли квест ${route.title}`}}</p>
      <p style="margin-left: auto; margin-right: auto; font-size: 15px; font-weight: 500; margin-bottom: 19px">Итого собрано:</p>
      <div style="margin-left: auto; margin-right: auto; display: flex; flex-direction: row">
        <p style="font-size: 20px; font-weight: 500; line-height: 18px; padding-top: 3px; margin-right: 6px">+ {{resultPoints}}</p>
        <img style="height: 24px" src="../../../assets/icons/Coin.svg" alt="Коин" />
      </div>
      <div style="display: flex; flex-direction: column; margin: 90px auto 50px;">
        <p style="font-size: 20px; margin-bottom: 19px">Пожалуйста, оцените квест</p>
        <div style="margin-right: auto; margin-left: auto; gap: 3px; display: flex; flex-direction: row">
          <v-icon style="cursor: pointer" size="40" @click="changeMark(n)" v-for="n in 5" :key="n" :color="mark >= n ? 'amber-7':'grey-5'" name="star" />
        </div>
      </div>
      <button @click="closeQuest" style="margin-top: auto; padding-top: 18px; padding-bottom: 18px; height: 59px; background-color: #F9C972; border: 0; cursor: pointer">
        <span style="font-weight: 600; font-size: 20px; line-height: 24px; color: #E9680A">Вернуться на главную</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButtonIcon from 'components/UI/VButtonIcon/VButtonIcon.vue';
import VIcon from 'components/UI/VIcon/VIcon.vue';
import {IProps} from 'components/RouteCard/RouteCardDetail/types';
import {
  createYmapsOptions, initYmaps,
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker
} from 'vue-yandex-maps';
import {onMounted, ref} from 'vue';
import {TQuestion} from 'stores/Routes/types';

const props = defineProps<IProps>();
const emit = defineEmits(['openQuest', 'closeQuest']);

const isLoading = ref(true);
const isOpenWarning = ref(false);
const isOpenQuestion = ref(false);
const isOpenResult = ref(false);
const indexAnswer = ref(100);
const resultPoints = ref(0);
const mark = ref(0);
const isOpenOutcome = ref(false);
const position = ref();

const closeQuest = () => {
  emit('closeQuest');
};

const changeMark = (index: number) => {
  mark.value = index;
}

const selectedQuestion = ref({
  text: '',
  points: 0
});
const currentPoint = ref({
  id: props.route.allPoints[0].id,
  index: 0
});

const currentQuestion = ref({
  index: 0,
  title: '',
  description: '',
  question: '',
  answers: [{
    text: '',
    points: 0
  }]
});

const openQuest = () => {
  emit('openQuest');
};

const selectAnswer = (value: TQuestion, index: number) => {
  selectedQuestion.value = value;
  isOpenResult.value = true;
  indexAnswer.value = index;
  resultPoints.value += value.points;
};

const toggleWarning = () => {
  isOpenWarning.value = !isOpenWarning.value;
};

const toggleOutcome = () => {
  isOpenOutcome.value = !isOpenOutcome.value;
};

const changePoint = () => {
  if (currentPoint.value.index + 1 < props.route.allPoints.length) {
    currentPoint.value.id = props.route.allPoints[currentPoint.value.index + 1].id;

    currentPoint.value.index = currentPoint.value.index + 1;
  }

  if (currentPoint.value.index !== 0) {
    if (currentQuestion.value.index !== props.route.allPoints.length) {
      currentQuestion.value.index = currentQuestion.value.index + 1;

      currentQuestion.value.title = props.route.allPoints[currentQuestion.value.index - 1].title;
      currentQuestion.value.description = props.route.allPoints[currentQuestion.value.index - 1].description;
      currentQuestion.value.answers = props.route.allPoints[currentQuestion.value.index - 1].answers;
      currentQuestion.value.question = props.route.allPoints[currentQuestion.value.index - 1].question;

      if (currentPoint.value.index > 1) {
        toggleQuestion();
      }
    }
  }
};

const toggleQuestion = () => {
  isOpenQuestion.value = !isOpenQuestion.value;
  isOpenResult.value = false;
  selectedQuestion.value = {
    text: '',
    points: 0
  };
  indexAnswer.value = 100;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPosition = () => {
  setInterval(async () => {
    position.value = await ymaps3.geolocation.getPosition();
  }, 1000);
}

onMounted(async () => {
  await createYmapsOptions({ apikey: '72f42b4f-6f60-4c7c-a61d-587906227047'});
  await initYmaps();

  position.value = await ymaps3.geolocation.getPosition();
  isLoading.value = false;
  //getPosition();
});
</script>

<style scoped lang="scss" src="./RouteCardQuest.scss" />

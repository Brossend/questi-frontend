import {IRoute, TNearbyPoints} from 'stores/Routes/types';
import { TFeed } from 'components/FeedCard/types';
import { IProfile } from 'pages/ProfilePage/types';

export const ROUTES: IRoute[] = [
  {
    id: '1',
    image: 'https://omch.ru/files/file/11/3.JPG',
    title: 'Прогулка по центру 1',
    description: 'Если у вас есть свободные 30 минут в центре Омска, приглашаем вас на приятную прогулку по самым разным местам города.',
    rate: 5,
    type: 1,
    startPoints: [
      {
        title: 'ост. Площадь Ленина',
        coordinates: [51.21, 67.32]
      },
      {
        title: 'ост. Театральная площадь',
        coordinates: [20.34, 12.838]
      }
    ],
    points: [
      {
        title: 'Музыкальный театр',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Аллея олимписких игр',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Юбилейный мост',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Скульптура Городовому',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Скульптура Любочки',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Семейный ресторан "Где же кролик"',
        coordinates: [20.34, 12.838]
      }
    ],
    allPoints: [
      {
        title: 'ост. Площадь Ленина',
        coordinates: [73.380547, 54.981385],
        active: true
      },
      {
        title: 'Музыкальный театр',
        coordinates: [73.382125, 54.982424],
        active: false
      },
      {
        title: 'Аллея олимписких игр',
        coordinates: [73.378587, 54.982409],
        active: false
      },
      {
        title: 'Юбилейный мост',
        coordinates: [73.376599, 54.982651],
        active: false
      },
      {
        title: 'Скульптура Городовому',
        coordinates: [73.376219, 54.983467],
        active: false
      },
      {
        title: 'Скульптура Любочки',
        coordinates: [73.374629, 54.985987],
        active: false
      },
      {
        title: 'Семейный ресторан "Где же кролик"',
        coordinates: [73.374854, 54.986231],
        active: false
      }
    ],
    duration: 30
  }
];

export const NEARBY_POINTS : TNearbyPoints[] = [
  {
    title: 'Первая точка',
    coordinates: [73.3709, 54.988446]
  },
  {
    title: 'Вторая точка',
    coordinates: [73.375245, 54.983115]
  },
  {
    title: 'Третья точка',
    coordinates: [73.367841, 54.984475]
  }
]

export const FEED: TFeed = {
  subs: [
    {
      id: '1',
      name: 'Ольга',
      image: 'https://i.pinimg.com/736x/a4/81/6d/a4816d97e49971d4072ccfb57cd3199c.jpg'
    },
    {
      id: '2',
      name: 'Юлия',
      image: 'https://avatars.yandex.net/get-music-content/5502420/0c7d60ab.a.24258349-1/m1000x1000?webp=false'
    },
    {
      id: '3',
      name: 'Иван',
      image: 'https://i.pinimg.com/736x/05/00/46/0500460e589d6cf8b90ebe527e771c55.jpg'
    },
    {
      id: '4',
      name: 'Даниил',
      image: 'https://i.pinimg.com/originals/24/29/d0/2429d0807980a833f634cdc19d370bf0.jpg'
    },
    {
      id: '5',
      name: 'Ирина',
      image: 'https://avatars.mds.yandex.net/i?id=a3d624e155a58d2b6e817f457dba1e79_l-10304277-images-thumbs&ref=rim&n=13&w=1280&h=1280'
    }
  ],
  posts: [
    {
      id: '1',
      avatar: 'https://ke-images.servicecdn.ru/cgs74iuidfself866pb0/original.jpg',
      name: 'Ирина Авдеева',
      date: '01.12.2024 в 14:57',
      description: 'Живописное место в Омской области. Всем советую!',
      image: 'https://avatars.mds.yandex.net/i?id=a627175dca952ad5802f222bc8f41eca_l-10931123-images-thumbs&n=13'
    },
    {
      id: '2',
      avatar: 'https://ke-images.servicecdn.ru/cgs74iuidfself866pb0/original.jpg',
      name: 'Ирина Авдеева',
      date: '02.02.2024 в 12:14',
      description: 'Классный ресторан!',
      image: 'https://avatars.mds.yandex.net/get-altay/1811309/2a0000016ffcb20ea31c326fc1961ea98c50/XXL'
    }, {
      id: '3',
      avatar: 'https://ke-images.servicecdn.ru/cgs74iuidfself866pb0/original.jpg',
      name: 'Ирина Авдеева',
      date: '13.03.2024 в 16:21',
      description: 'Замечтельное местечко! Люблю здесь бывать по выходным!',
      image: 'https://cdn.mlsn.ru/cian/images/large/uchastok-neftyanik3-8-ya-alleya-2071610643-1.jpg'
    }
  ]
};

export const PROFILE: IProfile = {
  id: '0001',
  name: 'Ирина Авдеева',
  avatar: 'https://ke-images.servicecdn.ru/cgs74iuidfself866pb0/original.jpg',
  quests: 0,
  subscriptions: 3,
  subscribers: 0,
  posts: [
    {
      id: '1',
      avatar: 'https://ke-images.servicecdn.ru/cgs74iuidfself866pb0/original.jpg',
      name: 'Ирина Авдеева',
      date: '01.12.2024 в 14:57',
      description: 'Живописное место в Омской области. Всем советую!',
      image: 'https://avatars.mds.yandex.net/i?id=a627175dca952ad5802f222bc8f41eca_l-10931123-images-thumbs&n=13'
    },
    {
      id: '2',
      avatar: 'https://ke-images.servicecdn.ru/cgs74iuidfself866pb0/original.jpg',
      name: 'Ирина Авдеева',
      date: '02.02.2024 в 12:14',
      description: 'Классный ресторан!',
      image: 'https://avatars.mds.yandex.net/get-altay/1811309/2a0000016ffcb20ea31c326fc1961ea98c50/XXL'
    }, {
      id: '3',
      avatar: 'https://ke-images.servicecdn.ru/cgs74iuidfself866pb0/original.jpg',
      name: 'Ирина Авдеева',
      date: '13.03.2024 в 16:21',
      description: 'Замечтельное местечко! Люблю здесь бывать по выходным!',
      image: 'https://cdn.mlsn.ru/cian/images/large/uchastok-neftyanik3-8-ya-alleya-2071610643-1.jpg'
    }
  ]
};

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { AuthAPI } from 'src/api/Auth/Auth';
import { ISignIn, ISignUp } from 'src/api/Auth/Types';
import { LocalStorage } from 'quasar';

export const useAuthStore = defineStore('auth', () => {
  const isLoading = ref<boolean>(false);
  const isAuthPage = ref(true);

  const signIn = async (data: ISignIn) => {
    try {
      isLoading.value = true;

      const res = await AuthAPI.signIn(data);

      if (res.status === 200) {
        LocalStorage.set('access_token', res.data['access_token']);
      }
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  const signUp = async (data: ISignUp) => {
    try {
      isLoading.value = true;

      const res = await AuthAPI.signUp(data);

      if (res.status === 201) {
        LocalStorage.set('access_token', res.data['access_token']);
      }
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isAuthPage,
    isLoading,
    signIn,
    signUp
  };
});

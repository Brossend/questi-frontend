import {ISignIn, ISignUp} from 'src/api/Auth/Types';
import axiosInstance from 'src/services/Api';

class Auth {
  async signIn(data: ISignIn) {
    return await axiosInstance.post('/login', data);
  };

  async signUp(data: ISignUp) {
    return await axiosInstance.post('/register', data);
  };
}

export const AuthAPI = new Auth();

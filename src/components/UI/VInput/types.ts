export type TTypes = 'password' | 'text' | 'phone';

export const enum ETypes {
  phone = 'phone',
  password = 'password'
}

export interface IVInput {
  placeholder: string,
  type: TTypes
}

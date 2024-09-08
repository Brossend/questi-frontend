import { TInputs } from 'components/AuthSignIn/types';

export const сheckFullnessForm = (array: TInputs[]): boolean => {
  return array.every(obj => !!obj.value);
};

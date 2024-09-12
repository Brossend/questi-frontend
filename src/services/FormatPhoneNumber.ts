export const formatPhoneNumber = (phoneNumber: string) => {
  phoneNumber = phoneNumber.replace(/\s|\(|\)|\-/g, '');
  phoneNumber = phoneNumber.slice(1);
  return phoneNumber;
};

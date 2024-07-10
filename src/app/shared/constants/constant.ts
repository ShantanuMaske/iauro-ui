export const EMAIL_REGEX: RegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PHONE_NUMBER: RegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const DUMMY_DATA = {
  id: 1,
  firstName: 'Shantanu',
  lastName: 'Maske',
  departmentName: 'CSE',
  email: 'shantanu@gmail.com',
  mobileNumber: '9209109699',
  gender: 'Male',
};

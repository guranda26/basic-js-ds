const VALID_EMAIL_ENDINGS = ["gmail.com", "outlook.com", "yandex.ru"];

export const validateEmail = (email) =>
  !!VALID_EMAIL_ENDINGS.some((v) => email.includes(v));

export { VALID_EMAIL_ENDINGS as validEnding };

import type {ValidateFn} from '.'

export const isRequire: ValidateFn = (value) => Boolean(String(value))
export const isEmail: ValidateFn = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(value))
export const isPassword: ValidateFn = (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(String(value))
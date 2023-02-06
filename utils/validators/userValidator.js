import * as yup from 'yup'

export const userValidator = yup.object().shape({
  email: yup.string().email(),
  firstName: yup.string().required().min(5),
  lastName: yup.string().required().min(5),
  password: yup.string().required().min(5),
})

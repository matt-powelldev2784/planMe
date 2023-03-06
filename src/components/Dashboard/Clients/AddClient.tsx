import styled from 'styled-components'
import * as Yup from 'yup'
import { useAppSelector, useAppDispatch } from '@/redux/store/reduxHooks'
import { selectUserId } from '../../../redux/slices/userSlice'
import { addClient, selectSingleClientId } from '@/redux/slices/clientsSlice'
import { NavBar, PageMenu } from '@/components'
import { useFormik } from 'formik'
import type { ClientMinusIdAndUserId, ClientMinusId } from '@/ts/interfaces'

export const AddClient = () => {
  const user_id = useAppSelector(selectUserId)
  const singleClientId = useAppSelector(selectSingleClientId)

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      company_name: '',
      add1: '',
      add2: '',
      post_code: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(200, 'Name must be 200 characters of less').required('required'),
      company_name: Yup.string().max(200, 'Company Name Must be 200 characters of less').required('required'),
      add1: Yup.string().max(400, 'Address1 must be 400 characters of less'),
      add2: Yup.string().max(400, 'Address1 must be 400 characters of less'),
      post_code: Yup.string(),
      email: Yup.string().email('Please input valid email address'),
    }),

    onSubmit: (values: ClientMinusIdAndUserId) => {
      const newClient: ClientMinusId = { user_id, ...values }
      dispatch(addClient(newClient))

      window.location.href = `/client/singleclient`
    },
  })

  return (
    <StyledDashboardDiv>
      <NavBar />
      <PageMenu title="Add Client" />

      <StyledFormWrapper>
        <StyledFormContainer onSubmit={formik.handleSubmit}>
          <StyledImg src="../add_client.svg"></StyledImg>
          <StyledP>Add Client</StyledP>

          <StyledInputConatiner>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            {formik.touched.company_name ? <StyledErrorP>{formik.errors.company_name}</StyledErrorP> : null}
            <StyledInput
              id="name"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
          </StyledInputConatiner>

          <StyledInputConatiner>
            <StyledLabel htmlFor="company_name">Company Name</StyledLabel>
            {formik.touched.company_name ? <StyledErrorP>{formik.errors.company_name}</StyledErrorP> : null}
            <StyledInput
              id="company_name"
              name="company_name"
              as={StyledInput}
              placeholder="Company Name"
              onChange={formik.handleChange}
              value={formik.values.company_name}
              onBlur={formik.handleBlur}
            />
          </StyledInputConatiner>

          <StyledInputConatiner>
            <StyledLabel htmlFor="add1">Address1</StyledLabel>
            <StyledInput
              id="add1"
              name="add1"
              as={StyledInput}
              placeholder="Address1"
              onChange={formik.handleChange}
              value={formik.values.add1}
            />
          </StyledInputConatiner>

          <StyledInputConatiner>
            <StyledLabel htmlFor="add2">Address2</StyledLabel>
            <StyledInput
              id="add2"
              name="add2"
              as={StyledInput}
              placeholder="Address2"
              onChange={formik.handleChange}
              value={formik.values.add2}
            />
          </StyledInputConatiner>

          <StyledInputConatiner>
            <StyledLabel htmlFor="post_code">Post Code</StyledLabel>
            <StyledInput
              id="post_code"
              name="post_code"
              as={StyledInput}
              placeholder="Post Code"
              onChange={formik.handleChange}
              value={formik.values.post_code}
            />
          </StyledInputConatiner>

          <StyledInputConatiner>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            {formik.touched && <StyledErrorP>{formik.errors.email}</StyledErrorP>}
            <StyledInput
              id="email"
              name="email"
              as={StyledInput}
              placeholder="john@acme.com"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </StyledInputConatiner>

          <StyledbButton type="submit">Submit</StyledbButton>
        </StyledFormContainer>
      </StyledFormWrapper>
    </StyledDashboardDiv>
  )
}

const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`

const StyledFormWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const StyledFormContainer = styled.form`
  display: flex;
  align-items: safe center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 2rem;
  border-radius: 1rem;
  padding: clamp(0.5rem, 3vw, 1.5rem);
  background: var(--bg-secondary);
  min-width: 300px;
  @media only screen and (max-width: 992px) {
    width: 80%;
  }
  @media only screen and (max-width: 451px) {
    width: 90%;
    margin: 1rem;
  }
`

const StyledImg = styled.img`
  width: 4rem;
  height: auto;
`

const StyledP = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: var(--primary-text);
`

const StyledInputConatiner = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 100%;
`

const StyledInput = styled.input`
  display: block;
  background: none;
  border-radius: 0.5rem;
  padding: 0.3rem;
  margin: 0rem auto;
  width: 100%;
  outline: none;
  border: 2px solid var(--bg-primary);
`

const StyledLabel = styled.label`
  position: relative;
  font-size: 0.9rem;
  left: 0.2rem;
  font-weight: 400;
`

const StyledErrorP = styled.p`
  position: relative;
  font-size: 0.9rem;
  color: red;
  right: 0.2rem;
  float: right;
`
const StyledbButton = styled.button`
  width: 50%;
  border: none;
  outline: none;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  color: var(--white-text);
  background: var(--bg-primary);
  font-weight: 400;
`

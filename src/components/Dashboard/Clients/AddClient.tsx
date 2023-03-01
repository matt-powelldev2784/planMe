import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '@/redux/store/reduxHooks'
import { selectUserId } from '../../../redux/slices/userSlice'
import { addClient } from '@/redux/slices/clientsSlice'
import { NavBar, PageMenu } from '@/components'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import type { Client } from '@/ts/interfaces'

export const AddClient = () => {
  const user_id = useAppSelector(selectUserId)
  const dispatch = useAppDispatch()

  if (user_id) console.log('user_id', user_id)
  // const newClient = {
  //   user_id: user_id,
  //   name: '',
  //   company_name: '',
  //   add1: '',
  //   add2: '',
  //   post_code: '',
  // }

  // useEffect(() => {
  //   dispatch(addClient(newClient))
  // }, [dispatch, addClient, newClient])
  const test = (values) => {
    const newClient = { user_id, ...values }
    console.log('newClient', newClient)

    dispatch(addClient({ user_id, ...values }))
  }

  return (
    <StyledDashboardDiv>
      <NavBar />
      <PageMenu title="Add Client" />
      <div>
        <Formik
          initialValues={{
            name: '',
            company_name: '',
            add1: '',
            add2: '',
            post_code: '',
            email: '',
          }}
          onSubmit={(values: Client, { setSubmitting }: FormikHelpers<Client>) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2))
            //   setSubmitting(false)
            // }, 500)
            console.log('values', values)
            test(values)
          }}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" as={StyledInput} placeholder="Name" />

            <label htmlFor="company_name">Company Name</label>
            <Field id="company_name" name="company_name" as={StyledInput} placeholder="Company Name" />

            <label htmlFor="add1">Address1</label>
            <Field id="add1" name="add1" as={StyledInput} placeholder="Address1" />

            <label htmlFor="post_code">Post Code</label>
            <Field id="post_code" name="post_code" as={StyledInput} placeholder="Post Code" />

            <label htmlFor="add2">Address2</label>
            <Field id="add2" name="add2" as={StyledInput} placeholder="Address2" />

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" as={StyledInput} placeholder="john@acme.com" type="email" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </StyledDashboardDiv>
  )
}

//name, company_name, add1, add2, post_code
const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`
const StyledInput = styled.input`
  display: block;
`

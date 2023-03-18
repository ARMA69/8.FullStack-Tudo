import React from 'react'
import { Formik, Form, Field }  from 'formik'
import {format} from 'date-fns'

const TodoForm = (props) => {
  const initialValues ={
    bodu: '',
    deadline: format(new Date(), 'yyyy-MM-dd')
  }
  const onSubmit = (value, actions) =>{
    props.sendDate(value)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {
        (props) => (
          <Form>
            <Field name="body" placeholder="New Todo..."/>
            <Field name="deadline" type="date"/>
            <button type="submin">Send!</button>
          </Form>
        )
      }

    </Formik>
  )
}

export default TodoForm
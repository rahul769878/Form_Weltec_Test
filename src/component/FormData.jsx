import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const FormData = (props) => {
    const SignupSchema = Yup.object().shape({
        title: Yup.string()
        .min(2, 'Too Short!')
          .max(15, 'Too Long!')
          .required('Required'),
          contactNumber: Yup.number()
          .min(9, "Number should be atleast 10 count")
          .required('Required'),
          gender: Yup.string()
          .required(),
        email: Yup.string().email('Invalid email').required('Required'),
      });
    return <div className='container mt-5'>
    <h1 className='container'>Sign Up Details:</h1>
    <Formik
      initialValues={{
        title: '',
        contactNumber: '',
        gender: "",
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        let t = [...props.data];
        t.push(values);
        props.setData(t);
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className='mt-5'>
          <label htmlFor="title">Title</label>
          <Field name="title" />
          {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}

           <label htmlFor="title">Contact Number</label>
          <Field name="contactNumber" />
          {errors.contactNumber && touched.contactNumber ? (
            <div>{errors.contactNumber}</div>
          ) : null}
          
          <label htmlFor="title">Gender</label>
           <Field as="select" name="gender">
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
           </Field>
           {errors.gender && touched.gender ? (
            <div>{errors.gender}</div>
          ) : null}

           <label htmlFor="title">Email</label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>;
}



export default FormData;
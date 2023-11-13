import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from './shared/TextInput';


export const PersonalInfo = () => {
    
    return (
      <div className='form-container'>
        <h1 className='card-title'> Personal info</h1>
        <h4 className='card-subtitle'> Please provide your name, email address, and phone number.</h4>
       
      <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber:''
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('This field is required'),
        phoneNumber: Yup.string()
          .required('This field is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false);
        }, 400);
      }}>
          <Form className='form'>
            <div>
              <TextInput
                name="name"
                label="Name"/>
              <TextInput
                  name="email"
                  label="Email"/>
              <TextInput
                  name="phoneNumber"
                  label="Phone Number"/>
            <div className='button-wrapper-end'>
                <button
                  type="submit"
                  className='button-primary'
                  >Next Step</button>
            </div>
            </div>            
          </Form>
        {/* )} */}
      </Formik>
    </div>
    )
}
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from './shared/TextInput';


export const PersonalInfo = ({step, setStep, user , setUser }) => {
    
    return (
      <div className='card-content'> 
      <Formik
      initialValues={{
        name: user && user.name ? user.name :'',
        email: user && user.email ? user.email :'',
        phoneNumber:user && user.phoneNumber ? user.phoneNumber :''
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required')
          .max(50,'Name allows 50 max charactors'),
        email: Yup.string()
          .email('Invalid email address')
          .required('This field is required'),
        phoneNumber: Yup.string()
          .test('valid','invalid phone number',
            function(phone) {
              if(phone){
                let formatted = phone.trim().replace(/[+ ]/gm,'')
                formatted = formatted.slice(1,formatted.length)
                if(formatted.length >=11 || formatted.length <10){
                  return false;
                }
                else{
                  return true;
                }
              }
              return true;
            }
          )
          .required('This field is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setUser(values)
          setStep(step+1)
          setSubmitting(false);
        }, 400);
      }}>
        {({ errors, touched, isSubmitting }) => (
          <Form className ='form'>
            <div className ='form-content'>
              <h1 className='card-title'> Personal info</h1>
              <h4 className='card-subtitle'> Please provide your name, email address, and phone number.</h4>
              <TextInput
                name = "name"
                label = "Name"
                placeholder = "e.g. Stephen King"/>
              <TextInput
                  name = "email"
                  label = "Email"
                  placeholder = "e.g. stephenking@lorem.com"/>
              <TextInput
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder = "e.g. +1 234 567 8901"/>
            </div>
            <div className='button-wrapper-end'>
                <button
                  type="submit"
                  disabled = { (touched.name && errors.name) || (touched.email && errors.email) || (touched.phoneNumber && errors.phoneNumber) || isSubmitting}
                  className='button-primary'
                  >Next Step</button>
            </div>           
          </Form>
        )}
      </Formik>
    </div>
    )
}
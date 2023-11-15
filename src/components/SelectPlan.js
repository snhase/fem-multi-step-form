import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { RadioButton } from './shared/RadioButton';
import { Switch } from './shared/Switch';
import {ReactComponent as Arcade} from '../assets/images/icon-arcade.svg'
import {ReactComponent as Advanced} from '../assets/images/icon-advanced.svg'
import {ReactComponent as Pro} from '../assets/images/icon-pro.svg'
import { getPlanCharges } from '../utils';


export const SelectPlan = () => {
    
    return (
      <div className='card-content '>
        <h1 className='card-title'>Select your plan</h1>
        <h4 className='card-subtitle'> You have the option of monthly or yearly billing.</h4>
      <Formik
      initialValues={{
        plan: 'Arcade',
        billing: false
      }}
      validationSchema={Yup.object({
        plan: Yup.string()
          .required('This field is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        if(values.billing){
          values.billing='Yearly'
        }
        else{
          values.billing='Monthly'
        }
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false);
        }, 400);
      }}>
         {({ values }) => (
          <Form className='form'>
            <div className='form-content'>
              <div className='radio-form'>
                <RadioButton
                  name="plan"
                  value="Arcade"
                  label="Arcade"
                  labelinfo={'+$'+ String(getPlanCharges(values.billing?'Yearly':'Monthly','Arcade')) +'/' + (values.billing?'yr':'mo')}
                  labelpromo={values.billing?"2 months free":""}
                  logo={<Arcade/>}>Arcade</RadioButton>
                <RadioButton
                  name="plan"
                  value="Advanced"
                  label="Advanced"
                  labelinfo={'+$'+ String(getPlanCharges(values.billing?'Yearly':'Monthly','Advanced')) +'/' + (values.billing?'yr':'mo')}
                  labelpromo={values.billing?"2 months free":""}
                  logo={<Advanced/>}>Advanced</RadioButton>
                <RadioButton
                  name="plan"
                  value="Pro"
                  label="Pro"
                  labelinfo={'+$'+ String(getPlanCharges(values.billing?'Yearly':'Monthly','Pro')) +'/' + (values.billing?'yr':'mo')}
                  labelpromo={values.billing?"2 months free":""}
                  logo={<Pro/>}>Pro</RadioButton>
              </div>
              <Switch
                name='billing'
              ></Switch>
            </div>
            <div className='button-wrapper'>
              <button className='button-secondary'> Go Back</button>
                <button
                  type="submit"
                  className='button-primary'
                  >Next Step</button>
            </div>              
          </Form>
         )}
      </Formik>
    </div>
    )
}
import { Formik, Form } from 'formik';
import { Checkbox } from './shared/Checkbox';
import { getAddOnCharges } from '../utils';


export const AddOns = ({step, setStep, billing, addOns, setAddOns}) => {
    return (
      <div className='card-content'>
        <h1 className='card-title'>Pick add ons</h1>
        <h4 className='card-subtitle'> Add-ons help enhance your gaming experience.</h4>
      <Formik
      initialValues={{
        service: addOns && addOns.service ? addOns.service : false,
        storage: addOns && addOns.storage ? addOns.storage : false,
        profile: addOns && addOns.profile ? addOns.profile : false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          setAddOns(values)
          setStep(step+1)
          setSubmitting(false);
        }, 400);
      }}>
          <Form className='form'>
            <div className='form-content'>
              <Checkbox
                name='service'
                label='Online Service'
                labelinfo='Access to multiplayer games'
                charges={'+$'+ String(getAddOnCharges(billing,'service')) +'/' + (billing === 'Yearly'?'yr':'mo')}
              >
              </Checkbox>
              <Checkbox
                name='storage'
                label='Larger Storage'
                labelinfo='Extra 1TB of cloud save'
                charges={'+$'+ String(getAddOnCharges(billing,'storage')) +'/' + (billing === 'Yearly'?'yr':'mo')}
              ></Checkbox>
              <Checkbox
                name='profile'
                label='Customizable Profile'
                labelinfo='Custome theme on your profile'
                charges={'+$'+ String(getAddOnCharges(billing,'profile')) +'/' + (billing === 'Yearly'?'yr':'mo')}
              ></Checkbox>
            </div>
            <div className='button-wrapper'>
              <button
                type="button"
                className='button-secondary'
                onClick={()=>{
                  setStep(step-1)
                }}
                > Go Back</button>
              <button
                type="submit"
                className='button-primary'
                >Next Step</button>
            </div>              
          </Form>
        {/* )} */}
      </Formik>
    </div>
    )
}
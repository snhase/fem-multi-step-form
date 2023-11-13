import { Formik, Form } from 'formik';
import { Checkbox } from './shared/Checkbox';


export const AddOns = ({billing}) => {
    return (
      <div className='form-container '>
        <h1 className='card-title'>Pick add ons</h1>
        <h4 className='card-subtitle'> Add-ons help enhanced your gaming experience.</h4>
      <Formik
      initialValues={{
        service: false,
        storage: false,
        profile: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false);
        }, 400);
      }}>
          <Form className='form'>
            <div className='form-content'>
              <Checkbox
                name='service'
                label='Online Service'
                labelinfo='Access to multiplayer games'
                charges={billing === 'Yearly'?'+$10/yr':'+$1/mo'}
              >
              </Checkbox>
              <Checkbox
                name='storage'
                label='Larger Storage'
                labelinfo='Extra 1TB of cloud save'
                charges={billing === 'Yearly'?'+$20/yr':'+$2/mo'}
              ></Checkbox>
              <Checkbox
                name='profile'
                label='Customizable Profile'
                labelinfo='Custome theme on your profile'
                charges={billing === 'Yearly'?'+$20/yr':'+$2/mo'}
              ></Checkbox>
            </div>
            <div className='button-wrapper'>
              <button className='button-secondary'> Go Back</button>
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
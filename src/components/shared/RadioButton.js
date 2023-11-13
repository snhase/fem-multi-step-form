import { useField } from 'formik';


export const RadioButton = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'radio' });
    return (
      <div className='radio-container'>
        <label>
          <input className='radio-input'type="radio" {...field} {...props} />
            <div className='radio-option-card'>
            <div className='radio-option-card-header'>{props.logo}</div>
            <div className='radio-option-card-label'>
            <div style={{fontFamily:"ubuntu-medium"}}>{props.label}</div>
            <div style={{color:'hsl(231, 11%, 63%)',fontSize:'14px', marginTop:'5px'}}>{props.labelinfo}</div>
            {
              props.labelpromo?
              <div style={{fontSize:'12px', marginTop:'8px'}}>{props.labelpromo}</div>
              :
              <></>
            }
            </div>
            </div>         
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
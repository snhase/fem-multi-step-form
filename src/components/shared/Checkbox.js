import { useField } from 'formik';

export const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
          <input id={props.name} className="checkbox-input" type="checkbox" {...field} {...props} />
            <label htmlFor ={props.name} className={ "checkbox-label"}> 
              <div className='checkbox-label-container'>
              <div className='checkbox-label-title'>
              <div style={{fontFamily:'ubuntu-medium'}}>{props.label}</div>
              <div className='label-info'>{props.labelinfo}</div>
              </div>
              <div style={{color:'hsl(243, 100%, 62%)'}}>{props.charges}</div>
              </div>
            </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
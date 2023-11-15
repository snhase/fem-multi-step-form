import { useField } from 'formik';
import {PatternFormat} from 'react-number-format'

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className='form-instructions'>
        <label className ='text-input-label' htmlFor={props.name}>
            {label}
        </label>
        {
            meta.touched && meta.error ? 
            <div className='form-text-input-error'>{meta.error}</div>
            : <></>
        }       
      </div>
      {
        props.name === 'phoneNumber' ?
        <PatternFormat className={meta.touched && meta.error ?'text-input-error' :'text-input'} format="+1 ### ### ####"  {...field} {...props} />
        :
        <input className={meta.touched && meta.error ?'text-input-error' :'text-input'} {...field} {...props} />
      }
      
    </>
  );
};
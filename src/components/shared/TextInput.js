import { useField } from 'formik';

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
            : null
        }       
      </div>
      <input className={meta.touched && meta.error ?'text-input-error' :'text-input'} {...field} {...props} />
      
    </>
  );
};
import { useField } from 'formik';

export const Switch = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div className='switch-container'>
        <span className={field.checked ?'switch-label':''} >Monthly</span>
        <label className={"switch"}>
          <input className={"switch"} type="checkbox" {...field} {...props} />
          <span className='slider round'></span>
        </label>
        <span className={!field.checked ?'switch-label':''} >Yearly</span>           
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
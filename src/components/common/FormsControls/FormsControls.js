import React from "react"
import s from './FormsControls.module.css'
import { Field } from "redux-form";



export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div><textarea {...input} {...props} /></div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div><input {...input} {...props} /></div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const createField = (name, type, placeholder, component, validate) => {
 return <div>
    <Field name={name} type={type} placeholder={placeholder} component={component} validate={validate} />
  </div>
}

import s from './Input.module.scss';

export function Input({ label, name, onInput, type="text" }) {

  return (
    <div className={s.input}>
      <label htmlFor={name}>{label}:</label>
      <input type={type} name={name} id={name} onInput={onInput} />
    </div>
  )
}
import "./FormInput.css";
const FormInput = (props) => {
    const{ label,errorMessage, onChange,id , ...inputProps}=props;
  return (
    <div className="formInput">
      <div>
      <label>{label}</label>
      </div>
      <input {...inputProps} onChange={onChange} />
        <span>{errorMessage}</span>

    </div>
  );
};
export default FormInput;

import "./form-input.styles.scss";

const FormInput = ({ label, ...otherInfo }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherInfo} />
      {label && (
        <label
          className={`${
            otherInfo.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

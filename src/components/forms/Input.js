import React from "react";

const Input = ({
  label,
  name,
  register,
  type,
  placeholder,
  validation,
  errors,
  emailTaken,
}) => {
  const errorMessage = (
    <p className="d-flex align-item-end text-warning fw-bold">
      {errors[name]?.message}
    </p>
  );

  let invalid;

  invalid =
    errors &&
    (errors[name]?.type === "required" ||
      errors[name]?.type === "minLength" ||
      errors[name]?.type === "pattern" ||
      errors[name]?.type === "maxLength");

  if (emailTaken) {
    invalid = true;
  }

  return (
    <div className="mb-3">
      <label htmlFor={name} className="fs-5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-control ${invalid ? "alert alert-warning" : ""}`}
        {...register(name, { ...validation })}
      />
      {errors && errors[name]?.type === "required" && errorMessage}
      {errors && errors[name]?.type === "pattern" && errorMessage}
      {errors && errors[name]?.type === "minLength" && errorMessage}
      {errors && errors[name]?.type === "maxLength" && errorMessage}
      {errors && errors[name]?.type === "valueAsNumber" && errorMessage}
    </div>
  );
};

export default Input;

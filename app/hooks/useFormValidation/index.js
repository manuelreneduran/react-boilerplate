function useFormValidation(values, setErrors, validate, onSubmit) {
  function handleBlur() {
    //runs values through custom validation checks
    const validationErrors = validate(values);
    //update redux error state if there are any errors
    validationErrors ? setErrors(validationErrors) : null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    //runs values through custom validation checks
    const validationErrors = validate(values);
    //update redux error state if there are any errors, otherwise, submit
    validationErrors ? setErrors(validationErrors) : onSubmit();
  }

  return {
    handleBlur,
    handleSubmit,
  };
}

export default useFormValidation;

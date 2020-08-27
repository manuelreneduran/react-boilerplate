export default function validateInput(values) {
  let errors = {};

  //input errors
  if (values.length === 0 || !values) {
    errors.content = 'You must have at least one character';
  } else if (values.length > 18) {
    errors.content =
      'Your string is too long - please shorten to less than 18 characters';
  } else {
    errors = false;
  }
  return errors;
}

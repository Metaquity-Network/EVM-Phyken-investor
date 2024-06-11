import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

// Define the type for error messages
type ErrorType = string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;

// Helper function to extract the error message as a string
const getErrorMessage = (error: ErrorType): string | undefined => {
  if (typeof error === 'string') {
    return error;
  } else if (error && typeof error.message === 'string') {
    return error.message;
  }
  return undefined;
};

export default getErrorMessage;

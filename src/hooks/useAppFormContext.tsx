import { useFormContext } from 'react-hook-form';
import { FormValues } from '../types/form';
// Types

export default function useAppFormContext() {
  return useFormContext<FormValues>();
}

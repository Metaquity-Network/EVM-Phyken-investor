import { useForm, DefaultValues } from 'react-hook-form';
import { FormValues } from '../types/form';
// Types

export default function useAppForm(defaultValues?: DefaultValues<FormValues>) {
  return useForm<FormValues>({ defaultValues });
}

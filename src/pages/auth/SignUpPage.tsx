import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { string, z } from 'zod';
import { Button } from '../../core/components/Button';
import { Card } from '../../core/components/Card';
import Field from '../../core/components/form/Field';
import { Input } from '../../core/components/Input';
import Link from '../../core/components/Link';
import { useSignup } from '../../core/hooks/useSignup';
import { SocialAuth } from './SocialAuth';
import { useState } from 'react';
import { FormError } from '../../core/components/form/FormError';
import FormSuccess from '../../core/components/form/FormSuccess';

export interface FormData {
  email: string;
  password: string;
  confirm: string;
}
export const SignUpPage = () => {
  const { error, loading, signUp } = useSignup();
  const [signedUp, setSignedUp] = useState(false);

  const formSchema = z
    .object({
      email: string().email(),
      password: string().min(8).max(15),
      confirm: string().min(8).max(15),
    })
    .refine(({ password, confirm }) => password === confirm, {
      message: 'Passwords must match',
      path: ['confirm'],
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  });

  const onSignUp = (email: string, password: string) => {
    signUp(email, password);
    reset();
    setSignedUp(true);
  };

  return (
    <Card title='Sign up to Trelloc'>
      {error ? (
        <FormError error={'Account already exists'} />
      ) : (
        !loading && signedUp && <FormSuccess message='Please check your email' />
      )}

      <form
        onSubmit={handleSubmit(({ email, password }) => onSignUp(email, password))}
        className='flex flex-col w-full gap-3'
      >
        <Field error={errors.email?.message}>
          <Input {...register('email')} placeholder='Enter email' />
        </Field>
        <Field error={errors.password?.message}>
          <Input
            {...register('password')}
            autoComplete='new-password'
            type='password'
            placeholder='Enter password'
          />
        </Field>
        <Field error={errors.confirm?.message}>
          <Input
            {...register('confirm')}
            autoComplete='new-password'
            type='password'
            placeholder='Confirm password'
          />
        </Field>
        <Button type='primary' disabled={(isDirty && !isValid) || signedUp} loading={loading}>
          Register
        </Button>
      </form>
      <SocialAuth />
      <div className='flex justify-around w-full'>
        <Link to='/login'>Already have an account? Log in</Link>
      </div>
    </Card>
  );
};

export default SignUpPage;

import { Button } from '../../core/components/Button';
import { Card } from '../../core/components/Card';
import { Input } from '../../core/components/Input';
import Link from '../../core/components/Link';
import { SocialAuth } from './SocialAuth';

export const SignUpPage = () => {
  return (
    <Card title='Sign up to Trelloc'>
      <Input type='text' placeholder='Enter email'></Input>
      <Input type='password' placeholder='Enter password'></Input>
      <Button type='primary'>Register</Button>
      <SocialAuth></SocialAuth>
      <div className='flex justify-around w-full'>
        <Link to='/login'>Already have an account? Log in</Link>
      </div>
    </Card>
  );
};

export default SignUpPage;

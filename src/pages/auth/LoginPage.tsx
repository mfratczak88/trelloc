import { Button } from '../../core/components/Button';
import { BsGoogle, BsTwitter, BsFacebook } from 'react-icons/bs';
import { Card } from '../../core/components/Card';
import { Input } from '../../core/components/Input';
export const LoginPage = () => {
  return (
    <div className='min-h-screen pt-8'>
      <div className='flex justify-center gap-3'>
        <img className='w-8 md:w-16' src='favicon.svg' alt='Logo' />
        <span className='self-center text-5xl font-bold'>Trelloc</span>
      </div>
      <Card title='Login to Trelloc'>
        <Input type='text' placeholder='Enter email'></Input>
        <Input type='password' placeholder='Enter password'></Input>
        <Button type='primary'>Continue</Button>
        <p>OR</p>
        <Button type='outline'>
          <BsGoogle />
          <span className='ml-2'>Continue with Google</span>
        </Button>
        <Button type='outline'>
          <BsFacebook />
          <span className='ml-2'>Continue with Facebook</span>
        </Button>
        <Button type='outline'>
          <BsTwitter />
          <span className='ml-2'>Continue with Twitter</span>
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;

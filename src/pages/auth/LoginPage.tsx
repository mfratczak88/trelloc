import { Button, ButtonWithIcon } from '../../core/components/Button';
import { BsGoogle, BsTwitter, BsFacebook } from 'react-icons/bs';
import { Card } from '../../core/components/Card';
import { Input } from '../../core/components/Input';
import { Link } from '../../core/components/Link';
import { SocialAuth } from './SocialAuth';

export const LoginPage = () => {
  return (
    <Card title='Login to Trelloc'>
      <Input type='text' placeholder='Enter email'></Input>
      <Input type='password' placeholder='Enter password'></Input>
      <Button type='primary'>Continue</Button>
      <SocialAuth></SocialAuth>
      <div className='flex justify-around w-full'>
        <Link to=''>Can&apos;t login?</Link>
        <Link to='/sign-up'>Sign Up</Link>
      </div>
    </Card>
  );
};

export default LoginPage;

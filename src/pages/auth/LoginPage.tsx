import { Button, ButtonWithIcon } from '../../core/components/Button';
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
        <ButtonWithIcon
          text='Continue with Google'
          icon={<BsGoogle></BsGoogle>}
          type='outline'
        ></ButtonWithIcon>
        <ButtonWithIcon
          text='Continue with Facebook'
          icon={<BsFacebook></BsFacebook>}
          type='outline'
        ></ButtonWithIcon>
        <ButtonWithIcon
          text='Continue with Twitter'
          icon={<BsTwitter></BsTwitter>}
          type='outline'
        ></ButtonWithIcon>
      </Card>
    </div>
  );
};

export default LoginPage;

import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';
import { ButtonWithIcon } from '../../core/components/Button';

export const SocialAuth = () => {
  return (
    <>
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
    </>
  );
};

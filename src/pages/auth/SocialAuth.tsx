import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';
import { ButtonWithIcon } from '../../core/components/Button';

export const SocialAuth = () => {
  return (
    <>
      <p>OR</p>
      <ButtonWithIcon text='Continue with Google' icon={<BsGoogle />} outline />
      <ButtonWithIcon text='Continue with Facebook' icon={<BsFacebook />} outline />
      <ButtonWithIcon text='Continue with Twitter' icon={<BsTwitter />} outline />
    </>
  );
};

import ErrorText from '../../core/components/error/ErrorText';
import ReturnLink from '../../core/components/error/ReturnLink';

function InvalidAuthCodePage() {
  return (
    <>
      <ErrorText>It seems that you already confirmed account, and can log in.</ErrorText>
      <ReturnLink to='/login'>Take me to log in</ReturnLink>
    </>
  );
}

export default InvalidAuthCodePage;

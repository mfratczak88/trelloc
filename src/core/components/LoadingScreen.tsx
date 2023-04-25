import WhiteScreenWithLogoLayout from '../layouts/WhiteScreenWithLogoLayout';

function LoadingScreen() {
  return (
    <WhiteScreenWithLogoLayout>
      <p className='text-4xl text-center'>Loading...</p>
      <progress className='progress block w-1/2' style={{ marginLeft: '25%' }} />
    </WhiteScreenWithLogoLayout>
  );
}

export default LoadingScreen;

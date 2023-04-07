import { BsGoogle, BsTwitter, BsFacebook } from 'react-icons/bs';
export const LoginPage = () => {
  return (
    <div className='min-h-screen pt-8'>
      <div className='flex justify-center gap-3'>
        <img className='w-8 md:w-16' src='favicon.svg' alt='Logo' />
        <span className='self-center text-5xl font-bold'>Trelloc</span>
      </div>
      <div className='px-3 mt-8'>
        <div className='card max-w-md m-auto card-bordered shadow-xl b-1'>
          <div className='card-body items-center b-1 gap-3'>
            <h2 className='card-title m-4'>Login in to Trelloc</h2>
            <input
              type='text'
              placeholder='Enter email'
              className='input input-bordered w-full max-w-md'
            />
            <input
              type='text'
              placeholder='Enter password'
              className='input input-bordered w-full max-w-md'
            />
            <button className='btn btn-primary w-full'>Continue</button>
            <p>OR</p>
            <button className='btn btn-outline w-full'>
              <BsGoogle />
              <span className='ml-2'>Continue with Google</span>
            </button>
            <button className='btn btn-outline w-full'>
              <BsFacebook />
              <span className='ml-2'>Continue with Facebook</span>
            </button>
            <button className='btn btn-outline w-full'>
              <BsTwitter />
              <span className='ml-2'>Continue with Twitter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

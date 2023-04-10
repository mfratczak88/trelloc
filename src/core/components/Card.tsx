import { ReactProps } from '../typings/props';

export interface Props extends ReactProps {
  title: string;
}

export const Card = ({ title, children }: Props) => (
  <div className='px-3 mt-8'>
    <div className='card max-w-md m-auto card-bordered shadow-xl b-1'>
      <div className='card-body items-center b-1 gap-3'>
        <h2 className='card-title m-4'>{title}</h2>
        {children}
      </div>
    </div>
  </div>
);

export default Card;

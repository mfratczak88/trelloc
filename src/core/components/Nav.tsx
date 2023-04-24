import useUser from '../hooks/useUser';

export const Nav = () => {
  const { user } = useUser();
};

export default Nav;

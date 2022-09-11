import React from 'react';
import { useAppSelector } from '../../../hooks/useSelector';
import { Navbar } from '../../components';

const MainNavbar: React.FC = () => {
    const navbar = useAppSelector(state => state.global.navbar);
    return <Navbar title={navbar?.title || ''} />;
}

export default MainNavbar;
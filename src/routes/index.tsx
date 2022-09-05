import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main as MainLayout } from '../layout';
import PublicRoutes from './public';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <PublicRoutes />
            </MainLayout>
        </BrowserRouter>
    );
}

export default Routes;
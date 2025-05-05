import React from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
        return (
                <div>
                        <Header></Header>
                        <div className='md:min-h-[70vh]'>
                                <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                </div>
        );
};

export default Main;
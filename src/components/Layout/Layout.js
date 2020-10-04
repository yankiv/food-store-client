import React, { useState } from 'react';

import classes from './Layout.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideDrawer from '../SideDrawer/SideDrawer';

const Layout = props => {
    const [sideDrawerState, setSideDrawerState] = useState(false);

    const sideDrawerToggleHandler = () => {
        setSideDrawerState(prev => !prev);
        if (!sideDrawerState) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    };

    return (
        <div className={classes.Layout}>
            <Header showSideDrawer={sideDrawerState} drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer showSideDrawer={sideDrawerState} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
import React, { useState } from 'react';

import Header from './Header/Header';
import Heading from './Heading/Heading';
import Categories from './Categories/Categories';
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';

const Landing = () => {
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
        <React.Fragment>
            <Header showSideDrawer={sideDrawerState} drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer showSideDrawer={sideDrawerState} />
            <main>
                <Heading />
                <Categories />
            </main>
            <Footer />
        </React.Fragment>

    );
};

export default Landing;
import React from 'react';

import classes from './Header.module.css';

import DrawerToggle from '../../Ui/DrawerToggle/DrawerToggle';
import Logo from '../../Ui/Logo/Logo';
import Contact from '../../Ui/Contact/Contact';
import Support from '../../Ui/Support/Support';

const header = props => (
    <header className={classes.Header}>
        <div className={classes.HiddenStart}></div>
        <div className={classes.DrawerToggle}>
            <DrawerToggle showSideDrawer={props.showSideDrawer} clicked={props.drawerToggleClicked} />
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div className={classes.Contact}>
            <Contact />
            <Support />
        </div>
        <div className={classes.HiddenEnd}></div>
    </header>
);

export default header;
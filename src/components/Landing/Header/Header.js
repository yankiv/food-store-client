import React from 'react';

import classes from './Header.module.css';

import DrawerToggle from '../../Ui/DrawerToggle/DrawerToggle';
import Logo from '../../Ui/Logo/Logo';

const header = props => (
    <header className={classes.Header}>
        <DrawerToggle showSideDrawer={props.showSideDrawer} clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div className={classes.Empty}></div>
    </header>
);

export default header;
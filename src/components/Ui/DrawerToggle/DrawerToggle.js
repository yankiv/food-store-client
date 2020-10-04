import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = props => {

    let attachedClasses = [classes.DrawerToggle];
    if (props.showSideDrawer) {
        attachedClasses = [classes.DrawerToggle, classes.Open];
    }

    return (
        <div className={attachedClasses.join(" ")} onClick={props.clicked}>
            <div className={classes.Burger}>
            </div>
        </div>
    );
};

export default drawerToggle;
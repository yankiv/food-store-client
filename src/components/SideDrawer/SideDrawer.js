import React from 'react';

import classes from './SideDrawer.module.css';

const SideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.showSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <div className={attachedClasses.join(" ")}>
        </div>
    );
};

export default SideDrawer;
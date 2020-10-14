import React from 'react';

import classes from './SideDrawer.module.css';

import NavigationItems from './NavigationItems/NavigationItems';

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.showSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <div className={attachedClasses.join(" ")}>
            <NavigationItems />
        </div>
    );
};

export default SideDrawer;
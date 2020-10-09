import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Меню</NavigationItem>
        <NavigationItem>Акції</NavigationItem>
        <NavigationItem>Інфо</NavigationItem>
    </ul>
);

export default navigationItems;
import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem href="/store">Меню</NavigationItem>
        <NavigationItem href="/store/promotions">Акції</NavigationItem>
        <NavigationItem href="/store/info">Інфо</NavigationItem>
    </ul>
);

export default navigationItems;
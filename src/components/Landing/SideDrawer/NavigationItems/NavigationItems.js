import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

import Menu from '../../../Ui/Svg/SideDrawer/Menu';
import Info from '../../../Ui/Svg/SideDrawer/Info';
import Telephon from '../../../Ui/Svg/SideDrawer/Info';

const navigationItems = () => (
    <nav>
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/" svg={<Menu />}>Меню</NavigationItem>
            <NavigationItem href="/" svg={<Info />}>Інфо</NavigationItem>
            <NavigationItem href="tel:(097) 583-83-79" svg={<Telephon />} >(095) 785-65-56</NavigationItem>
        </ul>
    </nav>
);

export default navigationItems;
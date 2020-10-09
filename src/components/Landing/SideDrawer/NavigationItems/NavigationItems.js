import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

import Menu from '../../../Ui/Svg/SideDrawer/Menu';
import Info from '../../../Ui/Svg/SideDrawer/Info';
import Chat from '../../../Ui/Svg/Header/Chat';
import Mobile from '../../../Ui/Svg/Header/Mobile';

const navigationItems = () => (
    <nav>
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/store" svg={<Menu />}>Меню</NavigationItem>
            <NavigationItem href="/store/info" svg={<Info />}>Інфо</NavigationItem>
            <NavigationItem href="/help" svg={<Chat />}>Підтримка</NavigationItem>
            <NavigationItem telephone href="tel:(097) 583-83-79" svg={<Mobile />} >(095) 785-65-56</NavigationItem>
        </ul>
    </nav>
);

export default navigationItems;
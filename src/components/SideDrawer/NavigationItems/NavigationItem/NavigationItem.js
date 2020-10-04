import React from 'react';

import classes from './NavigationItem.module.css';

import RightArrow from '../../../Ui/Svg/SideDrawer/RightArrow';

const navigationItem = props => (
    <li className={classes.NavigationItem}>
        <a href={props.href}>
            <span>{props.svg}</span>
            <span>{props.children}</span>
            <span className={classes.RightArrow}><RightArrow /></span>
        </a>
    </li>
);

export default navigationItem;
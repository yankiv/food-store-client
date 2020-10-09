import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationItem.module.css';

import RightArrow from '../../../../Ui/Svg/SideDrawer/RightArrow';

const navigationItem = props => {
    let link = (
        <Link to={props.href}>
            <span>{props.svg}</span>
            <span>{props.children}</span>
            <span className={classes.RightArrow}><RightArrow /></span>
        </Link>
    );

    if (props.telephone) {
        link = (
            <a href={props.href}>
                <span>{props.svg}</span>
                <span>{props.children}</span>
                <span className={classes.RightArrow}><RightArrow /></span>
            </a>
        );
    }

    return (
        <li className={classes.NavigationItem}>
            {link}
        </li>);
};

export default navigationItem;
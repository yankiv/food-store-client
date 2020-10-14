import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationItem.module.css';

import Arrow from '../../../../Ui/Svg/SideDrawer/Arrow';

const navigationItem = props => {
    let link = (
        <Link to={props.href}>
            <span>{props.svg}</span>
            <span>{props.children}</span>
            <span className={classes.RightArrow}><Arrow /></span>
        </Link>
    );

    if (props.telephone) {
        link = (
            <a href={props.href}>
                <span>{props.svg}</span>
                <span>{props.children}</span>
                <span className={classes.RightArrow}><Arrow /></span>
            </a>
        );
    }

    return (
        <li className={classes.NavigationItem}>
            {link}
        </li>);
};

export default navigationItem;
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MenuItem.module.css';

const menuItem = props => (
    <li className={classes.MenuItem}>
        <NavLink to={props.href} activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default menuItem;
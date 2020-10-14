import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './MenuItems.module.css';

import MenuItem from './MenuItem/MenuItem';

const MenuItems = props => {
    let routes = props.routes.map(route => (
        <MenuItem key={route.path} href={props.match.url + route.path}>{route.value}</MenuItem>
    ));

    return (
        <ul className={classes.MenuItems}>
            <MenuItem href="/store">Популярне</MenuItem>
            {routes}
        </ul>
    );
};

export default withRouter(MenuItems);
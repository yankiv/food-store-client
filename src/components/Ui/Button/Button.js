import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const button = props => (
    <Link to={props.href} className={classes.Button}>
        {props.children}
    </Link>
);

export default button;
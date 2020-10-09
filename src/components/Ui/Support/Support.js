import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Support.module.css';

import Chat from '../Svg/Header/Chat';

const support = () => (
    <div className={classes.Support}>
        <Link to="/help">
            <span className={classes.Icon}><Chat /></span>
            <span className={classes.Text}>Допомога</span>
        </Link>
    </div >
);

export default support;
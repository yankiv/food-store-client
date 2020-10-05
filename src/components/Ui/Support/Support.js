import React from 'react';

import classes from './Support.module.css';

import Chat from '../Svg/Header/Chat';

const support = () => (
    <div className={classes.Support}>
        <a href="/">
            <span className={classes.Icon}><Chat /></span>
            <span className={classes.Text}>Допомога</span>
        </a>
    </div >
);

export default support;
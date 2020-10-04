import React from 'react';

import classes from './Logo.module.css';

import pizzaLogo from '../../../assets/images/logo.png';

const logo = () => (
    <div className={classes.Logo}>
        <img src={pizzaLogo} alt="Pizza logo" />
    </div>
);

export default logo;
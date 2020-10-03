import React from 'react';

import pizzaLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = props => (
    <div className={classes.Logo}>
        <img src={pizzaLogo} alt="Pizza logo" />
    </div>
)

export default logo;
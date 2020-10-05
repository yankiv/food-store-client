import React from 'react';

import classes from './Contact.module.css';

import Mobile from '../Svg/Header/Mobile';

const contact = () => (
    <div className={classes.Contact}>
        <a href="tel:(097) 583-83-79">
            <span className={classes.Icon}><Mobile /></span>
            <span className={classes.Text}>(095) 785-65-56</span>
        </a>
    </div>
);

export default contact;
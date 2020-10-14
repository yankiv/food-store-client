import React from 'react';

import classes from './Content.module.css';

import MobileMenu from './MobileMenu/MobileMenu';

const content = props => (
    <div className={classes.Content}>
        <MobileMenu routes={props.routes} />
        {props.children}
    </div>
);

export default content;
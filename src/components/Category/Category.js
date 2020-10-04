import React from 'react';

import classes from './Category.module.css';

const category = props => (
    <li className={classes.Category}>
        <a href="/">
            <figure>
                <img src={props.img} alt="pizza" />
                <figcaption>{props.children}</figcaption>
            </figure>
        </a>
    </li>
);

export default category;
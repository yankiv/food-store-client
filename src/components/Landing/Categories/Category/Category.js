import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Category.module.css';

const category = props => (
    <li className={classes.Category}>
        <Link to="/store">
            <figure>
                <img src={props.img} alt="Категорія" />
                <figcaption>{props.children}</figcaption>
            </figure>
        </Link>
    </li>
);

export default category;
import React from 'react';

import classes from './Heading.module.css';

import Logo from '../Ui/Logo/Logo';
import Button from '../Ui/Button/Button';

const heading = () => (
    <section className={classes.Heading}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <h2>Швидка доставка піци</h2>
        <div className={classes.Button}>
            <Button>Показати меню</Button>
        </div>
    </section>
);

export default heading;
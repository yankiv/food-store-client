import React from 'react';

import classes from './Footer.module.css';

import Instagram from '../Svg/Instagram';
import Facebook from '../Svg/Facebook';
import Button from '../Ui/Button/Button';

const footer = () => (
    <footer className={classes.Footer}>
        <h2>Про нас</h2>
        <div className={classes.Description}>
            <p><b>Ви вже зголодніли і хочете замовити доставку піци у Івано-Франківську, обирайте з понад 20 наших піц, які ми готуємо на дровах.</b></p>
            <p>Якщо у Вас і досі немає нашого додатку для швидкого замовлення та доставки піци Chubi Boom Pizza, обов’язково завантажуйте, і за кілька кліків у смартфоні та трішки часу отримуйте найсмачнішу піцу від піцерії Чубі Бум.</p>
            <p>У нас простий і зручний сервіс для замовлення безкоштовної доставки піци. Виберіть улюблену піцу та зробіть замовлення, підтвердіть його та очікуйте на доставку найсмачнішої піци на дровах.</p>
        </div>
        <div className={classes.Actions}>
            <div className={classes.Button}>
                <Button>Показати меню</Button>
            </div>
            <nav className={classes.Navigation}>
                <a href="/">Акції</a>
                <a href="/">Інфо</a>
                <a href="/">Правила</a>
            </nav>
            <div className={classes.Social}>
                <span>Ми в соціальних мережах:</span>
                <Instagram />
                <Facebook />

            </div>
        </div>
        <div className={classes.Copyright}>
            KOLYA IS THE BEST
        </div>
    </footer>
);

export default footer;
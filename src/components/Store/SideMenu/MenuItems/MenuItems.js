import React from 'react';

import classes from './MenuItems.module.css';

import MenuItem from './MenuItem/MenuItem';

const MenuItems = () => (
    <ul className={classes.MenuItems}>
        <MenuItem href="/store">Популярне</MenuItem>
        <MenuItem href="/store/pizza">Піца</MenuItem>
        <MenuItem href="/store/pizza-cheese">Піца з сирними бортиками</MenuItem>
        <MenuItem href="/store/pizza-adds">Додатки до піци</MenuItem>
        <MenuItem href="/store/varenyky">Вареники та пельмені</MenuItem>
        <MenuItem href="/store/salads">Салати</MenuItem>
        <MenuItem href="/store/other-dishes">Інші страви</MenuItem>
        <MenuItem href="/store/sauces">Соуси</MenuItem>
        <MenuItem href="/store/popcorn">Попкорн</MenuItem>
        <MenuItem href="/store/drinks">Напої</MenuItem>
    </ul>
);

export default MenuItems;
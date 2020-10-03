import React, { useEffect } from 'react';

import Category from '../Category/Category';

import classes from './Categories.module.css';

import categoryPizza from '../../assets/images/category-pizza.png';
import categoryVareniki from '../../assets/images/category-vareniki.png';
import categorySalads from '../../assets/images/category-salads.png';
import categoryDrinks from '../../assets/images/category-drinks.png';

import Glider from 'glider-js';
import '../../../node_modules/glider-js/glider.min.css';

const Categories = (props) => {
    useEffect(() => {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 4,
            draggable: true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 'auto',
                        itemWidth: 325,
                        exactWidth: true,
                        duration: 0.25
                    }
                }
            ]
        });
    });

    return (
        <section className={classes.Categories}>
            <div className="glider-contain multiple">
                <h2>Категорії</h2>
                <div className={classes.Slider}>
                    <button className="glider-prev" style={{ left: 20 }}>&lt;</button>
                    <ul className="glider" style={{ padding: 0 }}>
                        <Category img={categoryPizza}>Піца</Category>
                        <Category img={categoryVareniki}>Вареники</Category>
                        <Category img={categorySalads}>Салати</Category>
                        <Category img={categoryDrinks}>Напої</Category>
                        <Category img={categoryPizza}>Піца</Category>
                        <Category img={categoryVareniki}>Вареники</Category>
                        <Category img={categorySalads}>Салати</Category>
                        <Category img={categoryDrinks}>Напої</Category>
                    </ul>
                    <button className="glider-next" style={{ right: 20 }}>&gt;</button>
                </div>
            </div>
        </section>
    );
}

export default Categories;
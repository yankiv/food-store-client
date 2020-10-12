import React from 'react';

import classes from './SideMenu.module.css';

import MenuItems from './MenuItems/MenuItems';
import Logo from '../../Ui/Logo/Logo';
import Clock from '../../Ui/Svg/Store/Clock';
import Card from '../../Ui/Svg/Store/Card';
import Terminal from '../../Ui/Svg/Store/Terminal';
import Car from '../../Ui/Svg/Store/Car';
import Question from '../../Ui/Svg/Store/Question';

const sideMenu = () => (
    <section className={classes.SideMenu}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div>
            <div className={classes.Timesheet}>
                <div className={classes.Icon} style={{ marginLeft: 5, marginRight: 12 }}>
                    <Clock />
                </div>
                <time className={classes.Text} style={{ marginRight: 12 }}>10:00-21:50</time>
                <div title="Доступна онлайн оплата" className={classes.Icon} style={{ marginRight: 4, marginTop: 8, width: 23, height: 23 }}>
                    <Card />
                </div>
                <div title="Доступна оплата карткою при отриманні" className={classes.Icon}>
                    <Terminal />
                </div>
                <div className={`${classes.Icon} ${classes.Tooltip}`} style={{ marginLeft: "auto", marginRight: 5, width: 16, height: 16 }}>
                    <Question />
                    <div style={{ width: 270, height: 210, top: -97 }}>
                        <span>Графік прийому замовлень</span>
                        <p>пн - з 11:00 до 21:50</p>
                        <p>вт - з 11:00 до 21:50</p>
                        <p>ср - з 11:00 до 21:50</p>
                        <p>чт - з 11:00 до 21:50</p>
                        <p>пт - з 11:00 до 21:50</p>
                        <p>сб - з 10:00 до 21:50</p>
                        <p>нд - з 10:00 до 21:50</p>
                        <span>Способи оплати</span>
                        <p>готівкою при отриманні</p>
                        <p>карткою онлайн</p>
                        <p>карткою при отриманні</p>
                    </div>
                </div>
            </div>
            <div className={classes.Cost}>
                <div className={classes.Icon} style={{ marginLeft: 5, marginRight: 12 }}>
                    <Car />
                </div>
                <p style={{ margin: 0 }}>Доставка від 0 ₴</p>
                <div className={`${classes.Icon} ${classes.Tooltip}`} style={{ marginLeft: "auto", marginRight: 5, width: 16, height: 16 }}>
                    <Question />
                    <div style={{ width: 280, height: 95, top: -38 }}>
                        <span>Вартість доставки</span>
                        <p><b>Доставка до дому</b> - 35 ₴</p>
                        <p>(Безкоштовно при замовленні від 150 ₴)</p>
                        <p><b>Самовивіз</b> - безкоштовно</p>
                        <p><b>Замовлення в закладі</b> - безкоштовно</p>
                    </div>
                </div>
            </div>
            <div className={classes.Menu}>
                <MenuItems />
            </div>
        </div>
    </section >
);

export default sideMenu;
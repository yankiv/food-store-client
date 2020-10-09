import React from 'react';

import classes from './Header.module.css';

import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../../Ui/Logo/Logo';
import Contact from '../../Ui/Contact/Contact';
import Support from '../../Ui/Support/Support';

const header = () => (
    <header className={classes.Header}>
        <div className={classes.Sticky}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.CompanyName}>
                <p>Pizza</p>
            </div>
            <div className={classes.Hidden}></div>
        </div>
        <div className={classes.NonSticky}>
            <nav className={classes.Navigation}>
                <NavigationItems />
            </nav>
            <div className={classes.Help}>
                <div className={classes.GreyBox}>
                    <div className={classes.Contact}>
                        <Contact />
                    </div>
                </div>
                <div className={classes.RedBox}>
                    <div className={classes.Support}>
                        <Support />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default header;
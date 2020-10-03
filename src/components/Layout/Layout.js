import React from 'react';

import classes from './Layout.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <div className={classes.Layout}>
        <Header />
        <main >
            {props.children}
        </main>
        <Footer />
    </div>
);

export default layout;
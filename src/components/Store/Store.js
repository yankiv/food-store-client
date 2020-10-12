import React from 'react';

import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import Content from './Content/Content';

const store = () => (
    <React.Fragment>
        <Header />
        <main>
            <SideMenu />
            <Content />
        </main>
    </React.Fragment>
);

export default store;
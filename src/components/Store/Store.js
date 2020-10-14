import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import Content from './Content/Content';

const store = props => {
    const fetchedRoutes = [
        { path: "/pizza", value: "Піца" },
        { path: "/pizza-cheese", value: "Піца з сирним бортиками" },
        { path: "/pizza-adds", value: "Додатки до піци" },
        { path: "/varenyky", value: "Вареники та пельмені" },
        { path: "/salads", value: "Салати" },
        { path: "/other-dishes", value: "Інші страви" },
        { path: "/sausec", value: "Соуси" },
        { path: "/popcorn", value: "Попкорн" },
        { path: "/drinks", value: "Напої" },
    ];

    let routes = (
        <Switch>
            {fetchedRoutes.map(route => (
                <Route key={route.path} path={props.match.url + route.path} exact />
            ))}
        </Switch>
    );

    return (
        <>
            <Header />
            <main>
                <SideMenu routes={fetchedRoutes} />
                <Content routes={fetchedRoutes}>{routes}</Content>
            </main>
        </>
    );
};

export default store;
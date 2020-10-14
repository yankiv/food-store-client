import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './MobileMenu.module.css';

import Arrow from '../../../Ui/Svg/SideDrawer/Arrow';

const MobileMenu = props => {
    const routes = props.routes.map(route => (
        <h3 onClick={() => selectHandler(route.value, props.match.url + route.path)} key={props.match.url + route.path}>{route.value}</h3>
    ));

    const ref = useRef();


    const [routesState, setRoutesState] = useState(routes);
    const [dropdownState, setDropdownState] = useState(false);
    const [selectedState, setSelectedState] = useState({ value: "Популярне", path: "/store" });
    const [isStickyState, setIsStickyState] = useState(false);


    useEffect(() => {
        const cachedRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => setIsStickyState(entry.intersectionRatio < 1),
            { threshold: [1] }
        );

        observer.observe(cachedRef);

        return () => observer.unobserve(cachedRef);
    }, [ref]);


    const toggleHandler = () => {
        return setDropdownState(prev => !prev);
    };

    const selectHandler = (value, path) => {
        props.history.push(path);
        setDropdownState(true);
        setRoutesState(() => {
            if (value !== "Популярне") {
                const arr = [...routes];
                const popular = <h3 onClick={() => selectHandler("Популярне", "/store")} key="/store">Популярне</h3>;
                arr.unshift(popular);
                return arr.filter(e => e.key !== path);
            } else {
                return [...routes];
            }
        });
        setSelectedState({ value, path });
    };

    return (
        <>
            <div ref={ref} className={classes.MobileMenuTrigger}></div>
            <div onClick={toggleHandler} className={classes.DropDown + " " + (isStickyState ? classes.IsSticky : "")}>
                <h3>{selectedState.value}</h3>
                <div className={classes.Arrow + " " + (dropdownState ? classes.ArrowUp : classes.ArrowDown)}>
                    <Arrow />
                </div>
                <div className={dropdownState ? classes.Show : classes.Hidden}>
                    {routesState}
                </div>
            </div>
        </>
    );
};

export default withRouter(MobileMenu);
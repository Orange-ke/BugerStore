/**
 * Created by keyang on 2019/5/9.
 */
import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/Orders' >Orders</NavigationItem>
    </ul>
);

export default navigationItems;
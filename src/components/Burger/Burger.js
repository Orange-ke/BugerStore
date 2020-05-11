/**
 * Created by keyang on 2019/5/7.
 */
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BugerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr,el) => {
            return arr.concat(el);
        },[]); // reduce((accumulator, currentValue), initialValue)

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='burger-top'/>
            {transformedIngredients}
            <BurgerIngredient type='burger-bottom'/>
        </div>
    );
};

export default burger;
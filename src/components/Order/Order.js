/**
 * Created by keyang on 2019/5/22.
 */

import React from 'react';
import classes from './Order.module.css';

const order = (props) => {

    let ingredients = [];

    for (let ingredient in props.ingredients)
        ingredients.push(
            {
                name: ingredient,
                amount: props.ingredients[ingredient]
            }
        );

    return (
        <div className={classes.Order}>
            <p>Ingredients:
                {
                    ingredients.map(ig => {
                        return (
                            <span
                                style={{
                                textTransform: 'capitalize',
                                display: 'inline-block',
                                margin: '0 8px',
                                padding: '5px',
                                border: '1px solid #ccc'
                                }}
                                key={ig.name}
                            >
                                {ig.name} ({ig.amount})
                            </span>
                        )
                    })
                }
            </p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default order;
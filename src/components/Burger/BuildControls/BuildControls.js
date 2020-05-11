/**
 * Created by keyang on 2019/5/8.
 */

import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong> $ {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label}
                                 label={ctrl.label}
                                 disabled={props.disabled[ctrl.type]}
                                 add={() => props.add(ctrl.type)}
                                 remove={() => props.remove(ctrl.type)} />
        })}
        <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;


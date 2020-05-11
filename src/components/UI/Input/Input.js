/**
 * Created by keyang on 2019/6/11.
 */

import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let InputElement = null;
    const inputClass = [classes.InputElement];

    if (props.invalid && props.shouldValidation && props.touched) {
        inputClass.push(classes.Invalid);
    }

    switch (props.elementType) {
        case 'input':
            InputElement = <input
                onChange={props.changed}
                className={inputClass.join(' ')}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case 'textarea':
            InputElement = <textarea
                onChange={props.changed}
                className={inputClass.join(' ')}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case 'select':
            InputElement = (
                <select className={inputClass.join(' ')} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            InputElement = <input
                onChange={props.changed}
                className={inputClass.join(' ')}
                {...props.elementConfig}
                value={props.value} />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {InputElement}
        </div>
    )
};

export default input;
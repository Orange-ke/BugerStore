/**
 * Created by keyang on 2019/5/21.
 */

import React from 'react';
import Burger from '../../Burger/Burger';
import Button from './../../UI/Button/Button';
import classes from './CheckOutSummary.module.css';

const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it is delicious!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button BtnType="Danger" clicked={props.canceled}>CANCEL</Button>
            <Button BtnType="Success" clicked={props.continued}>CONTINUE</Button>
        </div>
    )
};

export default checkOutSummary;
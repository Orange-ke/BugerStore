/**
 * Created by keyang on 2019/5/8.
 */
import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
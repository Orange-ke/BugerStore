/**
 * Created by keyang on 2019/5/9.
 */
import React, {Component} from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SiderDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import PropTypes from 'prop-types';

class SideDrawer extends Component {

    render() {
        //...
        let attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open];
        }

        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            </Aux>
        )
    }
}

SideDrawer.propTypes = {
    open: PropTypes.bool,
    closed: PropTypes.func
};

export default SideDrawer;
/**
 * Created by keyang on 2019/5/8.
 */

import React, {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // improving the app,re-render the modal component only when necessary
    shouldComponentUpdate = (nextProps, nextState) => {
        return this.props.show !== nextProps.show || nextProps.children !== this.props.children;
    };

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;
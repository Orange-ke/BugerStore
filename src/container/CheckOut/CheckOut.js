/**
 * Created by keyang on 2019/5/21.
 */

import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';
import classes from './CheckOut.module.css';

class CheckOut extends Component {

    checkOutCanceled = () => {
        this.props.history.goBack();
    };

    checkOutContinued = () => {
        this.props.history.replace('/CheckOut/contact-data');
    };

    // without redux
    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //
    //     for (let param of query.entries()) {
    //         // param: ['salad': '1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({
    //         ingredients: ingredients,
    //         totalPrice: price
    //     })
    // }

    render() {
        return (
            <div className={classes.CheckOut}>
                <CheckOutSummary
                    ingredients={this.props.ings}
                    canceled={this.checkOutCanceled}
                    continued={this.checkOutContinued}
                />
                {/* use redux */}
                <Route path={this.props.match.path + '/contact-data'}
                       component={ContactData} />

                {/*<Route path={this.props.match.path + '/contact-data'}*/}
                       {/*render={ (props) => (*/}
                           {/*<ContactData ingredients={this.state.ingredients}*/}
                                        {/*price={this.state.totalPrice}*/}
                                        {/*{...props} />)} />*/}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

export default connect(mapStateToProps)(CheckOut);
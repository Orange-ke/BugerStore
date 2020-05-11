/**
 * Created by keyang on 2019/5/7.
 */

import React, {Component} from "react";
import {connect} from "react-redux";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions";


class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        purchasing: false, //for model show ,UI state
        loading: false, // for spinner show ,UI state
        error: false // for error massage show , UI state
    };

    // componentDidMount = () => {
    //     axios.get('https://react-my-burger-347ec.firebaseio.com/ingredients.json').then(res => {
    //         this.setState({ingredients: res.data});
    //         this.updatePurchaseState(this.state.ingredients);
    //     }).catch(error => {
    //         this.setState({error: true});
    //     })
    // };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            return sum > 0
    };

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const undatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     undatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: undatedIngredients
    //     });
    //     this.updatePurchaseState(undatedIngredients);
    // };
    //
    // removeIngredientHandler = (type) => {
    //     if (this.state.ingredients[type] > 0) {
    //         const oldCount = this.state.ingredients[type];
    //         const updatedCount = oldCount - 1;
    //         const undatedIngredients = {
    //             ...this.state.ingredients
    //         };
    //         undatedIngredients[type] = updatedCount;
    //         const priceRemover = INGREDIENT_PRICES[type];
    //         const oldPrice = this.state.totalPrice;
    //         const newPrice = oldPrice - priceRemover;
    //         this.setState({
    //             totalPrice: newPrice,
    //             ingredients: undatedIngredients
    //         });
    //         this.updatePurchaseState(undatedIngredients);
    //     }
    // };

    purchasingHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseContinueHandler = () => {

        this.props.history.push({pathname: '/CheckOut'});

        // without redux
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParams.push('price=' + this.state.totalPrice );
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/CheckOut',
        //     search: '?' + queryString
        // });
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    render() {
        // disable button when less than 0
        const disabledInfo = {
            ...this.props.ings
        };

        for (let value in disabledInfo) {
            disabledInfo[value] = disabledInfo[value] <= 0;
        }

        let burger = this.state.error ? <p>Can't get data from database</p> : <Spinner />;
        let orderSummary = null;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        price={this.props.price}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        add={this.props.onIngredientAdded}
                        remove={this.props.onIngredientRemoved}
                        ordered={this.purchasingHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                ingredients={this.props.ings}
                price={this.props.price} />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
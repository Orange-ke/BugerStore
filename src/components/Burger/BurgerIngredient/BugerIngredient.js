/**
 * Created by keyang on 2019/5/7.
 */
import React, {Component} from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null; // burger ingredient

        switch (this.props.type) {
            case ('burger-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('burger-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
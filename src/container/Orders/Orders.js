/**
 * Created by keyang on 2019/5/22.
 */
import React, {Component} from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: null,
        loading: true
    };

    componentDidMount() {
        axios.get('orders.json')
            .then(res => {
                console.log(res.data);
                let fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }

    render() {

        let orders = <Spinner/>;

        if (!this.state.loading) {
            orders = (
                <Aux>
                    {
                        this.state.orders.map(order => {
                            return (
                                <Order key={order.id}
                                       ingredients={order.ingredients}
                                       price={+order.price}
                                />
                            )
                        })
                    }
                </Aux>
            )
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);
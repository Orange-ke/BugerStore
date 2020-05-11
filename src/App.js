import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import CheckOut from './container/CheckOut/CheckOut';
import Orders from './container/Orders/Orders';

class App extends Component {

    // state = {
    //     show: true
    // };
    //
    // componentDidMount = () => {
    //     setTimeout(() => this.setState({show: false}),3000)
    // };

    render () {
        return (
            <div>
                <Layout>
                    {/*{ this.state.show ? <BurgerBuilder /> : null }*/}
                    <Switch>
                        <Route path='/CheckOut' component={CheckOut} />
                        <Route path='/Orders' component={Orders} />
                        <Route path='/' component={BurgerBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;

/**
 * Created by keyang on 2019/5/10.
 */
import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-347ec.firebaseio.com/'
});

export default instance;
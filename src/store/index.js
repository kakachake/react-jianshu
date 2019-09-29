/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-29 16:48:13
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-29 16:54:21
 */
import { createStore } from 'redux';
import reducer from './reducer'


const store = createStore(reducer);

export default store;
/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-27 22:45:48
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-29 16:56:00
 */
import React from 'react'
import { GlobalStyle } from './style.js'
import { GlobalStyleFont } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store = {store}>
      <div>
        <GlobalStyle/>
        <GlobalStyleFont/>
        <Header/>
        Hello world
      </div>
    </Provider>
  );
}

export default App;

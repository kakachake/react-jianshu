/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-27 22:45:48
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-27 23:28:17
 */
import React from 'react';
import {GlobalStyle} from './style.js';
import Header from './common/header/index'

function App() {
  return (
    <div className="kaka">
      <GlobalStyle/>
      <Header/>
      Hello world
    </div>
  );
}

export default App;

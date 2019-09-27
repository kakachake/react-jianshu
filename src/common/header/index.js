/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-27 23:24:01
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-27 23:49:21
 */
import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo
} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"/>
            </HeaderWrapper>
        )
    }
}

export default Header;

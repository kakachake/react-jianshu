/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-27 23:24:01
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-28 09:24:28
 */
import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"/>
                <Addition>
                    <Button className="writing">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
                <Nav>
                    <NavItem className = "left active">首页</NavItem>
                    <NavItem className = "left">下载App</NavItem>
                    <NavItem className = "right">登陆</NavItem>
                    <NavItem className = "right">Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;

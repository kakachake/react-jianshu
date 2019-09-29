/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-27 23:24:01
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-29 17:20:28
 */
import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

const Header = (props)=>{
    return (
        <HeaderWrapper>
            <Logo href="/"/>
            <Addition>
                <Button className="writing"><span className="iconfont">&#xe768;</span>写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
            <Nav>
                <NavItem className = "left active">首页</NavItem>
                <NavItem className = "left">下载App</NavItem>
                <NavItem className = "right">登陆</NavItem>
                <NavItem className = "right"><span className="iconfont">&#xe636;</span></NavItem>
                <CSSTransition
                    in = {props.focused}
                    timeout={200}
                    classNames="slide">
                    <SearchWrapper
                        >
                        <NavSearch
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}></NavSearch>
                        <span  className={props.focused?"iconfont focused":"iconfont"}>&#xe637;</span>
                    </SearchWrapper>
                </CSSTransition>
            </Nav>
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) => {
    return{
        focused: state.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(){
            const action = {
                type: 'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur(){
            const action = {
                type: 'search_blur'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);

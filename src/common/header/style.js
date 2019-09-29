/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-27 23:29:10
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-29 12:14:10
 */
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`    
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href:"/"
})`
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 100px;
    display: block;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div.attrs()`
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
`
export const NavItem = styled.div.attrs()`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
        
    }
    &.right {
        float: right;
        color: #969696;
        font-famliy: sans-serif;
    }
    &.active {
        color: #ea6f5a;
    }
`
export const SearchWrapper = styled.div.attrs({
})`
    position: relative;
    width: 160px;
    height: 56px;
    margin-left: 20px;
    display: inline-block;
    &.slide-enter,&.slide-exit-active,&.slide-exit-done{
        transition: all .2s ease-out;
    }
    &.slide-enter-active,&.slide-enter-done, &.slide-exit{
        width: 240px;
    }
    // &.focused {
    //     width: 200px;
    //     .iconfont{
    //         color:#fff;
    //         background: #969696;
    //     }
    // }
    .iconfont {
        position: absolute;
        right:5px;
        top: 50%;
        font-size: 18px;
        transform: translateY(-50%);
        cursor: pointer;
        color:#969696;
        line-height: 30px;
        width: 30px;
        text-align: center;
        border-radius: 15px;
        transition: all .5s;
        &.focused {
            color:#fff;
            background: #969696;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    padding:0 35px 0 20px;
    outline: none;
    border-radius: 19px;
    border: none;
    margin: 9px 0;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder{
        color: #999;
    }
`
export const Addition = styled.div`
    float: right;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-right: 20px;
    padding: 0 20px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    font-size: 14px;
    cursor: pointer;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`

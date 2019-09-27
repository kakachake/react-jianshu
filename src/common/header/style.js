/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-27 23:29:10
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-27 23:49:54
 */
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
console.log(logoPic)
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

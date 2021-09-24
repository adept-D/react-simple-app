import React from 'react'
import classes from './Header.module.css'

class Header extends React.Component{

    render(){
        return(
            <header className = {classes.header}>
                <ul className = {classes.header__list}>
                    <a className = {classes.header__list__link} href="#"><li>LOGO</li></a>
                    <a className = {classes.header__list__link} href="#"><li>СURRENCY CONVERSION</li></a>
                </ul>
                
            </header>
        )
    }
}

export default Header;
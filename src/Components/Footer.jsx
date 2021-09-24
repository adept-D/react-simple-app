import React from 'react'
import classes from './Footer.module.css'

class Footer extends React.Component{

    render(){
        return(
            <footer className = {classes.footer}>
                <ul className = {classes.footer__list}>
                    <a href="https://github.com/adept-D" target="_blank"><li>Github</li></a>
                    <a href="#" ><li>LinkedIn</li></a>
                    <a href="https://vk.com/dias2010" target="_blank"><li>Vk</li></a>
                    <a href="#"><li>YouTube</li></a>
                </ul>
            </footer>
        )
    }
}

export default Footer;
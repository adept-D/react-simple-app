import { Link } from '@material-ui/core';
import React from 'react'
import classes from './Footer.module.css'

class Footer extends React.Component{

    render(){
        return(
            <footer className = {classes.footer}>
                <ul className = {classes.footer__list}>
                    <Link  href="https://github.com/adept-D" target="_blank"><li>Github</li></Link>
                    <Link  href="#" ><li>LinkedIn</li></Link>
                    <Link  href="https://vk.com/dias2010" target="_blank"><li>Vk</li></Link>
                    <Link  href="#"><li>YouTube</li></Link>
                </ul>
            </footer>
        )
    }
}

export default Footer;
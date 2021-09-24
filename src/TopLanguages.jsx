import React from 'react'
import classes from './TopLanguages.module.css'

class TopLanguages extends React.Component{


    render(){
        return(
            <article className={classes.article}>
                <ul className={classes.article__list}>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Dart/Flutter</li>
                    <li>Go</li>
                    <li></li>

                </ul>
            </article>
        )
    }
}


export default TopLanguages;
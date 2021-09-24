import { Button, Input } from '@material-ui/core'
import React from 'react'
import classes from './Content.module.css'



class Content extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
        this.changeBtn = this.changeBtn.bind(this);

        this.state = {
            valueInput: '',
            valueDisabledInput:0,
            btnIsClicked:false,
        }
    }


    handleClick(e){
        this.setState({
            valueInput:e.target.value.replace(/[^\d.]/g, ''),
        })    
    }
   

    changeBtn = function(){ 
        console.log(this.state.btnIsClicked)
        this.setState({
            btnIsClicked:true,
        })

        
        this.setState({
            valueDisabledInput:  this.state.valueInput * 72.72,
            btnIsClicked: false,
        })   
        
        console.log(this.state.btnIsClicked)

    }

    render(){
        return(
            <main className = {classes.main}>
                <h1>{this.props.text}</h1>
                <div className = {classes.main__content}>      
                    <Input  className = {classes.input} placeholder="Enter value dollar" value = {this.state.valueInput} onChange = {this.handleClick} />
                    <Button className = {classes.btn} onClick = {this.changeBtn}>Enter</Button>
                    <label  className = {classes.label} htmlFor="exit"  ><input placeholder="Wait result here" value = {this.state.valueDisabledInput} type="text"  onClick = {this.handleChange} /></label>
                </div>
                
            </main>
        )
    }
}

export default Content;
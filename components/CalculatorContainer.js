import React,{ Component } from "react"
import {View} from 'react-native'
import Calculator from './Calculator'

export default class CalculatorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          totalOperation:0,
          selectedOperation:'+',
          result:null,
          firstInputValue:'',
          secondInputValue:''
        }
        }
        updateFirstInputValue = (evt) => {
            
            this.setState({firstInputValue:evt});
        }
        updateSecondInputValue = (evt) => {
          this.setState({secondInputValue:evt});
        }
        onReset = () => {
          this.setState(
            {
              selectedOperation:'+',
              result:null,
              firstInputValue:'',
              secondInputValue:''
            }
          )
        }
        onAddButton = () => {
          if(this.state.firstInputValue != '' && this.state.secondInputValue != ''){
            let res = parseInt(this.state.firstInputValue) + parseInt(this.state.secondInputValue);
            this.setState({
              totalOperation:this.state.totalOperation+1,
              selectedOperation:'+',
              result:`Result: ${res}`
            });
          
          }
        }
        
        onSubtractButton = () => {
          if(this.state.firstInputValue != '' && this.state.secondInputValue != ''){
            let res = parseInt(this.state.firstInputValue) - parseInt(this.state.secondInputValue);
            this.setState({
              totalOperation:this.state.totalOperation+1,
              selectedOperation:'-',
              result:`Result: ${res}`
            });
          
          }
        }
        
        onMultipleButton = () => {
          if(this.state.firstInputValue != '' && this.state.secondInputValue != ''){
            let res = parseInt(this.state.firstInputValue) * parseInt(this.state.secondInputValue);
            this.setState({
              totalOperation:this.state.totalOperation+1,
              selectedOperation:'*',
              result:`Result: ${res}`
            });
          
          }
        }
        
        onDivideButton = () => {
          if(this.state.firstInputValue != '' && this.state.secondInputValue != ''){
            let res = parseInt(this.state.firstInputValue) / parseInt(this.state.secondInputValue);
            this.setState({
              totalOperation:this.state.totalOperation+1,
              selectedOperation:'/',
              result:`Result: ${res}`
            });
          
          }
        }

        onButtonClick = (type) => {
            if(type == 'add'){
                this.onAddButton();
            }else if(type == 'sub'){
                this.onSubtractButton();
            }else if(type == 'mul'){
                this.onMultipleButton();
            }else if(type == 'div'){
                this.onDivideButton();
            }else if(type == 'reset'){
                this.onReset();
            }
        }

    render(){
        return(
            <View style={{flex:1,margin:5}}>
                <Calculator 
                totalOperation={this.state.totalOperation}
                selectedOperation={this.state.selectedOperation}
                result={this.state.result}
                firstInputValue = {this.state.firstInputValue}
                secondInputValue = {this.state.secondInputValue}
                updateFirstInputValue={this.updateFirstInputValue}
                updateSecondInputValue={this.updateSecondInputValue}
                onButtonClick = {this.onButtonClick}
                />
            </View>
        )
    }
}
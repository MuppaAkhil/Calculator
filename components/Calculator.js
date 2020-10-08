import React from "react"
import {View, StyleSheet,Text,TextInput} from 'react-native'
import Button from './Button'

export default Calculator = ({totalOperation,selectedOperation,result,firstInputValue,secondInputValue,updateFirstInputValue,updateSecondInputValue,onButtonClick}) => {

    


    return (
        <View style={styles.container}>
            <Text style={styles.total}>{`Total operations performed: ${totalOperation}`}</Text>
            <View style={styles.card}>
                <View style={styles.top}>
                     <TextInput keyboardType={'number-pad'} style={styles.text} placeholder={'Eg: 1'} onChangeText={updateFirstInputValue}>{firstInputValue}</TextInput>
                    <Text style={{marginHorizontal:15,marginTop:10}}>{selectedOperation}</Text>
                    <TextInput keyboardType={'number-pad'} style={styles.text} placeholder={'Eg: 2'} onChangeText={updateSecondInputValue}>{secondInputValue}</TextInput>
                </View>
                <View style={styles.middle}>
                    <Button value={'+'} onClick={() => onButtonClick('add')}/>
                    <Button value={'-'} onClick={() => onButtonClick('sub')}/>
                    <Button value={'*'} onClick={() => onButtonClick('mul')}/>
                    <Button value={'/'} onClick={() => onButtonClick('div')}/>
                </View>
                <View style={styles.bottom}>
                    <Button color = {'#a93c32'} value={'Reset'} onClick={() => onButtonClick('reset')}/>
                    { result && <Text style={styles.result}>{result}</Text>}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       marginTop:70,
       margin:10
   },
   total:{
       alignSelf:'center',
       fontSize:18,
       fontWeight:'800'
   },
   card:{
    marginTop:20,
    paddingTop:60,   
    padding:20,
    backgroundColor:'white',
    shadowColor:'#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   },
   text:{
    flex:1,
    backgroundColor:'#f3f7f7',
    padding:10
   },
   top:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:40
   },
   middle:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:40
   },
   bottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   result:{
       color:'#197f5b',
       fontWeight:'bold',
       fontSize:18,
       marginRight:20,
       letterSpacing:1,
   }  
});
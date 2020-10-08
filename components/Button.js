import {TouchableOpacity,Text} from 'react-native'
import React from "react"

export default Button = ({value,onClick, color='#1ba94c'}) => {
    return (
        <TouchableOpacity onPress={onClick} style={{paddingHorizontal:20,paddingVertical:10,backgroundColor:color}}>
            <Text style={{color:'white'}}>{value}</Text>
        </TouchableOpacity>
    )
}
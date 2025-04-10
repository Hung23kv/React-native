import React from "react";
import { View } from "react-native";
import Compose from './Compose'

export default class App extends React.Component{
    state = {
        myState: 'This is my state'
    }
    render(){
        return(
            <View>
                <Compose myState = {this.state.myState} />
            </View>
        );
    }
}
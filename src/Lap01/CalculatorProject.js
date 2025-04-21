import React,{useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import { evaluate } from 'mathjs';

const Cauaulator = () => {
    const [darkMode,setdarkMode] = useState(false);
    const [currentNumber,setCurrentNumber] = useState("")
    const [lastNumber,setLastNumber] = useState("")


    const bgColorFuntion = (darkMode) ? "#414853" : "#ededed";
    const bgColorNumber = (darkMode) ? "#303946" : "#fff";
    const bgColorResult= (darkMode) ? "#282f3b" : "#f5f5f5";
    const bgColorThemeButton = (darkMode) ? "#7b8084" : "#e5e5e5";
    const TextColorHistory = (darkMode) ? "#B5B7BB" : "#7c7c7c";
    const ColorIcon = (darkMode) ? "white" : "black";

    const buttonLeft = [
        ["C","DEL"],
        [7,8,9],
        [4,5,6],
        [1,2,3],
        [0,"."]
    ]

    const buttonRight = [
        "/","*","-","+","="
    ]

    const calculator = () => {
        const lastChar = currentNumber[currentNumber.length - 1];
        if (["+", "-", "*", "/", "."].includes(lastChar)) {
            return;
        }
        try {
            let result = evaluate(currentNumber).toString();
            setCurrentNumber(result);
        } catch {
            setCurrentNumber("Error");
        }
    };

    const handleInput = (btn) => {
        switch (btn) {
            case "C":
                setCurrentNumber("");
                setLastNumber("");
                break;
            case "DEL":
                setCurrentNumber(currentNumber.slice(0, -1));
                break;
            case "=":
                setLastNumber(currentNumber + "=");
                calculator();
                break;
            default:
                setCurrentNumber(currentNumber + btn);
        }
    };

    return(
        <View style={mystyles.container}>
            <View style={{...mystyles.containerResult,backgroundColor:bgColorResult}}>
                <IconButton
                    icon={darkMode ? "white-balance-sunny" : "moon-waning-crescent"}
                    size={30}
                    onPress={() => setdarkMode(!darkMode)}
                    style={{ ...mystyles.themeButton, backgroundColor: bgColorThemeButton }}
                    iconColor={ColorIcon}
                />
                <Text style = {{...mystyles.historyText,color:TextColorHistory}}>{lastNumber}</Text>
                <Text style = {{...mystyles.resultText}}>{currentNumber}</Text>
            </View>
            <View style={mystyles.containerButton}>
                <View style={{...mystyles.containerButtonLeft}}>
                    {
                        buttonLeft.map((row,index)=>
                        <View style = {{...mystyles.containerRow,backgroundColor:(index==0)?bgColorFuntion:bgColorNumber}} >
                            {
                                row.map(item =>
                                    <TouchableOpacity style={mystyles.button} 
                                    onPress={() => handleInput(item)}
                                    >
                                        <Text style={mystyles.buttonText}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        )
                    }
                </View>
                <View style={{...mystyles.containerButtonRight}}>
                    {
                        buttonRight.map((item)=>
                        <TouchableOpacity style = {{...mystyles.button}}
                        onPress={() => handleInput(item)}
                        >
                                <Text style={{...mystyles.buttonText,color:'#fff'}}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </View>
    )
}
export default Cauaulator;

const mystyles = StyleSheet.create ({
    container:{
        flex:1,
    },
    containerResult:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'flex-end',
    },
    containerButtonLeft:{
        flex:3,
    },
    containerButtonRight:{
        flex:1,
        backgroundColor:'#00b9d6',
    },
    containerButton:{
        flex:2,
        flexDirection:'row'
    },
    themeButton:{
        marginTop:50,
        marginLeft:20,
        borderRadius:90,
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start',
    },
    historyText:{
        fontSize:20,
        marginRight:10,
    },
    resultText:{
        color:"#00b9d6",
        fontSize:35,
        margin:15,
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:30,
        fontWeight:'bold',
    },
    containerRow:{
        flex:1,
        flexDirection:'row',
    },
});
import { Button, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";


export const GlobalStyles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: Colors.background
    },
    CalculatorContainer:{
        flex: 1,
        paddingBottom: 0,
        justifyContent: 'flex-end'
    },
    mainResult:{
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
        fontFamily: 'SpaceMono'
    },
    subResult: {
        color: Colors.textSecundary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
        paddingBottom: 10,

        fontFamily: 'SpaceMono'
    },
    row:{
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,

    },
    button:{
        height:80,
        width:80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10

    },
    buttonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: '300',
        fontFamily: 'SpaceMono'
    },
    doubleButton:{
        height:80,
        width:80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10

    }
})
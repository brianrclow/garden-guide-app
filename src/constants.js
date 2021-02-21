import { StyleSheet } from 'react-native';

const COLORS = {
    primaryGreen: "#009f05",
    halfGreen: "#4F9F52",
    darkGreen: "#005003",
    fruit: "red",
    vegetable: "#005003",
    herb: "#4F9F52",
    berry: "blue",
    brown: "#795548",
    offWhite: "#E2D6D2",
    lightGreen: "#8BC34A",
    logoDarkGreen: "#689F38",
    grey: "rgb(142,142,142)"
}

const STYLES = StyleSheet.create({
    primaryButton: { 
        backgroundColor: "#009f05"
    },
    container: {
        flex: 1,
        alignItems: "center",
        // paddingLeft: "5%",
        // paddingRight: "5%",
        // paddingTop: "5%"
    },
    header: {
        // flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        
    },
    headerTitle: {
        backgroundColor: "#fff",
        justifyContent: "center",
        color: COLORS.primaryGreen,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: "bold"
    },
    plantTitle: {
        color: COLORS.darkGreen,
        fontSize: 20,
        fontWeight: "bold"
    },
    plantHeader: {
        color: COLORS.darkGreen,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#fff",
        width: "100%",
        alignContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: COLORS.primaryGreen,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    floatWindow: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
    noPlantsText: {
        color: COLORS.darkGreen,
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },
    confirmText: {
        color: COLORS.darkGreen,
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },
    confirmYesButton: {
        backgroundColor: COLORS.berry,
        width: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
    },

    confirmNoButton: {
        backgroundColor: COLORS.primaryGreen,
        width: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
    },
});


export { COLORS, STYLES };
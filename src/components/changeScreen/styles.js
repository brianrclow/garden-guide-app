import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import { COLORS, STYLES } from '../../constants';


export default StyleSheet.create({
    box: {
        width: "95%",
        borderRadius: 5,
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        color: COLORS.darkGreen,
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: "row"
    }
})
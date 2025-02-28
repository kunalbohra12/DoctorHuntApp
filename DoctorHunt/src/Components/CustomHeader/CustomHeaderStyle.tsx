import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 20,
        alignItems:'center',
        marginBottom:40,
        marginTop:30,
    },
    headerSubContainer: {
        flexDirection: 'row',
        alignItems:'center',
        gap:20,
    },
    headerIcon: {
        height: 30,
        width: 30,
    },
    headerTitle: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21,
    },
    rightIcon:{
        height:18,
        width:18,
    },
});
export default styles;

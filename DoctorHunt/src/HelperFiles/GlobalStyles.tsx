import { StyleSheet } from 'react-native';
import colors from './Colors';
const GlobalStyles = StyleSheet.create({
    gradientBG: {
        flex: 1,
    },
    columnContainer: {
        flexDirection: 'column',
        flex:1,
    },
    rowContainer:{
        flexDirection:'row',
        flex:1,
    },
    containerPadding:{
        marginHorizontal:48,
    },
    alignContainer:{
        alignItems:'center',
    },
    btnStyle:{
        alignItems:'center',
        color:colors.DEFAULT_WHITE,
        justifyContent:'center',
        borderRadius:10,
    },
    btnTxtStyle:{
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 21,
        color:colors.DEFAULT_WHITE,
    },
    headerTitle:{
        fontSize:22,
        fontWeight:'500',
        marginTop:30,
        marginBottom:30,
    },
    searchBar: {
        flexDirection: 'row',
        height: 54,
        backgroundColor: colors.DEFAULT_WHITE,
        marginTop: -25,
        borderRadius: 6,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    containerSpacing:{
        paddingHorizontal:20,
    },
});
export default GlobalStyles;

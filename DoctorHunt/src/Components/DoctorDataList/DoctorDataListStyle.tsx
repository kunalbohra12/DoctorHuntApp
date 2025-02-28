import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        marginTop:22,
        paddingHorizontal:20,
    },
    itemContainer:{
        flexDirection:'column',
        height:170,
        backgroundColor:colors.DEFAULT_WHITE,
        borderRadius:12,
        marginTop:12,
        paddingHorizontal:22,
        paddingVertical:14,
        marginBottom:10,
    },
    itemTopContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    itemSubContainer:{
         flexDirection:'row',
        alignItems:'center',
        gap:12,
    },
    itemContentContainer:{
        flexDirection:'column',
        marginLeft:14,
        gap:8,
    },
    itemImage:{
        height:180,
        width:190,
        borderRadius:8,
    },
    imageContainer:{
        height:87,
        width:92,
    },
    itemTitle:{
        fontSize: 18,
        fontWeight: '500',
        color: colors.LIGHT_BLACK,
        lineHeight:21,
    },
    itemSubTitle:{
        fontSize: 13,
        fontWeight: '400',
        color: colors.LIGHT_GREEN,
        lineHeight:16,
    },
    icon:{
        height:16,
        width:19,
    },
    roundedView:{
        borderRadius:8,
        backgroundColor:colors.LIGHT_GREEN,
        height:10,
        width:10,
        alignItems:'center',
        justifyContent:'center',
    },
    lightText:{
        fontSize:12,
        fontWeight:'300',
        color:colors.LIGHT_VIOLET,
    },
    itemBottomSubContainer:{
        flexDirection:'column',
    },
    itemBottomContainer:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between',
    },
    highlightTxt:{
        fontSize:13,
        fontWeight:'500',
        color:colors.LIGHT_GREEN,
        lineHeight:21,
    },
    regularTxt:{
        fontSize:12,
        fontWeight:'300',
        color:colors.LIGHT_VIOLET,
    },
});
export default styles;

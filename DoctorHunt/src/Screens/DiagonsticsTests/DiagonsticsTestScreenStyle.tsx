import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: colors.DEFAULT_BLACK,
        fontFamily: Fonts.RUBIC_BLACK,
        lineHeight: 36,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '300',
        color: colors.LIGHT_GREEN,
        fontFamily: Fonts.RUBIC_BLACK,
        lineHeight: 23,
        marginTop: 7,
    },
    gridItemContainer: {
        flexDirection: 'row',
        height: 90,
        width: 80,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
      },
      listContainer: {
        flexDirection: 'row',
        marginTop: 30,
      },
    icon:{
        height:37,
        width:33,
      },
});
export default styles;

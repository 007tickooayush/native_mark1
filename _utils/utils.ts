import { Dimensions, Linking, StyleSheet, useColorScheme } from "react-native";

/**
 * ============================== Local constants ==============================
 */
const cardImgRadius = 24;
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
/**
 * ============================== Local constants ==============================
 */


/**
 * ============================== Exported constants ==============================
 */
export const colorsList: string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
];

/**
 * utility function to opne Link
 * 
 * example: https://www.google.com
 * Also Please note that the link should be a starting with a Protocol/Intent handler present like https:// or mailto: or tel: etc.
 */
export const openwebSite = async (link: string) => {
    await Linking.openURL(link)
        .catch(err => console.error("Couldn't load page >>", err));
};

type TextColorType = {
    color: string
};

export const decideTextColor = (isDarkMode: boolean): TextColorType => isDarkMode ? styles.whiteText : styles.darkText;


/**
 * get the color scheme of the device and the text color object for "styles" prop
 */
export const getStylesColorTxt = (inverted: boolean = false): TextColorType => {
    const isDarkMode = useColorScheme() === 'dark';
    return decideTextColor(!inverted ? isDarkMode : !isDarkMode);
}

/**
 * Style Structure of the components
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        flexWrap: 'wrap',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8,
    },
    cardImgContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        borderRadius: cardImgRadius,
        margin: 12,
        height: windowHeight * 0.40,
        backgroundColor: '#FFF8E8',
        
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: cardImgRadius,
        // elevation: 8,
    },
    cardImg: {
        height: windowHeight * 0.20,
        width: '100%',
    },
    cardImgTop: {
        borderTopLeftRadius: cardImgRadius,
        borderTopRightRadius: cardImgRadius,
    },
    cardImgHeader: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardImgHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'right',
    },
    cardImgBody: {
        padding:2,
    },
    cardImgBodyText: {
        fontSize: 12,
        padding: 10,
        fontWeight: 'medium',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
    },
    cardImgFooterText: {
        fontSize: 10,
        padding: 10,
        fontWeight: 'light',
        textAlign: 'left',
    },
    cardImgFooter: {
        borderBottomLeftRadius: cardImgRadius,
        borderBottomRightRadius: cardImgRadius,
    },
    elevatedCard: {
        // "card" properties + shadow properties
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
    },
    navbar:{
        margin: 4,
        paddingTop: 6,
        paddingBottom: 6,
        display: 'flex',
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Text colors
    cardImgText: {
        color: "#111344"
    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    },
});
/**
 * ============================== Exported constants ==============================
 */
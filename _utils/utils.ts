import { StyleSheet } from "react-native";

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

type TextColorType = {
    color: string
};

export const decideTextColor = (isDarkMode: boolean): TextColorType => isDarkMode ? styles.whiteText : styles.darkText;

/**
 * Style Structure of the components
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        flexWrap: 'wrap',
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    whiteText: {
		color: '#FFFFFF',
	},
	darkText: {
		color: '#000000',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
	}
})
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
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    },
});
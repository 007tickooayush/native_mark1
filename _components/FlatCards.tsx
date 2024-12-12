import { ScrollView, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { colorsList, decideTextColor, styles } from '../_utils/utils';


const FlatCards = (): React.JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const textColor = decideTextColor(isDarkMode);

    return (
        <View>
            <Text style={[styles.headingText, textColor]}>FlatCards</Text>
            <View style={styles.container}>  
                {
                    colorsList.map((color, idx) =>
                        <View style={[styles.card, { backgroundColor: color }]} key={idx}>
                            <Text style={[styles.text, textColor]}>{color}</Text>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

export default FlatCards;
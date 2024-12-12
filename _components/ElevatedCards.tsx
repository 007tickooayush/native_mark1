import { View, Text, useColorScheme, ScrollView } from 'react-native'
import React from 'react'
import { colorsList, decideTextColor, styles } from '../_utils/utils';

const ElevatedCards = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const textColor = decideTextColor(isDarkMode);

    return (
        <View>
            <Text style={[styles.headingText, textColor]}>ElevatedCards</Text>
            <View style={[styles.container]}>
                <ScrollView horizontal={true}>
                    {
                        colorsList.map((color, idx) =>
                            <View style={[styles.card, styles.elevatedCard, { backgroundColor: color }]} key={idx}>
                                <Text style={[styles.text, textColor]}>{color}</Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default ElevatedCards;
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
                {/* horizontal={true}> */}
                {
                    colorsList.map((color, idx) =>
                        <View style={[styles.card, { backgroundColor: color }]} key={idx}>
                            <Text style={[styles.text, textColor]}>{color}</Text>
                        </View>
                    )
                }
                {/* <View style={[styles.card, { backgroundColor: 'red' }]}>
                    <Text style={textColor}>1</Text>
                </View>
                <View style={[styles.card, { backgroundColor: 'blue' }]}>
                    <Text style={textColor}>2</Text>
                </View>
                <View style={[styles.card, { backgroundColor: 'green' }]}>
                    <Text style={textColor}>3</Text>
                </View>
                <View style={[styles.card, { backgroundColor: 'yellow' }]}>
                    <Text style={textColor}>4</Text>
                </View>
                <View style={[styles.card, { backgroundColor: 'purple' }]}>
                    <Text style={textColor}>5</Text>
                </View>
                <View style={[styles.card, { backgroundColor: 'orange' }]}>
                    <Text style={textColor}>6</Text>
                </View>
                <View style={[styles.card, { backgroundColor: 'pink' }]}>
                    <Text style={textColor}>7</Text>
                </View>
                <View style={[styles.card, { backgroundColor: 'brown' }]}>
                    <Text style={textColor}>8</Text>
                </View> */}
            </View>
        </View>
    )
}

export default FlatCards;
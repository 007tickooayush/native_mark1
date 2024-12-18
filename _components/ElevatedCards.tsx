import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colorsList, getStylesColorTxt, styles } from '../_utils/utils';
import ToggleVisibility from '../_utils/ToggleVisibility';

const ElevatedCards = () => {
    const textColor = getStylesColorTxt();

    return (
        <ToggleVisibility
            triggerComponent={
                <Text style={[styles.headingText, textColor]}>ElevatedCards</Text>
            }
            children={
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
            }
        />
    );
}

export default ElevatedCards;
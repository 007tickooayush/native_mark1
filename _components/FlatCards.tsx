import { Text, View } from 'react-native'
import React from 'react'
import { colorsList, styles, getStylesColorTxt } from '../_utils/utils';
import ToggleVisibility from '../_utils/ToggleVisibility';


const FlatCards = (): React.JSX.Element => {
    const textColor = getStylesColorTxt();

    return (
        <ToggleVisibility
            triggerComponent={
                <Text style={[styles.headingText, textColor]}>FlatCards</Text>
            }
            children={
                <View style={styles.container}>
                    {
                        colorsList.map((color, idx) =>
                            <View style={[styles.card, { backgroundColor: color }]} key={idx}>
                                <Text style={[styles.text, textColor]}>{color}</Text>
                            </View>
                        )
                    }
                </View>
            }
        />
    );
}

export default FlatCards;
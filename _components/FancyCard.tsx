import { View, Text, useColorScheme, Image } from 'react-native'
import React from 'react'
import { styles } from '../_utils/utils';

const FancyCard = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const textColor = isDarkMode ? styles.whiteText : styles.darkText;
    return (
        <View>
            <Text style={[styles.headingText, textColor]}>FancyCard</Text>
            <View style={[styles.cardImgContainer]}>
                <Image
                    source={{
                        uri: 'https://picsum.photos/id/17/2500/1667',
                    }}
                    style={[styles.cardImg, styles.cardImgTop]}
                />
                <View style={styles.cardImgHeader}>
                    <Text style={[styles.cardImgHeaderText, styles.cardImgText]}>Card Heading</Text>
                </View>
                <View style={styles.cardImgBody}>
                    <Text style={[styles.cardImgBodyText, styles.cardImgText]}>
                        This will be the body of the card description text which is not expected to be long but even if it is long then that should not be an issue and should be displaed gracefully with padding and proper text alignment which will only be implemented for the text with in the container of the card that is only enforced on the body of the card.
                    </Text>
                </View>
                <View style={styles.cardImgFooter}>
                    <Text style={[styles.cardImgFooterText, styles.cardImgText]}>Card Footer</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard;
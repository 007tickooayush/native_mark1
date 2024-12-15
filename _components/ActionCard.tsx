import { View, Text, useColorScheme, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { openwebSite, styles } from '../_utils/utils';

const ActionCard = () => {
    

    const isDarkMode = useColorScheme() === 'dark';
    const textColor = isDarkMode ? styles.whiteText : styles.darkText;

    return (
        <View>
            <Text style={[styles.headingText, textColor]}>ActionCard</Text>
            <View style={[styles.elevatedCard, styles.cardImgContainer]}>
                
                <TouchableOpacity onPress={() => openwebSite("http://ayush-tickoo.in")}>
                    <Image
                        source={{
                            uri: 'https://picsum.photos/id/16/2500/1667'
                        }}
                        style={[styles.cardImg, styles.cardImgTop]}
                    />

                </TouchableOpacity>
                
                <View style={styles.cardImgHeader}>
                    <Text style={[styles.cardImgHeaderText, styles.cardImgText]}>Action Card Heading</Text>
                </View>
                <View style={styles.cardImgBody}>
                    <Text style={[styles.cardImgBodyText, styles.cardImgText]} numberOfLines={2}>
                        The image in the card is clickable and will open the link to a portfolio website.
                        This will be the body of the card description text which is not expected to be long but even if it is long then that should not be an issue and should be displaed gracefully with padding and proper text alignment which will only be implemented for the text with in the container of the card that is only enforced on the body of the card.
                        This is the second line of the actionable card.
                        This is the third line of the actionable card.
                    </Text>
                </View>
                <View style={styles.cardImgFooter}>
                    <Text style={[styles.cardImgFooterText, styles.cardImgText]}>Click on the Image to open the Link</Text>
                    
                </View>
                
            </View>
        </View>
    )
}

export default ActionCard;
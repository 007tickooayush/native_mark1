import { View, Text } from 'react-native'
import React from 'react'
import { getStylesColorTxt, styles } from '../_utils/utils';

const Navbar = () => {

    return (
        <View style={[styles.navbar]}>
            <Text style={[styles.headingText, getStylesColorTxt()]}>Choose the component to render</Text>
            <Text style={[getStylesColorTxt()]}>Press any Heading(Trigger Component) to Toggle the Visibility</Text>
        </View>
    )
}

export default Navbar;
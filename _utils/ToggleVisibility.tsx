import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

type ToggleVisibilityProps = {
    triggerComponent: React.ReactNode,
    children: React.ReactNode,
};

const ToggleVisibility = ({ triggerComponent, children }: ToggleVisibilityProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                {triggerComponent}
            </TouchableOpacity>
            {
                isVisible &&
                <View>
                    {children}
                </View>
            }
        </View>
    )
}

export default ToggleVisibility;
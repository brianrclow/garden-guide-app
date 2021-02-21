import React from 'react'
import { View, Text } from 'react-native'
import { STYLES } from '../../constants'

export default function Header({title}) {

    return (
        <View style={STYLES.header}>
            <Text style={STYLES.headerTitle}>{title}</Text>
        </View>
    )
}
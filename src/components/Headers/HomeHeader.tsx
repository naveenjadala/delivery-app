import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { primaryColor } from '../../assets/color'

type Props = {}

const HomeHeader = (props: Props) => {
    return (
        <View style={{ height: 60, backgroundColor: primaryColor, justifyContent: 'center', alignItems: 'center' }}>
            <Text>HomeHeader</Text>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})
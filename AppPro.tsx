import React from 'react'
import {
	SafeAreaView,
	Text,
	StyleSheet,
	useColorScheme,
	View,
	Appearance
} from 'react-native'

const AppPro = (): React.JSX.Element => {
	const isDarkMode = useColorScheme() === 'dark';
	
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={[styles.text, isDarkMode ? styles.whiteText : styles.darkText]}>AppPro Component</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	whiteText: {
		color: '#FFFFFF',
	},
	darkText: {
		color: '#000000',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
	}
})

export default AppPro
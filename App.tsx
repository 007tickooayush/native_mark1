/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let length = 100;

const App = (): React.JSX.Element => {
  
  return (
    <SafeAreaView>
      <ScrollView>
        {
          Array.from({length: length}, (_, i) => (
            <Text key={i}>Hello World</Text>
          ))          
        }        
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;

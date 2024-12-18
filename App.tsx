/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import FlatCards from './_components/FlatCards';
import { decideTextColor, styles } from './_utils/utils';
import ElevatedCards from './_components/ElevatedCards';
import FancyCard from './_components/FancyCard';
import ActionCard from './_components/ActionCard';
import Navbar from './_components/Navbar';

let length = 100;

const App = (): React.JSX.Element => {

  return (
    <SafeAreaView >
      <Navbar />
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
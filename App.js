import React from 'react';
import {SafeAreaView, useColorScheme, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResult';

import Feeds from './assets/data/feed';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const posts = Feeds[0];

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <HomeScreen /> */}
      {/* <Post posts={posts} /> */}
      <SearchResultsScreen />
    </SafeAreaView>
  );
};

export default App;

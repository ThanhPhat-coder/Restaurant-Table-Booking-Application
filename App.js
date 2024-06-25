import React, { Component } from 'react';
import Main from './components/MainComponent';
import {LogBox} from 'react-native';
// redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
// redux-persist
import { PersistGate } from 'redux-persist/es/integration/react';
const { persistor, store } = ConfigureStore();
// firebase
import { initializeApp } from 'firebase/app';
const firebaseConfig = { databaseURL: 'https://phatvt-default-rtdb.asia-southeast1.firebasedatabase.app/' };
initializeApp(firebaseConfig);


class App extends Component {
  constructor(props){
    super(props);
    LogBox.ignoreLogs([
      'TextElement: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
      'Warning: Unknown: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.',
      
    ])
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
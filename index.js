import { registerRootComponent } from 'expo';

import App from './App';
import Screen5 from './src/screens/screen5'
import Screen6 from './src/screens/screen6'
import Screen7 from './src/screens/screen7'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Screen7);

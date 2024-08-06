// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {ComponentsApp} from './src/ComponentsApp';

AppRegistry.registerComponent(appName, () => ComponentsApp);

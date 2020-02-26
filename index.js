import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Login from './Component/Login'
import ForgottenPassword from './Component/ForgottenPassword'
import Register from './Component/Register'

AppRegistry.registerComponent(appName, () => Register );

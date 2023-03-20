import { StatusBar } from 'expo-status-bar';
import { BasketContext} from './Context';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <BasketContext>
      <StatusBar style="auto" />
      <StackNavigator/>
     </BasketContext>
  );
}

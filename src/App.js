import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Appstore from './utils/Appstore';

function App() {
  return (
    <div className="text-3xl font-bold underline">
      < Provider store={Appstore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;

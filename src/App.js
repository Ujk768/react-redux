import { Provider } from "react-redux"
import store from './redux/store/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamsContainer from './components/IceCreamsContainer';
import ChocolateContainer from './components/ChocolateContainer';
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamsContainer />
        <ChocolateContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;

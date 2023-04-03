import "./App.css";
import { Provider } from "react-redux";
import RootStack from "pages";
import { store } from "store";

function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
export default App;

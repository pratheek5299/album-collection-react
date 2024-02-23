import Navbar from "./components/Navbar/Navbar";
import Display from "./components/Display/Display";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
        <Display/>
      </Provider>
    </div> 
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/App.styles.scss';
import { PREFIX } from "./constants/servicePrefix";
import { navigation } from "./data";

function App() {
  const router = createBrowserRouter(navigation);

  return (
    <div className={PREFIX + 'app'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

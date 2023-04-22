import './styles/App.styles.scss';
import { Page } from "./components";
import { PREFIX } from "./constants/servicePrefix";
import { RegistrationAddress } from './pages';

function App() {
  return (
    <div className={PREFIX + 'app'}>
      <Page>
        <RegistrationAddress />
      </Page>
    </div>
  );
}

export default App;

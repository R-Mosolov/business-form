import './styles/App.styles.scss';
import { Page } from "./components";
import { PREFIX } from "./constants/servicePrefix";
import { SocialNetworks } from './pages';

function App() {
  return (
    <div className={PREFIX + 'app'}>
      <Page>
        <SocialNetworks />
      </Page>
    </div>
  );
}

export default App;

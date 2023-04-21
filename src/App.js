import './styles/App.styles.scss';
import { Page } from "./components";
import { PREFIX } from "./constants/servicePrefix";
import { GeneralIGeneralQuestionsnfo } from './pages';

function App() {
  return (
    <div className={PREFIX + 'app'}>
      <Page>
        <GeneralIGeneralQuestionsnfo />
      </Page>
    </div>
  );
}

export default App;

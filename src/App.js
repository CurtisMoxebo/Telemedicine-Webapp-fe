import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      {t('First translation')}
    </div>
  );
}

export default App;

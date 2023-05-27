import ReactDOM from 'react-dom/client';
import { App } from './app';
import './assets/styles/global.scss';

async function runner() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <App/>
  );
}

runner();

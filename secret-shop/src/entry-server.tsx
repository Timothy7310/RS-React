import ReactDOMServer from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { movieAPI } from './services/MovieService';
import serialize from 'serialize-javascript';

const store = setupStore();

export async function render(path: string) {
  await Promise.all(store.dispatch(movieAPI.util.getRunningQueriesThunk()));

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
  return {
    html: `${html} <script>window.__PRELOADED_STATE__=${serialize(store.getState())}</script>`,
  };
}

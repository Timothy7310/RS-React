import ReactDOMServer from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

const store = setupStore();
type IRenderProps = {
  path: string;
};

export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
  return { html };
}

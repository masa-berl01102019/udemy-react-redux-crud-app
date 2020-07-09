import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
// middlewareを適用する為の関数をreduxからimportしておく
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// 上記はaction-creatorでobjectの代わりに関数を返せるように出来るパッケージ
// redux-thunkはmiddleware
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// ankerタグの導入
import {composeWithDevTools} from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';



import registerServiceWorker from './registerServiceWorker';

const enhancer = process.env.NODE_ENV === 'development'? composeWithDevTools(applyMiddleware(thunk)): applyMiddleware(thunk); 
// 上記は開発環境がローカルかそうでないかで条件分岐してローカル開発環境の場合はcomposeWithDevTools()でapplyMiddleware(thunk)をwrapして拡張すればいい
const store = createStore(reducer, enhancer);
// storeを作成時に第二引数でapplyMiddleware(thunk)でthunkを適用出来るようにする

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store} >
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          {/* exactは完全一致に使うので上記の場合はなくていい */}
          {/* idにはさまざま数字が入るので「:id」とする */}
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>, 
  document.getElementById('root')
);
registerServiceWorker();


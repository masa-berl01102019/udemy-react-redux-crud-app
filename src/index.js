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

import './index.css';

import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,applyMiddleware(thunk));
// storeを作成時に第二引数でapplyMiddleware(thunk)でthunkを適用出来るようにする

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();


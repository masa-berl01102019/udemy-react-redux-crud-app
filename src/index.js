import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
// storeを作成するcreateStore関数をreactパッケージからimport
import {Provider} from 'react-redux';
// 全てのコンポーネントにstoreを渡せるようにするProvaider関数をreactパッケージからimport
import './index.css';
import reducer from './reducers';
// 作成したreducerをimport

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
// ここで作成されるstoreはapp内の全てのstateが集約された唯一のもの

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
// reducerをもとにstoreを作成
// ここで作成されたstoreが全てのアプリケーション内でアクセス出来るように設定
// Providerコンポーネントで囲ってstore属性にstoreを設定すれば全ての階層のcomponetで利用出来る
// 従来のやり方で使用する場合の親要素->子要素->孫要素へとバケツリレ-形式で値を渡さなくても値にアクセス出来る

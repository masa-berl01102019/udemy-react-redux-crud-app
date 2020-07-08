import _ from 'lodash'
// 配列のデータを編集するのが得意なパッケージをimport
import { READ_EVENTS, DELETE_EVENT, GET_EVENT, UPDATE_EVENT, CREATE_EVENT } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data)
      // actionのhttpリクエストで取得したデータがdispatchされて配列として下記のように渡ってきている
      // [
      //   {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
      //   {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."},
      //   {id: 3, title: "Let's have an event 3!", body: "This is the body for event 3."},
      // ] 
      return _.mapKeys(action.response.data, 'id');
      // 上記のコマンドでdataのidの値をkeyとする下記のような連想配列を作成してreturn
      // {
      //   1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
      //   2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."},
      // }
    case DELETE_EVENT:
      delete events[action.id];
      // eventsオブジェクトには外部APIから取得されたデータが連想配列に整形された状態で渡ってくるので、上記のようにdeleteメソッドでeventsのkeyを指定して削除出来る
      return { ...events};
      // スプレッド演算子でeventをreturnすることで更新後の状態でeventsを返せる
    case GET_EVENT:
    case UPDATE_EVENT:
    case CREATE_EVENT:
      // console.log(action.response.data)
      // {id: 6, title: "Let's have an event 6!", body: "This is the body for event 6."}
      const data = action.response.data
      return {...events, [data.id]: data};
      // 上記で最新のデータを上書き出来る←意味が分からん
    default:
     return events;
  }
}


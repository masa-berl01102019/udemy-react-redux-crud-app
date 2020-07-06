import _ from 'lodash'
// 配列のデータを編集するのが得意なパッケージをimport
import { READ_EVENTS } from '../actions'

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
    default:
     return events;
  }
}


import axios from 'axios'
// HTTPリクエストを送信するhttpクライアントをimport


export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERY_STRING = '?token=token123'

export const readEvents = () => async dispatch => {
  // axiosの戻り値はpromise型なのでasyncを使う
  // asyncは関数につけるとPromiseオブジェクトを返す.
  const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`)
  // get(URL?パラメータ)でgetを非同期で送信
  // 返り値のresponseにはAPIサーバーから取得したデータが格納されている
  // awaitはasyncがついている関数の中で使えて .then() を代用できる.
  dispatch({type: READ_EVENTS, response})
}

// 外部のAPIサーバーにHTTPリクエストをする
// readイベントの中で非同期処理を実装したいが基本的にaction creatorはピュアなobjectを返えさなければいけないのでthunkで関数を返せるようにする
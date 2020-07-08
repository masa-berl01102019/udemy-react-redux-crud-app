import axios from 'axios'
// HTTPリクエストを送信するhttpクライアントをimport

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const GET_EVENT = 'GET_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

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

export const postEvent = values => async dispatch => {
  // 引数で新規入力内容を受けて
  const response = await axios.post(`${ROOT_URL}/events${QUERY_STRING}`, values)
  // post(URL, 入力内容)でhttpクライアントから外部APIにリクエスト送信
  dispatch({type: CREATE_EVENT, response})
}

export const putEvent = values => async dispatch => {
  // 引数で入力内容を受けて
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERY_STRING}`, values)
  // post(URL, 入力内容)でhttpクライアントから外部APIにリクエスト送信
  dispatch({type: UPDATE_EVENT, response})
}

export const deleteEvent = id => async dispatch => {
  // 引数でidを受けて
  await axios.delete(`${ROOT_URL}/events/${id}${QUERY_STRING}`)
  // delete(URL/id)でhttpクライアントから外部APIにリクエスト送信
  dispatch({type: DELETE_EVENT, id})
  // reducerに削除されたeventのidを渡す
}

export const getEvent = id => async dispatch => {
  // 引数でidを受けて
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERY_STRING}`)
  // get(URL/id)でhttpクライアントから外部APIにリクエスト送信
  dispatch({type: GET_EVENT, response})
}
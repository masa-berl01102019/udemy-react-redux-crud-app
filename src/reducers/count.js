import {INCREMENT, DECREMENT} from '../actions'
// 上記のようにactionsからaction をimport

// stateの初期値を定義
const initialState = { value: 0 }

export default (state = initialState, action) => {
  // 引数にstateとactionをとり、stateはdefaultでの初期値を設定
  switch (action.type) {
    // action.typeで値を拾えるのでswitch文で条件分岐
    case INCREMENT:
     return {value: state.value + 1}
     // 上記のように引き渡したstate(default値)に値をプラス位置してobjectでrerurnする
    case DECREMENT:
      return {value: state.value - 1}
    default:
     return state;
     // 状態の変化がない場合はreturnでstateを返せばいい
  }
}
// exportでオブジェクトを返す


// reducers : actionのtypeに応じてstateをどう変化させるのか扱う
import {combineReducers} from 'redux'
// 全てのreducerを一つに結合させるための機能の実装する為のcombineReducers関数をimport
import count from './count'
// 結合させたいファイルをimport

export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz })
// 上記のように複数のreducerを指定出来る
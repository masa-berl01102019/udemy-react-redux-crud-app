// reducers : actionのtypeに応じてstateをどう変化させるのか扱う
import { combineReducers } from 'redux'
// 全てのreducerを一つに結合させるための機能の実装する為のcombineReducers関数をimport
import { reducer as form } from 'redux-form'
// reduxForm()関数等を使うにはredux-formの提供するreducerを使用しないといけないのと名前が一般名称すぎるのでas 新しい名前でimportしてcombineReducers()の引数に渡しておく
import events from './events'

export default combineReducers({ events, form })

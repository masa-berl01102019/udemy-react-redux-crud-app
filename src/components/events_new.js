/* CRUD app */
  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { Field, reduxForm } from 'redux-form'
  // reduxを使ったform部品の実装に必要なものをimport
  import { postEvent } from '../actions';
  // 入力内容をpostする為にactionからpostEventの関数式をimportしておく
  import { Link } from 'react-router-dom';

  class EventsNew extends Component {

    constructor (props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
      /* 意味不明だから決まり文句として覚える */
    }

    renderField (field) {
      // console.log(field)
      // {
      //   input: {name: "title", onBlur: ƒ, onChange: ƒ, onDragStart: ƒ, onDrop: ƒ,},
      //   label: "Title",
      //   meta: {active: false, asyncValidating: false, autofilled: false, dirty: false, dispatch: ƒ},
      //   type: "text",
      // }
      // 上記のようにFieldタグで定義した属性の値等はobject型の複数のデータが渡って来るので、
      // 引数で受けて下記のように必要項目を変数に分割代入する
      const {input, label, type, meta: { touched, error } } = field

      return (
        <div>
          <input {...input} placeholder={label} type={type} />
          {/* 上記のように{...input}で属性値として代入することも可能 */}
          {touched && error && <span>{error}</span>}
          {/*  */}
        </div>
      )
      // 上記のようにinputタグにの属性値に変数を代入してreturnでJSXを返せばいい
    }

    async onSubmit (values) {
      await this.props.postEvent(values)
      // 入力内容を引数で受けてactionで定義したpostEvent関数式に渡す
      this.props.history.push('/')
      // 送信後にはTOP pageの履歴をpushしておく
    }

    render () {
      const { handleSubmit, pristine, submitting} = this.props
      // 上記の仕様が意味が分からないので決まり文句として覚える

      return (
        <React.Fragment>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            {/* 上記の仕様が意味不明だから決まり文句として覚える */}
              <Field label='Title' name='title' type='text'component={this.renderField} />
              {/* 上記のFieldタグでcomponentで指定した関数に属性の値を渡す */}
              <Field label='Body' name='body' type='text'component={this.renderField} />
            <div>
              <input type='submit' value='submit' disabled={pristine || submitting} />
              {/* 上記のpristineは何も入力されていない状態ではtrueを返す */}
              {/* 上記のsubmittingは送信ボタンが押されるとtrueを返す */}
              {/* これで何も入力されていない状態や送信ボタンが連打される状況での送信を不可に出来る */}
            </div>
          </form>
          <Link to="/" >CANCEL</Link>
        </React.Fragment>
      )
    }
  }

  const validate = values => {
    // valuesには入力内容が値として渡ってくる
    const errors = {}
    // errorの初期化
    if(!values.title) {
      errors.title = 'Please enter a tittle'
    }
    if(!values.body) {
      errors.body = 'Please enter a body'
    }
    return errors
    // object形式でreturnする
  }

  const mapDispatchToProps = ({ postEvent })
  // 上記でactionを関連つける

  // export default connect(null,mapDispatchToProps)(EventsNew)
  // redux-formを実装するにはconnectで渡すEventsNewのclass componentを下記のように
  // reduxForm({ 設定に関する引数 })で返ってくる関数の引数にEventsNewコンポーネントを渡す必要がある
  // 上記の設定に関する引数にはvaridationのルールを定めた関数式やformの名前（何でもいい）をobject形式で渡してあげる
  export default connect(null,mapDispatchToProps)(reduxForm({validate, form: 'eventNewPost'})(EventsNew))
  // mapStateToPropsで特別状態を変化させないのでnullとしておく




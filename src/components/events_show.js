/* CRUD app */
  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { Field, reduxForm } from 'redux-form'
  import { Link } from 'react-router-dom';
  import { getEvent, deleteEvent, putEvent } from '../actions';
  
  import RaisedButton from 'material-ui/RaisedButton';
  import TextField from 'material-ui/TextField';

  class EventsShow extends Component {

    constructor (props) {
      super(props)
      // bind処理しないと非同期の処理が使えない
      this.onSubmit = this.onSubmit.bind(this)
      this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount () {
      const id = this.props.match.params.id
      if (id) {
        this.props.getEvent(id)
      }
    }

    renderField (field) {
     const {input, label, type, meta: { touched, error } } = field

      return (
        // <div>
        //   <input {...input} placeholder={label} type={type} />
        //   {touched && error && <span>{error}</span>}
        // </div>

        <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
      )
    }

    async onSubmit (values) {
      await this.props.putEvent(values)
      this.props.history.push('/')
    }

    async onDeleteClick () {
      const id = this.props.match.params.id;
      // 上記のようにpropsから選択したeventのidをひろえる
      await this.props.deleteEvent(id)
      this.props.history.push('/')
    }

    render () {
      const { handleSubmit, pristine, submitting, invalid} = this.props
      // 分割代入することで必要な項目だけ代入出来る
      const style = { margin: 12 }

      return (
        // <React.Fragment>
        //   <form onSubmit={handleSubmit(this.onSubmit)}>
        //       <Field label='Title' name='title' type='text'component={this.renderField} />
        //       <Field label='Body' name='body' type='text'component={this.renderField} />
        //     <div>
        //       <input type='submit' value='submit' disabled={pristine || submitting || invalid} />
        //       {/* validationのerror時に送信ボタン押せないようにinvalidオプションつける */}
        //     </div>
        //   </form>
        //   <Link to="/" >CANCEL</Link><br/>
        //   <Link to="/" onClick={this.onDeleteClick} >DELETE</Link>
        // </React.Fragment>

        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field label='Title' name='title' type='text'component={this.renderField} />
          <Field label='Body' name='body' type='text'component={this.renderField} />
          <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
          <RaisedButton label="Cancel" style={style} containerElement={ <Link to="/"/> } />
          <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
        </form>
      )
    }
  }

  const validate = values => {
    const errors = {}
    if(!values.title) {
      errors.title = 'Please enter a tittle'
    }
    if(!values.body) {
      errors.body = 'Please enter a body'
    }
    return errors
  }

  const mapStateToProps = (state, ownProps) => {
    const event = state.events[ownProps.match.params.id]
    // mapStateToProps(state, ownProps)は，store.getState()の結果を第一引数に，このContainer componentへ渡されたpropsを第二引数にして呼び出される関数なので、
    // 上記のようにstate.events(外部APIから渡ってきたデータの配列)に第二引数で取得したpropsから実際に選んだidをkeyとして与える事でデータを取得出来る
    return {initialValues: event, event}
    // 上記のように初期値として取得したidのデータとコンポーネントに渡ってきているpropsをreturnすればいい
  }
  const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

  export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow))
  // enableReinitializeのオプションをtrueにするとinitialValuesの値が変わるたびにformが初期化される




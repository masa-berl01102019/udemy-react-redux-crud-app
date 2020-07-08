/* CRUD app */
  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { readEvents } from '../actions';
  import _ from 'lodash';
  import {Link} from 'react-router-dom';

  class EventsIndex extends Component {
    componentDidMount() {
      this.props.readEvents()
    }
    // 上記はコンポーネントがマウントされた時に呼ばれるメソッド
    // 初期マウント時に外部のAPIサーバーから情報を取得してデータをテーブル一覧で表示させる際に使う

    renderEvent() { 
        return _.map(this.props.events, event => ( 
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>
              <Link to={`/events/${event.id}`} >{event.title}</Link>
            </td>
            <td>{event.body}</td> 
          </tr>
        ))
    }

    render () {
      return (
        <React.Fragment>
          <table>
            <thead>
              <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>CONTENT</th>
              </tr>
            </thead>
            <tbody>
              {this.renderEvent()}
            </tbody>
          </table>
          <Link to="/events/new">New Event</Link>
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = state => ({events: state.events})
  const mapDispatchToProps = ({ readEvents })

  export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)





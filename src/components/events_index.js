/* CRUD app */
  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { readEvents } from '../actions';
  import _ from 'lodash';
  import {Link} from 'react-router-dom';
  
  import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
   } from 'material-ui/Table';
  import  FloatingActionButton from 'material-ui/FloatingActionButton';
  import  ContentAdd  from 'material-ui/svg-icons/content/add';

  class EventsIndex extends Component {
    componentDidMount() {
      this.props.readEvents()
    }
    // 上記はコンポーネントがマウントされた時に呼ばれるメソッド
    // 初期マウント時に外部のAPIサーバーから情報を取得してデータをテーブル一覧で表示させる際に使う

    renderEvent() { 
        return _.map(this.props.events, event => ( 
          // <tr key={event.id}>
          //   <td>{event.id}</td>
          //   <td>
          //     <Link to={`/events/${event.id}`} >{event.title}</Link>
          //   </td>
          //   <td>{event.body}</td> 
          // </tr>
          <TableRow key={event.id}>
            <TableRowColumn>{event.id}</TableRowColumn>
            <TableRowColumn><Link to={`/events/${event.id}`} >{event.title}</Link></TableRowColumn>
            <TableRowColumn>{event.body}</TableRowColumn> 
          </TableRow>
        ))
    }

    render () {
      const style = {
        position: "fixed",
        right: 12,
        bottom: 12
      }
      return (
        <React.Fragment>
          {/* <table>
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
          </table> */}
          <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
            <ContentAdd />
          </FloatingActionButton>
          <Table>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>TITLE</TableHeaderColumn>
              <TableHeaderColumn>CONTENT</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
            >
              {this.renderEvent()}
            </TableBody>
          </Table>
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = state => ({events: state.events})
  const mapDispatchToProps = ({ readEvents })

  export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)





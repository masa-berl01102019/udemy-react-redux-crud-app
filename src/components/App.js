/* 何故JSXを使うのか？ */
  // import React, { Component } from 'react';
  // // 上記の'React'の部分はJSXをjavascriptにトランスパイルする為に必要 => 実際はbabelがJSXをトランスパイルしている
  // // 
  // // class App extends Component {
  // //   render() {
  // //     return <div>Hello World</div>; // JSX
  // //   }
  // // }
  // // 上記のJSXは下記のようにトランスパイルされてjavascriptの書き換えられて実行されている
  // class App extends Component {
  //   render() {
  //     return React.createElement(
  //       "div",
  //       null,
  //       "Hello World !!"
  //       );
  //   }
  // }
  // // 上記から分かるようにJSXを使えばより直観的に記述出来る 

/* トランスパイルしなければimport時の'React'の部分は不要 */
  // import { Component } from 'react';

  // class App extends Component {
  //   render() {
  //     return null;
  //   }
  // }

/* class component と JSXの記法 */
  // import React, { Component } from 'react';
  // class App extends Component {
  //   render() {
  //     const dom = <h2>I'm Masa.</h2>;
  //     const greating = "Nice to meet you !!";
  //     // 上記のようにJSXや文字列を変数に代入してreturnしてもブラウザで表示出来る
  //     return(
  //       <React.Fragment>
  //         {/* <div> */}
  //             <h1 className="headLine">Hello World !!</h1>
  //             {/* 上記のようにclassの指定はclassNameを使わないといけない */}
  //             {dom}
  //             <p>{greating}</p>
  //             <label htmlFor="input">INPUT </label>
  //             {/* 上記のようにforの指定はhtmlForを使わないといけない */}
  //             <input type="text" onClick={()=> {console.log("I'm clicked !");}} />
  //             {/* 属性名はキャメルケースで書く*/}
  //         {/* </div> */}
  //         {/* 上記のように複数の要素をreturnする場合に親要素を作らないとエラーになる */}
  //       </React.Fragment>
  //       // 上記のように<React.Fragment>で囲えば余分な親要素を生成しなくても複数の要素を書けるようになる
  //     ); 
  //   }
  // }

/* functional component */
  // import React from 'react';
  // // class component を使わなければ { Component } の部分は不要

  // // functional component
  // const App = () => {
  //   return (
  //     <div>
  //       <Cat />
  //       <Cat />
  //       <Cat />
  //     </div>
  //     )
  // }
  // const Cat = () => {
  //   return <div>ニャー</div>
  // } 

/* props */
  // propsはcomponentの属性のことでpropsには文字,数字,配列,オブジェクト,関数など何でも使用できる
  // import React from 'react';
  // 
  // const App = () => {
  // 
  //   // return (
  //   //   <div>
  //   //     <User name={"Taro"} age={10} />
  //   //     <User name={"Hanako"} age={5} />
  //   //     {/* 上記のようにcomponentは再利用可能でかつ属性(name,age)の値に個別の値を渡して表示することも出来る */}
  //   //   </div>
  //   // )
  //   // 上記は下記のようにユーザーの情報を配列で一括で管理して書き換えられる
  // 
  //   const profiles = [ // 配列で属性と値を管理
  //     { name: 'Taro', age: 10 },
  //     { name: 'Hanako', age: 5 },
  //     { }, // 下記で定めたdefaultPropsが参照される
  //   ]
  // 
  //   return (
  //     <div>
  //       {
  //         profiles.map((profile, index) => {
  //           return <User name={profile.name} age={profile.age} key={index} />
  //         })
  //       }
  //       {/* 上記のようにmapで展開して値を渡すようにすれば配列の数だけ自動作成してくれる */}
  //       {/* 
  //         ReactではPropにkeyという値を指定することが出来て、Componentのリストを表示するような時にユニークなkeyをつけていないとdevelopment環境だとwarningがでてしまう
  //         このkeyはVirtualDOMのdiffから実際のDOMに反映させるときに最小限の変更にするために使われる
  //         mapで展開する際はindexをkeyに渡してあげるのがベストプラクティス 
  //       */}
  //     </div>
  //   )
  // }
  // 
  // // User component
  // const User = (props) => { // 仮引数で受けて反映出来る
  //   return <p>Hi, I am {props.name} ! and {props.age} years old !</p>
  //   // 上記のように複数の属性(name, age) を仮引数で受けて => 仮引数名.属性 で値を参照して表示出来る
  // }
  // 
  // User.defaultProps = {
  //   name: "NoName",
  //   age: 1,
  // }
  // // 上記のようにデフォルトでpropsを設定することが出来る

/* props type */
  // import React from 'react';
  // import PropTypes from 'prop-types';
  // // propsで渡されるデータ型に制約を入れたい場合は上記のようにPropTypesをimportする

  // const App = () => {
  //   const profiles = [
  //     { name: 'Taro', age: 10 },
  //     { name: 'Hanako', age: 5 },
  //     // { name: 5, age: 5 }, // nameに文字列以外の値が渡されているのでworningが出る
  //     // { age: '5' }, // ageに数字以外の値が渡されているのでworningが出る
  //     // { name: 'NoName' }, // isRequiredが設定されていて入力されていないのでworningが出る
  //   ]
  //   return (
  //     <div>
  //       {
  //         profiles.map((profile, index) => {
  //           return <User name={profile.name} age={profile.age} key={index} />
  //         })
  //       }
  //     </div>
  //   )
  // }

  // const User = (props) => {
  //   return <p>Hi, I am {props.name} ! and {props.age} years old !</p>
  // }

  // User.propTypes = {
  //   name: PropTypes.string,
  //   age: PropTypes.number.isRequired,
  // }
  // // 上記のようにデータ型や入力必須など制約をつけられる

/* state */
  // import React, { Component } from 'react';

  // // functional component
  // const App = () => { 
  //   return (
  //     <React.Fragment>
  //       <Counter/>
  //       <Counter/>
  //       <Counter/>
  //     </React.Fragment>
  //   )
  // }
  // // class component
  // class Counter extends Component { // importしたComponentをextendsしないといけない
  //   constructor (props) {
  //     super(props)
  //     // constructorでpropsを受けてsuperで親クラスのComponentで初期化処理をする
  //     this.state = {
  //       count: 0
  //     }
  //     // stateはtihsでアクセスでき、object形式で値を保持する
  //   }
  //   // インスタンスが呼び出される際にconstructorが呼び出される

  //   countUp () {
  //     this.setState({count: this.state.count + 1})
  //     // stateを変更するのはthis.setState(object)で変更しなければならない
  //   }
  //   // 下記のようにアロー関数を使って関数式で書く事も出来る
  //   countDown = () => {
  //     this.setState({count: this.state.count - 1})
  //   }

  //   render () {
  //     return (
  //       <div>
  //         <button onClick={this.countDown}>-</button>
  //         {/* 関数式で書けば上記のようにすっきりかける */}
  //         <span>{this.state.count}</span>
  //         <button onClick={()=>{this.countUp()}}>+</button>
  //       </div>
  //     )
  //   }
  //   // render関数で描画する
  //   // setState()が実行されるたびにrender関数がよびだされる
  // }
  // // stateはclass componentでしか使えない
  // // propsは親のコンポーネントから値が渡されて使用するがstateはコンポーネント内で値を持つ点が違う
  // // propsは変更不可 / stateは変更可能 という点が違う


  // export default App;

/* Redux */
  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  // connect関数をimport
  import { increment, decrement } from '../actions';
  // action creatorをimport

  class App extends Component {
    render () {
      const props = this.props
      // this.propsにはstateや関数が下記のように含まれるようになるので変数に格納
      // {value: 0, increment: ƒ, decrement: ƒ}
      return (
        <div>
          <button onClick={props.decrement} >-</button>
          <span>{props.value}</span>
          <button onClick={props.increment} >+</button>
        </div>
      )
    }
  }

  const mapStateToProps = state => ({ value: state.count.value })
  // 上記はconnect関数の引数として定義しなければいけない関数
  // この関数は Store の state をどのように Props へ変換するか定義する関数

  // const mapDispatchToProps = dispatch => ({
  //   increment: () => dispatch(increment()),
  //   decrement: () => dispatch(decrement()),
  // })
  // 上記は下記のように省略出来る
  const mapDispatchToProps = ({ increment, decrement })
   // 上記はconnect関数の引数として定義しなければいけない関数
  //  action-creatorを引数で渡せばいい

  export default connect(mapStateToProps,mapDispatchToProps)(App)
  // exportする際にstateと状態の遷移を紐づけてあげればok




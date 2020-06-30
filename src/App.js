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
import React from 'react';

const App = () => {

  // return (
  //   <div>
  //     <User name={"Taro"} age={10} />
  //     <User name={"Hanako"} age={5} />
  //     {/* 上記のようにcomponentは再利用可能でかつ属性(name,age)の値に個別の値を渡して表示することも出来る */}
  //   </div>
  // )
  // 上記は下記のようにユーザーの情報を配列で一括で管理して書き換えられる

  const profiles = [ // 配列で属性と値を管理
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 5 },
    { }, // 下記で定めたdefaultPropsが参照される
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* 上記のようにmapで展開して値を渡すようにすれば配列の数だけ自動作成してくれる */}
      {/* 
        ReactではPropにkeyという値を指定することが出来て、Componentのリストを表示するような時にユニークなkeyをつけていないとdevelopment環境だとwarningがでてしまう
        このkeyはVirtualDOMのdiffから実際のDOMに反映させるときに最小限の変更にするために使われる
        mapで展開する際はindexをkeyに渡してあげるのがベストプラクティス 
      */}
    </div>
  )
}

// User component
const User = (props) => { // 仮引数で受けて反映出来る
  return <p>Hi, I am {props.name} ! and {props.age} years old !</p>
  // 上記のように複数の属性(name, age) を仮引数で受けて => 仮引数名.属性 で値を参照して表示出来る
}

User.defaultProps = {
  name: "NoName",
  age: 1,
}
// 上記のようにデフォルトでpropsを設定することが出来る

export default App;

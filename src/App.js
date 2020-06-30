import React, { Component } from 'react';
// 上記の'React'の部分はJSXをjavascriptにトランスパイルする為に必要 * トランスパイルしなければ'React'の部分は不要
/* 何故JSXを使うのか？
// class App extends Component {
//   render() {
//     return <div>Hello World</div>; // JSX
//   }
// }
// 上記のJSXは下記のようにトランスパイルされてjavascriptの書き換えられて実行されている
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello World !!"
//     );
//   }
// }
// 上記から分かるようにJSXを使えばより直観的に記述出来る */

class App extends Component {
  render() {
    const dom = <h2>I'm Masa.</h2>;
    const greating = "Nice to meet you !!";
    // 上記のようにJSXや文字列を変数に代入してreturnしてもブラウザで表示出来る
    return(
      <React.Fragment>
        {/* <div> */}
            <h1 className="headLine">Hello World !!</h1>
            {/* 上記のようにclassの指定はclassNameを使わないといけない */}
            {dom}
            <p>{greating}</p>
            <label htmlFor="input">INPUT </label>
            {/* 上記のようにforの指定はhtmlForを使わないといけない */}
            <input type="text" onClick={()=> {console.log("I'm clicked !");}} />
            {/* 属性名はキャメルケースで書く*/}
        {/* </div> */}
        {/* 上記のように複数の要素をreturnする場合に親要素を作らないとエラーになる */}
      </React.Fragment>
      // 上記のように<React.Fragment>で囲えば余分な親要素を生成しなくても複数の要素を書けるようになる
    ); 
  }
}

export default App;

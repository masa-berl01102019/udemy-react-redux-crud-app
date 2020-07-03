export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
// typeを識別する文字列はreducerでも使うの定数として保持して下記同様にexportする

export const increment = () => {
  return { type: 'INCREMENT'}
  // actionとはobjectであり、type: 値 (unique)でなければならない
}
// 上記のようにactionを値として返す関数をaction creatorと呼ぶ
// 下記のように省略して書くことも出来る
export const increment = () => (
  { type: 'DECREMENT'}
)

import React, { useState, memo } from 'react';

const App = () => {
  const [title, setTitle] = useState("我是父标题")

  return (
    <div className="App">
        <h1>{ title }</h1>
        <button onClick={() => setTitle("父标题 已经改变")}>改名字</button>
        <Child name="子标题"></Child>
    </div>
  );
}

// memo 支持自定义的比较函数通过第二个参数传入
const Child = memo((props) => {
  console.log('props.name ================>', props.name)
  return <h1>{props.name}</h1>
}, (prevProps, nextProps) => {
    /*
        如果把 nextProps 传入 render 方法的返回结果与
        将 prevProps 传入 render 方法的返回结果一致则返回 true，
        否则返回 false
        值得注意的是： 这与 shouldComponentUpdate 方法的返回值相反
    */
   console.log('prevProps ======================> ', prevProps); 
   console.log('nextProps ======================> ', nextProps); 
   // 不返回结果报错！
   return prevProps.name === nextProps.name;
})

export default App;
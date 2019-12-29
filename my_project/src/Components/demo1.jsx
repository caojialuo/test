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

const Child = memo((props) => {
    console.log('props.name ================>', props.name)
    return <h1>{props.name}</h1>
})

export default App;
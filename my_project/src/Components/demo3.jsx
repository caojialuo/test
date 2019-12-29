import React, { useState, memo } from 'react';

const App = () => {
  const [title, setTitle] = useState("主标题");
  const [subtitle, setSubtitle] = useState("副标题");

  const changeChild = () => {
    setTitle("主标题改变了");
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button>
      <Child changeChild={changeChild} name="子组件" />
    </div>
  );
}

const Child = memo((props) => {
    console.log('props.name ================>', props.name)
    return (
        <>
            <h1>{props.name}</h1>
            <button onClick={props.changeChild}>改主标题</button>
        </>
    )
})

export default App;
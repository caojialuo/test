import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);

   // 一个非常耗时的一个计算函数
  // result 最后返回的值是 49995000
  function expensiveFn () {
    let result = 0;
    
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    
    console.log('result ========>', result) // 49995000
    return result;
  }

  const base = expensiveFn();

  return (
    <div className="App">
        <h1>count：{num}</h1>
        <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  );
}


export default App;
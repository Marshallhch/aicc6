import React, { useState } from 'react';

const UseState = () => {
  // useState는 화면이 변경될 때마다(함수가 실행되고 랜더링이 다시될 때마다) 변경되는 상태 데이터를 컨트롤 한다.
  // const [상태 데이터, 상태 데이터 변경 함수] = useState(초기값)

  const [count, setCount] = useState(0);
  const [names, setNames] = useState(['한창호']);
  const [input, setInput] = useState('');

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prev) => {
      console.log(prev);
      return [input, ...prev];
    }); // 콜백 함수로 기존 상태를 누적할 수 있다.
  };

  console.log(input);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleCountUp}>Count Up</button>
      <br />
      <br />

      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Update</button>
      {names.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
    </div>
  );
};

export default UseState;

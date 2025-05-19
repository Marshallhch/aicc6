import React, { useEffect, useState } from 'react';
import AutoCount from './AutoCount';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // console.log('상태 변경');

  // useEffect(() => {}, [dependency array(의존성 배열)]) // 의존성 배열의 값이 변경 될 때 함수 실행

  // useEffect(() => {
  //   console.log('초기 랜더링, 업데이트 시 랜더링');
  // }); // 의존성 배열이 없을 때

  // useEffect(() => {
  //   console.log('count가 업데이트 될 때 실행');
  // }, [count, name]);

  // useEffect(() => {
  //   console.log('name이 업데이트 될 때 실행');
  // }, [name]);

  // useEffect(() => {
  //   console.log('초기 화면 랜더링 될 때 한 번 실행');
  // }, []);

  const [showCount, setShowCount] = useState(false);

  return (
    <div>
      <div>
        <span>Count: {count}</span>
        <button onClick={handleCountUp}>Plus</button>
      </div>
      <div>
        <input type="text" value={name} onChange={handleInputChange} />
      </div>
      <div>
        {showCount && <AutoCount />}
        <button onClick={() => setShowCount(!showCount)}>
          {showCount ? 'True' : 'False'}
        </button>
      </div>
    </div>
  );
};

export default UseEffect;

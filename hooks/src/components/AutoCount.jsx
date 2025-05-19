import React, { useEffect } from 'react';

const AutoCount = () => {
  useEffect(() => {
    const count = setInterval(() => {
      console.log('자동 카운트 실행');
    }, 1000);

    // 클린업
    return () => {
      clearInterval(count);
      console.log('자동 카운트 종료');
    };
  }, []);
  return (
    <div>
      <span>자동 카운트</span>
    </div>
  );
};

export default AutoCount;

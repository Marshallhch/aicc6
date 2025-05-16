import './App.css';
// import: 외부 파일을 가져온다.
import Section from './components/Section'; // 컴포넌트 임포트 시 확장자 생략

const App = () => {
  // 필수는 아니지만 대부분 화살표 함수를 사용
  // return 내부에 작성되는 html 코드를 JSX라고 부른다.
  // JSX 내부는 하나의 태그로 묶여야 한다.
  // JSX를 포함하는 함수를 컴포넌트라 한다.
  // 컴포넌트 이름은 대문자로 시작한다.
  return (
    <div className="App">
      <Section num="1" />
      <Section num="2" />
    </div>
  );
};

export default App;
// export: 현재 파일에 작성된 컴포넌트를 외부에서 사용하도록 허용한다.

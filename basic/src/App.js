import './App.css';
// import: 외부 파일을 가져온다.
import Section from './components/Section'; // 컴포넌트 임포트 시 확장자 생략
import Header from './components/Header';
import Footer from './components/Footer';

import { sectionData } from './utils/sectionData';

const App = () => {
  // 필수는 아니지만 대부분 화살표 함수를 사용
  // return 내부에 작성되는 html 코드를 JSX라고 부른다.
  // JSX 내부는 하나의 태그로 묶여야 한다.
  // JSX를 포함하는 함수를 컴포넌트라 한다.
  // 컴포넌트 이름은 대문자로 시작한다.
  // JSX 내부에는 자바스크립트 문법을 사용할 수 없다. 사용하려면 {} 내부에 작성한다.
  console.log(sectionData);
  // const { title, contents, articles} = sectionData;
  return (
    <div className="App">
      <Header />
      {sectionData.map((section, idx) => (
        <Section
          key={idx}
          title={section.title}
          contents={section.contents}
          article={section.articles}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
// export: 현재 파일에 작성된 컴포넌트를 외부에서 사용하도록 허용한다.

import Header from './Header';

const Section = ({ num }) => {
  console.log(num);
  return (
    <div className="section">
      <h1>Section {num}</h1>
      <Header />
    </div>
  );
};

export default Section;

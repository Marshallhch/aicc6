const Section = ({ title, contents, article }) => {
  return (
    <div className="section">
      {/* JSX에서는 객체를 사용할 수 없다. */}
      <h1>{title}</h1>
      <div>{contents}</div>
      <div>
        {article.map((article, idx) => (
          <div key={idx}>{article}</div>
        ))}
      </div>
    </div>
  );
};

export default Section;

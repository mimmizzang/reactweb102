function AboutBox({ title, text }) {
  return (
    <div className="box">
      {title}
      <br />
      <p>{text}</p>
    </div>
  );
}

export default AboutBox;

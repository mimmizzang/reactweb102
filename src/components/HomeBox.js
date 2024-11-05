function HomeBox({ text, image }) {
  return (
    <p>
      <img src={`${process.env.PUBLIC_URL}${image}`} alt="" />
      <br />
      {text}
    </p>
  );
}

export default HomeBox;

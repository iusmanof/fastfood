import "../style/Header.scss";

function Header({ isAllowed }) {
  const a = true;

  return (
    <>
      {isAllowed && "is Allowed"}
      <div className="class1">class 1</div>
    </>
  );
}

export default Header;

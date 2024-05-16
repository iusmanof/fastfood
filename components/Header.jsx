function Header({ isAllowed }) {
  const a = true;

  return <>{isAllowed && "is Allowed"}</>;
}

export default Header;

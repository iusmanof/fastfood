import { Link, useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>

      <Link to="/about">Back to Users</Link>
    </>
  );
};

export default User;    

import React from "react";
import { Link, useParams } from "react-router-dom";

const User: React.FC = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>User: {userId}</h2>
      <Link to="/about">Back to Users</Link>
    </div>
  );
};

export default User;    

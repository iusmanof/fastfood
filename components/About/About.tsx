import React from "react";
import Header from "../Header/Header";
import { Link, Outlet, useParams } from "react-router-dom";

interface IUser {
  id: string;
  fullName: string;
}

interface IAboutProps {
  users: IUser[];
}

const About: React.FC<IAboutProps> = ({ users }): React.ReactElement => {
  const { userId } = useParams();
  return (
    <>
      <h2>About</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/about/${user.id}`}>
              {user.fullName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default About;

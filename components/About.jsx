import Header from "../components/Header";
import { Link, Outlet, useParams } from "react-router-dom";

function About({ users }) {
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

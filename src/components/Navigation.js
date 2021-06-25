import Container from "./Container";
import { Link } from "react-router-dom";

export default function Navigation() {
  const navClass = "block px-2 py-1 ml-4 font-medium text-xl";
  return (
    <header className="shadow-sm py-4 mb-4 bg-purple-100">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="text-3xl italic font-bold">
              Logo
            </Link>
          </div>
          <ul className="flex">
            <li>
              <Link to="/" className={navClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className={navClass}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className={navClass}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

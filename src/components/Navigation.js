import Container from "./Container";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Navigation() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const navClass = "block px-2 py-1 ml-4 font-medium text-xl cursor-pointer";

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

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
            {auth !== null && (
              <>
                <li>
                  <Link to="/dashboard" className={navClass}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a className={navClass} onClick={logout}>
                    Logout
                  </a>
                </li>
              </>
            )}
            {auth === null && (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

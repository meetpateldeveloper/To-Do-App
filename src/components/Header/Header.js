import "./Header.scss";
import { FaTasks } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="title">
        <FaTasks size={38} style={{ marginBottom: -3, marginRight: 5 }} s />
        Todo App
      </div>
      <div className="author">by Meet Patel</div>
    </header>
  );
}

export default Header;

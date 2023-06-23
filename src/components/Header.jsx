import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { BurgerButton, Logo, Navbar } from "nexious-library";
import vitelogo from "../assets/vite.svg";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const [isActive, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const [menu, setMenu] = useState(data.menu || []);

  const handleToggle = (e) => {};
  const handleClick = (e) => {};

  return (
    <header>
      <Link to="/" className="link">
        <Logo data={{ url: vitelogo, alt: data.title }} title={data.title} />
      </Link>
      <nav className="primary-navigation">
        <Navbar
          show={{ isActive, isClose }}
          menu={menu}
          toggle={handleToggle}
          click={handleClick}
        />
      </nav>
      <nav>
        <BurgerButton isBurger={isActive} click={() => setActive(!isActive)} />
      </nav>
    </header>
  );
};

export default Header;

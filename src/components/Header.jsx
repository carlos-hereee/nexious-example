import { useState } from "react";
import { BurgerButton, Logo, Navbar } from "nexious-library";
import vitelogo from "../assets/vite.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ data }) => {
  const [isActive, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const [menu, setMenu] = useState(data.menu || []);
  const navigate = useNavigate();

  const handleToggle = (e) => {
    setMenu(menu.map((i) => (i.uid === e.uid ? { ...i, isAlt: !i.isAlt } : i)));
  };

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
          click={(e) => navigate(`${e.name}`)}
        />
      </nav>
      <nav className="mobile-navigation">
        <BurgerButton isBurger={isActive} click={() => setActive(!isActive)} />
        <Navbar
          show={{ isActive, isClose }}
          menu={menu}
          toggle={handleToggle}
          click={(e) => navigate(`${e.name}`)}
        />
      </nav>
    </header>
  );
};

export default Header;

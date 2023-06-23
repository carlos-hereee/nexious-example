import { Logo } from "nexious-library";
import vitelogo from "../assets/vite.svg";

const Header = ({ data }) => {
  return (
    <header>
      <Logo data={{ url: vitelogo, alt: data.title }} title={data.title} />
    </header>
  );
};

export default Header;

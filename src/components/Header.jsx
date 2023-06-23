import { Capitalize } from "nexious-library";

const Header = ({ data }) => {
  return (
    <header>
      <h1>
        {data.title.split(" ").map((t) => (
          <Capitalize data={t} key={t} />
        ))}
      </h1>
    </header>
  );
};

export default Header;

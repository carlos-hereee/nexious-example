import { useState } from "react";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import { Card } from "nexious-library";

const Landing = () => {
  const [count, setCount] = useState(0);
  const header = {
    title: "lorem ipsum",
    hasHero: true,
    hero: {
      name: "vite-logo",
      url: viteLogo,
      alt: "industry vite",
    },
  };
  const body = {
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    hyperlink: [
      { word: "labore", link: "labore" },
      { word: "sit", link: "sit" },
    ],
    hasLink: true,
    uid: "uid-123",
  };
  const footer = {
    data: "",
    buttons: [
      { icon: "check", uid: "button-check-123", label: "Go" },
      { icon: "x", uid: "123", label: "Cancel" },
    ],
  };
  return (
    <div className="flex-d-column">
      <Card header={header} body={body} footer={footer} />
    </div>
  );
};
export default Landing;

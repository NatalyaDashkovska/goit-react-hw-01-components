import React from "react";
import ReactDom from "react-dom";
import App from "./App";
const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

ReactDom.render(<App />, document.getElementById(`root`));

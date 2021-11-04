import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageURL: "https://i.ibb.co/cvpntL1/hats.png",
          linkURL: "hats",
          id: 1,
        },
        {
          title: "jackets",
          imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
          linkURL: "",
          id: 2,
        },
        {
          title: "sneakers",
          imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkURL: "",
          id: 3,
        },
        {
          title: "womens",
          imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          linkURL: "",
          id: 4,
        },
        {
          title: "mens",
          imageURL: "https://i.ibb.co/R70vBrQ/mens.png",
          size: "large",
          linkURL: "",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps }/>
        ))}
      </div>
    );
  }
}

export default Directory;

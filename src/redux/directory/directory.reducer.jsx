const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageURL: "https://i.ibb.co/cvpntL1/hats.png",
      linkURL: "shop/hats",
      id: 1,
    },
    {
      title: "jackets",
      imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
      linkURL: "shop/jackets",
      id: 2,
    },
    {
      title: "sneakers",
      imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkURL: "shop/sneakers",
      id: 3,
    },
    {
      title: "womens",
      imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      linkURL: "shop/womens",
      id: 4,
    },
    {
      title: "mens",
      imageURL: "https://i.ibb.co/R70vBrQ/mens.png",
      size: "large",
      linkURL: "shop/mens",
      id: 5,
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
import React from "react";
import { connect } from "react-redux";

const Body = ({ name, age, items }) => {
  const itemsArray = (
    <ul>
      {items.map((item, n) => (
        <li key={n}>
          <img src={item.image_url}></img>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.id}</p>
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      I'm {name}, i'm {age} year old
      {itemsArray}
    </div>
  );
};
const mapStateToProps = (state) => ({
  items: state.rootItems.items,
});
export default connect(mapStateToProps)(Body);

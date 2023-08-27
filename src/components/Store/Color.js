import React from "react";

const Color = ({ colors, setcolor, id }) => {
  //   console.log(id, colors[0]?._id);
  return (
    <ul style={{ listStyle: "none", cursor: "pointer" }}>
      {colors?.map((color, index) => (
        <li
          onClick={() => setcolor(color._id)}
          key={index}
          style={{
            width: id === color?._id ? "30px" : "25px",
            height: id === color?._id ? "30px" : "25px",
            opacity: id === color?._id ? 1 : 0.8,
            borderRadius: "50%",
            backgroundColor: color?.title,
          }}
        ></li>
      ))}
    </ul>
  );
};

export default Color;

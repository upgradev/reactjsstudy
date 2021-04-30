import React from "react";

const Book = ({ img, title, author }) => {
  //  const { img, title, author } = prop;

  const clickhandler = (e) => {
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}> {title} </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickhandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        {" "}
        more complex example
      </button>
      {/* {children} */}
    </article>
  );
};

export default Book;

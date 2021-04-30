import React from "react";
import ReactDom from "react-dom";
import { Books } from "./Books";
import SpecificBook from './Book'
import "./index.css";
import {greeting} from './testing/testing'


export default function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {Books.map((book, index) => {
        // const {img, title, author} = book;
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
        // <div>
        //   <h3>{title}</h3>
        //   <h6>{author}</h6>
        // </div>
      })}
      {/* <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          obcaecati totam, vitae vel et eligendi? Harum, quam aut. Quae aut hic
          quod repellendus, molestias nihil alias dolore. Debitis, omnis ipsum.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      /> */}
    </section>
  );
}



// const Index = () => {
//   return(
//     React.createElement('h1', {}, 'Hello world')
//   )
// }

ReactDom.render(<BookList />, document.getElementById("root"));

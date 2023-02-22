import React from "react";
import { BlogItem } from "../../components/index";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./import";
const BlogList = [
  {
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    time: "Sep 26, 2021",
    img: blog1,
  },
  {
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    time: "Sep 26, 2021",
    img: blog2,
  },
  {
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    time: "Sep 26, 2021",
    img: blog3,
  },
  {
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    time: "Sep 26, 2021",
    img: blog4,
  },
  {
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    time: "Sep 26, 2021",
    img: blog5,
  },
];
export default function Blog() {
  return (
    <div className="blog section__padding">
      <div className="blog__heading">
        <h1 className=" gradient__text">
          A lot is happening, <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="blog__list">
        <div className="blog__list__groupA">
          <BlogItem
            img={BlogList[0].img}
            title={BlogList[0].title}
            time={BlogList[0].time}
          />
        </div>
        <div className="blog__list__groupB">
          {BlogList.slice(1, BlogList.length).map((item, index) => (
            <div
              className="blog__list__groupB__item"
              key={`${item.title}+${index}`}
            >
              <BlogItem img={item.img} title={item.title} time={item.time} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

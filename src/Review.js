import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]

  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }
  const randomPerson = () => {

    //here using let , not const because i am using this var inside if condition so it;s need to be update and use the same var 

    let randomNum = Math.floor(Math.random() * people.length);
   
    if(randomNum === index){
      randomNum = index-1;   
    }
    setIndex(checkNum(randomNum));
   
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>

      <div className="info">
        {text}
      </div>
      <div className="buttton-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>

      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;

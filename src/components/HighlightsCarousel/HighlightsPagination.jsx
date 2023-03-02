import React from "react";

function HighlightsPagination({ imagesLength, currentSlide, setCurrentSlide }) {
  let pagination = [];
  console.log(imagesLength);

  for (let i = 0; i < imagesLength; i++) {
    pagination.push({
      id: Math.random().toString(36).substring(2),
      currentSlide: i,
    });
  }

  return (
    <>
      {pagination.map((item, index) => {
        if (currentSlide === index) {
          return (
            <div
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className="pagination-dots bg-white border border-black"
            ></div>
          );
        }

        return (
          <div
            onClick={() => setCurrentSlide(index)}
            key={item.id}
            className="pagination-dots"
          ></div>
        );
      })}
    </>
  );
}

export default HighlightsPagination;

import { lazy, Suspense, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import useCardsPerRow from "../../hooks/useCardsPerRow";
import LoadingRow from "../LoadingComponents/LoadingRow";

function ShowsRow({ contentData, setShowModal, setSelectedCard, rowTitle }) {
  const ShowCard = lazy(() => {
    return import("./ShowCard");
  });

  const cardsPerRow = useCardsPerRow() || 2;
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlides = {
    transform: `translateX(${currentSlide}%)`,
  };

  console.log(contentData);

  function nextSlide() {
    let lastRow = -(Math.floor(contentData.length / cardsPerRow) * 100);
    if (currentSlide <= lastRow) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev - 100);
  }
  function previousSlide() {
    let firstRow = Math.floor(contentData.length / cardsPerRow) * 100;
    if (currentSlide >= 0) {
      setCurrentSlide(-firstRow);
      return;
    }
    setCurrentSlide((prev) => prev + 100);
  }

  return (
    <>
      <Suspense fallback={<LoadingRow />}>
        <section className="flex flex-col w-full my-6">
          <h3 className="w-full pl-[3%] text-white" aria-label="Row Title">
            {rowTitle}
          </h3>
          <div className="flex items-center justify-center w-full relative">
            <div className="chevrons left-3 z-10">
              <BsChevronCompactLeft
                onClick={previousSlide}
                size={40}
                color={"#fff"}
              />
            </div>
            <div className="flex max-w-[95%] overflow-hidden">
              <div
                style={moveSlides}
                className="flex min-w-[100%] duration-300"
              >
                {contentData?.map((content, index) => {
                  return (
                    <ShowCard
                      setSelectedCard={setSelectedCard}
                      setShowModal={setShowModal}
                      contentData={content}
                      key={content.id}
                    />
                  );
                })}
              </div>
            </div>
            <div className="chevrons right-3 z-10">
              <BsChevronCompactRight
                onClick={nextSlide}
                size={40}
                color="white"
              />
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default ShowsRow;

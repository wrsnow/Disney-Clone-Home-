import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import HighlightsPagination from "./HighlightsPagination";

//Carousel using img-src //no transition

function HighlightsCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const numberOfSlides = images.length;

  // const moveSlides = {
  //   transform: `translateX(${currentSlide}%)`,
  // };

  function nextSlide() {
    if (currentSlide >= images.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  }
  function previousSlide() {
    if (currentSlide <= 0) {
      setCurrentSlide(images.length - 1);
      return;
    }
    setCurrentSlide((prev) => prev - 1);
  }
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [currentSlide]);

  return (
    <section className="max-w-[80%] mx-auto my-6 overflow-hidden relative rounded-1xl border-2">
      <div className="controls left-0 z-20">
        <BsChevronCompactLeft
          onClick={previousSlide}
          size={40}
          color={"#fff"}
        />
      </div>
      <div className="overlay-highlights"></div>
      <div
        // style={moveSlides}
        className="flex h-[200px] aspect-[21/9] w-full md:h-[400px]"
      >
        <img
          loading="lazy"
          className="min-w-[100%] object-cover duration-300 object-center"
          src={images[currentSlide]?.poster ?? ""}
          alt={images[currentSlide]?.name}
        />
      </div>
      <div className="controls right-0 z-20">
        <BsChevronCompactRight onClick={nextSlide} size={40} color="white" />
      </div>
      <div className="flex justify-end items-center pagination absolute bottom-0 left-0 w-full h-4 gap-2 pb-3 pr-3 z-10">
        <HighlightsPagination
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          imagesLength={numberOfSlides}
        />
      </div>
    </section>
  );
}

export default HighlightsCarousel;

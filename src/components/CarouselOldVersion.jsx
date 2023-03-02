import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useEffect, useState } from "react";

// Slider using translateX with smooth transition

function Carrousel({ images }) {
  let sliced = images.slice(0, 16);

  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlides = {
    transform: `translateX(${currentSlide}%)`,
  };

  function nextSlide() {
    if (currentSlide <= -(sliced.length * 100 - 100)) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev - 100);
  }
  function previousSlide() {
    if (currentSlide >= 0) {
      setCurrentSlide(-(sliced.length * 100 - 100));
      return;
    }
    setCurrentSlide((prev) => prev + 100);
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
    <div className="max-w-[80%] mx-auto my-6 overflow-hidden relative rounded-3xl">
      <div className="controls cursor-pointer absolute text-slate-50 top-[50%] translate-y-[-50%] left-0 z-10">
        <BsChevronCompactLeft
          onClick={previousSlide}
          size={40}
          color={"#fff"}
        />
      </div>
      <div className="linear-bg absolute top-0 left-0 w-full h-full z-10"></div>
      <div
        style={moveSlides}
        className="flex h-[400px] duration-1000 ease-in-out"
      >
        {sliced.map((image, index) => {
          return (
            <div
              key={image.poster}
              style={{ backgroundImage: `url(${image.poster})` }}
              className="flex-none w-[100%] aspect-video bg-cover rounded-2xl"
            ></div>
          );
        })}
      </div>
      <div className="controls cursor-pointer absolute text-slate-50 top-[50%] translate-y-[-50%] right-0">
        <BsChevronCompactRight onClick={nextSlide} size={40} color="white" />
      </div>
      <div className="flex justify-center items-center pagination absolute bg-white bottom-0 left-0 w-full h-4 gap-1">
        <div className="pagination-dots"></div>
        <div className="pagination-dots"></div>
        <div className="pagination-dots"></div>
      </div>
    </div>
  );
}

export default Carrousel;

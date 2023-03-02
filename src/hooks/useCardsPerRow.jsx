import { useEffect, useState } from "react";

function useCardsPerRow() {
  const [cardsPerRow, setCardsPerRow] = useState(2);

  useEffect(() => {
    function getInnerWidth() {
      innerWidth = window.innerWidth;
      if (innerWidth <= 767) {
        setCardsPerRow(2);
      } else if (innerWidth >= 768 && innerWidth <= 1023) {
        setCardsPerRow(3);
      } else {
        setCardsPerRow(4);
      }
    }
    window.addEventListener("load", getInnerWidth);

    return () => {
      window.removeEventListener("load", getInnerWidth);
    };
  }, []);
  return cardsPerRow;
}
export default useCardsPerRow;

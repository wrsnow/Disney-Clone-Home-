import "./App.css";
import { useEffect, useState, Suspense, lazy } from "react";
import BrandRow from "./components/BrandRowCard/BrandRow";
import HighlightsCarousel from "./components/HighlightsCarousel/HighlightsCarousel";
import ShowsRow from "./components/ShowsRow/ShowsRow";
import Movies from "./components/Data/Movies";
import Navbar from "./components/Navbar/Navbar";
import useFetch from "./hooks/useFetch";
import Spinner from "./components/LoadingComponents/Spinner";

function App() {
  const [highlights, setHighlights] = useState(Movies);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [data, isFetching, hasError] = useFetch("/disney_plus_content.json");

  const Modal = lazy(() => import("./components/Modal"));

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "";
  }, [showModal]);

  const titles = ["Movies", "Shows", "Recommended", "Action"];

  let ShowsRows = titles.map((title, idx) => {
    let start = idx * 10;
    let end = start + 10;

    return (
      <ShowsRow
        key={title}
        rowTitle={title}
        setSelectedCard={setSelectedCard}
        setShowModal={setShowModal}
        contentData={data?.slice(start, end)}
      />
    );
  });

  return (
    <>
      <Navbar />
      <HighlightsCarousel images={highlights} />
      <div className="max-w-screen-2xl mx-auto">
        <BrandRow />
        {ShowsRows}
        {showModal && (
          <Suspense fallback={<Spinner />}>
            <Modal selectedCard={selectedCard} setShowModal={setShowModal} />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;

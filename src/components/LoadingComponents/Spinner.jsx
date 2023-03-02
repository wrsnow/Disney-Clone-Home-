import { createPortal } from "react-dom";

function SpinnerItem() {
  return (
    <div className="fixed top-0 left-0 w-full min-h-screen flex justify-center items-center z-20 bg-zinc-700/50">
      <div className="min-w-[80px] aspect-square border-cyan-400 border-l-white border-4 rounded-full animate-spin"></div>
    </div>
  );
}

function Spinner() {
  {
    return createPortal(<SpinnerItem />, document.getElementById("overlay"));
  }
}

export default Spinner;

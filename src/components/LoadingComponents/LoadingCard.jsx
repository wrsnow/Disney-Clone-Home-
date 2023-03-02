function LoadingCard() {
  return (
    <div className="lg:w-1/4 md:w-1/3 w-1/2 p-5 flex-none">
      <div className="cursor-pointer border-2 border-transparent duration-200 rounded-sm w-full animate-pulse ">
        <div className="w-full aspect-video bg-slate-600/75"></div>
      </div>
    </div>
  );
}

export default LoadingCard;

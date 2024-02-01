function Loader() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center
    justify-center gap-2 bg-slate-200/20 backdrop-blur-sm"
    >
      <div className="loader"></div>
      <div className="text-xl">Loading...</div>
    </div>
  );
}

export default Loader;

import "./PreLoader.css";

function PreLoader() {
  return (
    <div className="circle__preloader-container">
      <div className="circle__preloader"></div>
      <h1 className="circle__preloader-title">Searching for news...</h1>
    </div>
  );
}

export default PreLoader;

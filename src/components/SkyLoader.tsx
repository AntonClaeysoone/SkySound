import './SkyLoader.css';

const SkyLoader = () => {
  return (
    <div className="sky-loader">
      <div className="sky-loader__building">
        <div className="sky-loader__bar sky-loader__bar--1"></div>
        <div className="sky-loader__bar sky-loader__bar--2"></div>
        <div className="sky-loader__bar sky-loader__bar--3"></div>
        <div className="sky-loader__bar sky-loader__bar--4"></div>
        <div className="sky-loader__bar sky-loader__bar--5"></div>
      </div>
    </div>
  );
};

export default SkyLoader;


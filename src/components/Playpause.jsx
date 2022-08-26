import pp from './playpause.module.css';
export default () => {
  return (
    <div className={pp.container}>
      <div className={pp.playpause}>
        <div className={pp.buttonLeft}></div>
        <div className={pp.buttonRight}></div>
      </div>
    </div>
  );
};

import box from "./box.module.css";
export default () => (
  <div className={box.scene}>
    <div className={box.box}>
      <div className={`${box.box__face}, ${box["box__face--front"]}`}>
        front
      </div>
      <div className={`${box.box__face}, ${box["box__face--back"]}`}>back</div>
      <div className={`${box.box__face}, ${box["box__face--right"]}`}>
        right
      </div>
      <div className={`${box.box__face}, ${box["box__face--left"]}`}>left</div>
      <div className={`${box.box__face}, ${box["box__face--top"]}`}>top</div>
      <div className={`${box.box__face}, ${box["box__face--bottom"]}`}>
        bottom
      </div>
    </div>
  </div>
);

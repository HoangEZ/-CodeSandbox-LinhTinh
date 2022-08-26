import perspective from "./perspective.module.css";
export default () => {
  return (
    <div className={perspective.container}>
      <div className={perspective["box-outer"]}>
        <div className={perspective.box}>
          <div className={perspective.top}></div>
          <div className={perspective.front}></div>
          <div className={perspective.right}></div>
        </div>
      </div>
      <div className={perspective["box-outer"]}>
        <div className={perspective.box}>
          <div className={perspective.top}></div>
          <div className={perspective.front}></div>
          <div className={perspective.right}></div>
        </div>
      </div>
    </div>
  );
};

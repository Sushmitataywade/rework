import styles from "./Component1.module.css";

const Component1 = ({
  reworkHasBeenAGreatWayToM,
  sequenceSplitter,
  theresaWebb,
  hRManagerAmazon,
}) => {
  return (
    <div className={styles.component16}>
      <div className={styles.reworkHasBeen}>{reworkHasBeenAGreatWayToM}</div>
      <div className={styles.matrixMultiplier}>
        <img
          className={styles.sequenceSplitterIcon}
          loading="lazy"
          alt=""
          src={sequenceSplitter}
        />
        <div className={styles.container}>
          <div className={styles.theresaWebb}>{theresaWebb}</div>
          <div className={styles.hrManagerAmazon}>{hRManagerAmazon}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;

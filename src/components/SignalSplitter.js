import Component from "./Component";
import styles from "./SignalSplitter.module.css";

const SignalSplitter = () => {
  return (
    <section className={styles.signalSplitter}>
      <div className={styles.dataConsumer}>
        <div className={styles.dataConnection}>
          <div className={styles.branchingLogic}>
            <div className={styles.successStories}>
              <span>{`Success `}</span>
              <span className={styles.stories}>Stories</span>
            </div>
          </div>
          <div className={styles.component11Parent}>
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className={styles.dataConsumerInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignalSplitter;

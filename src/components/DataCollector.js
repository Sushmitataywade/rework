import FrameComponent2 from "./FrameComponent2";
import styles from "./DataCollector.module.css";

const DataCollector = () => {
  return (
    <section className={styles.dataCollector}>
      <div className={styles.shapeSet}>
        <div className={styles.chooseYourSimpleContainer}>
          <span>{`Choose Your Simple, `}</span>
          <span className={styles.transparentPricing}>Transparent Pricing</span>
        </div>
      </div>
      <div className={styles.containerNest}>
        <div className={styles.connectPoints}>
          <div className={styles.iconLibraryParent}>
            <div className={styles.iconLibrary}>
              <div className={styles.pathPanel}>
                <div className={styles.sizeScale}>
                  <div className={styles.alignAlign}>
                    <div className={styles.fillArea}>
                      <div className={styles.strokeEdge}>1</div>
                    </div>
                    <div className={styles.month}>Month</div>
                  </div>
                </div>
                <div className={styles.proximitySensor}>
                  <div className={styles.div}>₹</div>
                  <div className={styles.div1}>199.00</div>
                  <div className={styles.month1}>/month</div>
                </div>
              </div>
            </div>
            <FrameComponent2 />
            <div className={styles.simpleButtonWrapper}>
              <button className={styles.simpleButton}>
                <div className={styles.getStarted}>Get Started</div>
                <div className={styles.arrow}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.wrapper}>
                      <div className={styles.div2}>3</div>
                    </div>
                    <div className={styles.months}>Months</div>
                  </div>
                  <button className={styles.blendModes}>
                    <div className={styles.mostPopular}>Most Popular</div>
                  </button>
                </div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div3}>₹</div>
                <div className={styles.div4}>149.00</div>
                <div className={styles.month2}>/month</div>
              </div>
            </div>
            <FrameComponent2
              propPadding="0px var(--padding-12xs) var(--padding-lgi)"
              propColor="#f7f7f7"
              propColor1="#eee5ff"
              propColor2="#eee5ff"
              propColor3="#eee5ff"
              propColor4="#eee5ff"
              propColor5="#eee5ff"
              propColor6="#eee5ff"
            />
            <div className={styles.simpleButton1}>
              <div className={styles.getStarted1}>Get Started</div>
              <div className={styles.arrow1}>
                <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.container}>
                      <div className={styles.div5}>6</div>
                    </div>
                    <div className={styles.months1}>Months</div>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.div6}>₹</div>
                  <div className={styles.div7}>169.00</div>
                  <div className={styles.month3}>/month</div>
                </div>
              </div>
            </div>
            <FrameComponent2
              propPadding="0px 0px var(--padding-lgi)"
              propColor="#5c27c0"
              propColor1="#5b5b5b"
              propColor2="#5b5b5b"
              propColor3="#5b5b5b"
              propColor4="#5b5b5b"
              propColor5="#5b5b5b"
              propColor6="#5b5b5b"
            />
            <div className={styles.simpleButtonContainer}>
              <div className={styles.simpleButton2}>
                <div className={styles.getStarted2}>Get Started</div>
                <div className={styles.arrow2}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerNestInner}>
          <div className={styles.step3Wrapper}>
            <div className={styles.step3}>Step-3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCollector;

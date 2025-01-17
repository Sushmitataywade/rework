import Steps from "./Steps";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.forEmployersInner}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
        <div className={styles.steps}>
          <div className={styles.howOurSystemOperatesWrapper}>
            <div className={styles.howOurSystemContainer}>
              <span>{`How Our System `}</span>
              <span className={styles.operates}>Operates</span>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.stepsParent}>
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                frame48095633="/frame-48095633.svg"
              />
              <div className={styles.steps1}>
                <div className={styles.signUp}>Sign Up</div>
                <div className={styles.followTheLink}>
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <div className={styles.wrapperMingcuteuserAddLine}>
                  <img
                    className={styles.mingcuteuserAddLineIcon}
                    loading="lazy"
                    alt=""
                    src="/mingcuteuseraddline.svg"
                  />
                </div>
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                frame48095633="/frame-48095633-1.svg"
                propPadding="0px 0px var(--padding-41xl) var(--padding-11xl)"
                propPadding1="0px var(--padding-mini)"
                propMinHeight="100px"
              />
            </div>
            <div className={styles.simpleButtonWrapper}>
              <div className={styles.simpleButton}>
                <div className={styles.getStarted}>Get Started</div>
                <div className={styles.arrow}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;

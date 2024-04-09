import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.frameParent}>
      <header className={styles.splitterParent}>
        <div className={styles.splitter}>
          <div className={styles.logo}>
            <div className={styles.logoChild} />
            <div className={styles.logoItem} />
            <div className={styles.rework}>
              <span className={styles.re}>
                <span className={styles.r}>r</span>
                <span className={styles.e}>e</span>
              </span>
              <span className={styles.work}>work</span>
            </div>
            <div className={styles.aiWrapper}>
              <div className={styles.ai}>ai</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.talentFinderParent}>
            <div className={styles.talentFinder}>Talent Finder</div>
            <div className={styles.forRecruiters}>For Recruiters</div>
            <div className={styles.forEmployersParent}>
              <div className={styles.forEmployers}>For Employers</div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-451.svg"
                />
              </div>
            </div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.company}>Company</div>
          </div>
        </div>
        <div className={styles.simpleButtonParent}>
          <div className={styles.simpleButton}>
            <div className={styles.logIn}>Log In</div>
            <div className={styles.arrow}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            </div>
          </div>
          <div className={styles.simpleButton1}>
            <div className={styles.getStarted}>Get Started</div>
            <div className={styles.arrow1}>
              <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector-1.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.maskGroup}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.kCandidatesHiredContainer}>
                    <p className={styles.k}>
                      <b>+10K</b>
                    </p>
                    <p className={styles.candidatesHired}>Candidates Hired</p>
                  </div>
                  <button className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-4.svg"
                    />
                  </button>
                </div>
                <img
                  className={styles.maskGroupChild}
                  alt=""
                  src="/rectangle-39395@2x.png"
                />
              </div>
            </div>
            <div className={styles.powerUpYourContainer}>
              <p className={styles.powerUpYour}>Power Up Your Hiring</p>
              <p className={styles.withRework}>with Rework .</p>
            </div>
          </div>
          <div
            className={styles.empowerYourBusiness}
          >{`Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire `}</div>
        </div>
        <div className={styles.ctaButtonParent}>
          <button className={styles.ctaButton}>
            <div className={styles.bookADemo}>Book A Demo</div>
          </button>
          <div className={styles.frameWrapper1}>
            <div className={styles.starPointParent}>
              <div className={styles.starPoint}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <div className={styles.noCreditRequired}>
                  No credit Required
                </div>
              </div>
              <div className={styles.starPoint1}>
                <img className={styles.groupIcon1} alt="" src="/group.svg" />
                <div className={styles.streamlinedRecruitmentProces}>
                  Streamlined Recruitment Process
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild1} />
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild2} />
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                  <div className={styles.happyCompaniesWrapper}>
                    <div className={styles.happyCompanies}>
                      <p className={styles.p}>
                        <b>+360</b>
                      </p>
                      <p className={styles.happyCompanies1}>Happy Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameChild3} />
    </div>
  );
};

export default FrameComponent5;

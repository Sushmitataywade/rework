import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  propPadding,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const suitableForCompaniesStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const interviewReadyCandidatesStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const unlimitedJobPostingsStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const receivePreVettedProfilesStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const dedicatedAccountManagerStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const assistanceWithInterviewStyle = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const customReportsStyle = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  return (
    <div className={styles.frameWrapper} style={frameDiv1Style}>
      <div className={styles.suitableForCompaniesWith5Parent}>
        <div
          className={styles.suitableForCompanies}
          style={suitableForCompaniesStyle}
        >
          Suitable for companies with 5-10 openings
        </div>
        <div className={styles.frameParent}>
          <div className={styles.iconsParent}>
            <img
              className={styles.icons}
              loading="lazy"
              alt=""
              src="/icons.svg"
            />
            <div
              className={styles.interviewReadyCandidates}
              style={interviewReadyCandidatesStyle}
            >
              10 interview-ready candidates
            </div>
          </div>
          <div className={styles.fontSelector}>
            <img className={styles.icons1} alt="" src="/icons.svg" />
            <div
              className={styles.unlimitedJobPostings}
              style={unlimitedJobPostingsStyle}
            >
              Unlimited job postings
            </div>
          </div>
          <div className={styles.iconsGroup}>
            <img className={styles.icons2} alt="" src="/icons.svg" />
            <div
              className={styles.receivePreVettedProfiles}
              style={receivePreVettedProfilesStyle}
            >
              Receive pre-vetted profiles within 48 hours
            </div>
          </div>
          <div className={styles.iconsContainer}>
            <img className={styles.icons3} alt="" src="/icons-3.svg" />
            <div
              className={styles.dedicatedAccountManager}
              style={dedicatedAccountManagerStyle}
            >
              Dedicated account manager
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.icons4} alt="" src="/icons-3.svg" />
            <div
              className={styles.assistanceWithInterview}
              style={assistanceWithInterviewStyle}
            >
              Assistance with interview scheduling
            </div>
          </div>
          <div className={styles.iconsParent1}>
            <img className={styles.icons5} alt="" src="/icons-3.svg" />
            <div className={styles.customReports} style={customReportsStyle}>
              Custom reports
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;

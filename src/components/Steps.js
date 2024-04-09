import { useMemo } from "react";
import styles from "./Steps.module.css";

const Steps = ({
  uploadDocuments,
  shortlistTheMostQualified,
  frame48095633,
  propPadding,
  propPadding1,
  propMinHeight,
}) => {
  const stepsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
      minHeight: propMinHeight,
    };
  }, [propPadding1, propMinHeight]);

  return (
    <div className={styles.steps} style={stepsStyle}>
      <div className={styles.uploadDocuments}>{uploadDocuments}</div>
      <div className={styles.stepsInner} style={frameDivStyle}>
        <div className={styles.shortlistTheMostQualifiedCWrapper}>
          <div className={styles.shortlistTheMost}>
            {shortlistTheMostQualified}
          </div>
        </div>
      </div>
      <div className={styles.wrapperFrame48095633}>
        <img
          className={styles.wrapperFrame48095633Child}
          loading="lazy"
          alt=""
          src={frame48095633}
        />
      </div>
    </div>
  );
};

export default Steps;

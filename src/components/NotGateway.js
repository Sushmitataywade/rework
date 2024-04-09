import { useMemo } from "react";
import styles from "./NotGateway.module.css";

const NotGateway = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propLeft,
  propTop,
  propHeight,
  propLineHeight,
}) => {
  const notGatewayStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const costReduceStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div className={styles.notGateway} style={notGatewayStyle}>
      <img className={styles.eosIconsai} alt="" src={eosIconsai} />
      <div className={styles.costReduce} style={costReduceStyle}>
        <p className={styles.p}>{prop}</p>
        <p className={styles.costReduce1}>{costReduce}</p>
      </div>
      <div className={styles.zeroOverheadIn}>{zeroOverheadInTheHiringPr}</div>
    </div>
  );
};

export default NotGateway;

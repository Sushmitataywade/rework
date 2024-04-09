import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import LoopController from "../components/LoopController";
import FrameComponent3 from "../components/FrameComponent3";
import DataCollector from "../components/DataCollector";
import OutputManager from "../components/OutputManager";
import FrameComponent1 from "../components/FrameComponent1";
import UserInterface from "../components/UserInterface";
import SignalSplitter from "../components/SignalSplitter";
import FrameComponent from "../components/FrameComponent";
import styles from "./ForEmployers.module.css";

const ForEmployers = () => {
  return (
    <div className={styles.forEmployers}>
      <section className={styles.conditionalBranch}>
        <FrameComponent5 />
        <FrameComponent4 />
      </section>
      <LoopController />
      <FrameComponent3 />
      <DataCollector />
      <div className={styles.dataGatherer}>
        <div className={styles.simpleButton}>
          <div className={styles.bookADemo}>Book a Demo</div>
          <div className={styles.arrow}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          </div>
        </div>
      </div>
      <OutputManager />
      <FrameComponent1 />
      <UserInterface />
      <SignalSplitter />
      <FrameComponent />
      <section className={styles.forEmployersInner}>
        <div className={styles.frameParent}>
          <div className={styles.optimizeYourHiringStrategyParent}>
            <div className={styles.optimizeYourHiring}>
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </div>
            <div className={styles.discoverTheStrengths}>
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <button className={styles.ctaButton}>
            <div className={styles.requestYourFree}>
              Request Your Free Hiring Audit
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;

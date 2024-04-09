import styles from "./UserInterface.module.css";

const UserInterface = () => {
  return (
    <section className={styles.userInterface}>
      <div className={styles.databaseUpdater}>
        <div className={styles.dataAggregator}>
          <div className={styles.howReworkAiContainer}>
            <span>{`How Rework AI has been a good `}</span>
            <span className={styles.hiringPlatformFor}>
              Hiring platform for Companies
            </span>
          </div>
        </div>
        <div className={styles.robotController}>
          <div className={styles.languageAnalyzer}>
            <div className={styles.networkMonitor}>
              <div className={styles.dataArchiverWrapper}>
                <b className={styles.dataArchiver}>80%</b>
              </div>
              <div className={styles.reductionInYour}>
                Reduction in your recruitment TAT with the access to a wider
                talent pool on the platform
              </div>
            </div>
            <div className={styles.networkMonitor1} />
            <div className={styles.networkMonitor2}>
              <div className={styles.wrapper}>
                <b className={styles.b}>50%</b>
              </div>
              <div className={styles.streamlineYourBudgeting}>
                Streamline your budgeting and save money while finding the top
                candidates
              </div>
            </div>
            <div className={styles.networkMonitor3} />
          </div>
        </div>
        <div className={styles.dataValidator}>
          <div className={styles.databaseCreator}>
            <div className={styles.kWrapper}>
              <b className={styles.k}>10k</b>
            </div>
            <div className={styles.certifiedSourcingPartners}>
              Certified sourcing partners’ expertise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;

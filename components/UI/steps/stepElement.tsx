import shapeStyles from "../../../styles/components/shapes.module.css";
import VerticalBar from "../../shapes/verticalBar";
import OnScrollIntoView from "../../animations/onScrollIntoView";
import styles from "../../../styles/components/steps.module.css";
import React, { FunctionComponent } from "react";

type StepElementProps = {
  index: number;
  step: Step;
  subTitleBefore?: boolean;
  steps: Step[];
};

const StepElement: FunctionComponent<StepElementProps> = ({
  index,
  step,
  subTitleBefore = false,
  steps,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.barsContainer}>
        <img className={styles.icon} src={step.icon} />
        {index !== steps.length - 1 && (
          <div className={styles.verticalBarContainer}>
            <VerticalBar />
          </div>
        )}
      </div>
      <OnScrollIntoView animation="slideInFromTop">
        <div key={"step_card_" + index} className={styles.card}>
          <div className={(subTitleBefore && styles.subTitleBefore) || ""}>
            {[
              <h1 key={`step_${index}_title`} className={styles.title}>
                {step.title}
              </h1>,
              <h2 key={`step_${index}_subtitle`} className={styles.subtitle}>
                {step.subtitle}
              </h2>,
            ].sort(() => (subTitleBefore ? -1 : 1))}
            <p className={styles.description}>{step.description}</p>
          </div>
          <div className={styles.overlay}>
            {step.overlay ? step.overlay : null}
          </div>
          <div>
            <img className={styles.banner} src={step.banner} />
          </div>
        </div>
      </OnScrollIntoView>
    </div>
  );
};

export default StepElement;
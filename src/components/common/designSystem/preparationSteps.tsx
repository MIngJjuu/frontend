import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./designSystem.module.css";

export type preparationStep = {
  id: string;
  label: string;
  caption: string;
  status: "complete" | "current" | "upcoming";
  iconSrc: string;
  href?: string;
};

export function PreparationSteps({ steps }: { steps: readonly preparationStep[] }) {
  const currentIndex = steps.findIndex((step) => step.status === "current");
  const completeIndex = steps.findLastIndex((step) => step.status === "complete");
  const progressIndex = currentIndex >= 0 ? currentIndex : completeIndex;

  return (
    <ol
      className={styles.steps}
      aria-label="결혼 준비 단계"
      style={{
        "--stepCount": Math.max(steps.length, 1),
        "--stepProgress": Math.max(progressIndex, 0),
      } as CSSProperties}
    >
      {steps.map((step) => {
        const content = <>
          <span className={`${styles.stepCircle} ${styles[step.status]}`}>
            <Image src={step.iconSrc} alt="" width={22} height={22} unoptimized />
          </span>
          <span className={styles.stepLabel}>{step.label}</span>
          <span className={styles.stepCaption}>{step.caption}</span>
        </>;

        return (
          <li key={step.id} className={styles.step} data-status={step.status} aria-current={step.status === "current" ? "step" : undefined}>
            {step.href ? <a className={styles.stepContent} href={step.href}>{content}</a> : <div className={styles.stepContent}>{content}</div>}
          </li>
        );
      })}
    </ol>
  );
}

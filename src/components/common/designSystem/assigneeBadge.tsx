import styles from "./designSystem.module.css";

export type assignee = "together" | "me" | "partner";

const assigneeLabels: Record<assignee, string> = {
  together: "함께",
  me: "나",
  partner: "짝꿍",
};

export function AssigneeBadge({ value }: { value: assignee }) {
  return <span className={`${styles.badge} ${styles[value]}`}>{assigneeLabels[value]}</span>;
}

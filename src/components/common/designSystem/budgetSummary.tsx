import { colors, type colorName } from "@/src/constants/designSystem/colors";
import styles from "./designSystem.module.css";

export type budgetItem = {
  id: string;
  label: string;
  amount: string;
  percentage: number;
  color: colorName;
};

export function BudgetSummary({ total, items }: { total: string; items: readonly budgetItem[] }) {
  return (
    <div className={styles.budgetSummary}>
      <div className={styles.budgetTotal}>
        <span className="tCaption text-text2">총 예산</span>
        <span className={styles.totalAmount}>{total}</span>
      </div>
      <dl className={styles.budgetItems}>
        {items.map((item) => (
          <div className={styles.budgetItem} key={item.id}>
            <dt><span className={styles.budgetDot} style={{ background: colors[item.color] }} />{item.label}</dt>
            <dd className={styles.budgetAmount}>{item.amount}</dd>
            <dd className={styles.budgetPercentage}>{item.percentage}%</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

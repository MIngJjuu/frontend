import type { ComponentPropsWithoutRef } from "react";
import styles from "./designSystem.module.css";

export function Panel({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`${styles.panel} ${className ?? ""}`} {...props} />;
}

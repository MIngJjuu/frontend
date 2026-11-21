"use client";

import { AssigneeBadge, type assignee } from "./assigneeBadge";
import styles from "./designSystem.module.css";

export type checklistTask = {
  id: string;
  label: string;
  checked: boolean;
  assignee: assignee;
  disabled?: boolean;
};

type taskChecklistProps = {
  tasks: readonly checklistTask[];
  onCheckedChange: (taskId: string, checked: boolean) => void;
};

export function TaskChecklist({ tasks, onCheckedChange }: taskChecklistProps) {
  return (
    <ul className={styles.taskList} aria-label="준비 할 일">
      {tasks.map((task) => (
        <li key={task.id} className={styles.task}>
          <label className={styles.taskLabel}>
            <input
              type="checkbox"
              checked={task.checked}
              disabled={task.disabled}
              onChange={(event) => onCheckedChange(task.id, event.target.checked)}
            />
            <span className={styles.taskText}>{task.label}</span>
          </label>
          <AssigneeBadge value={task.assignee} />
        </li>
      ))}
    </ul>
  );
}

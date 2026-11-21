"use client";

import { useState } from "react";
import { Panel } from "@/src/components/common/designSystem/panel";
import { PreparationSteps, type preparationStep } from "@/src/components/common/designSystem/preparationSteps";
import { BudgetSummary, type budgetItem } from "@/src/components/common/designSystem/budgetSummary";
import { TaskChecklist, type checklistTask } from "@/src/components/common/designSystem/taskChecklist";
import styles from "./designSystem.module.css";

// Figma 677:20684의 대조용 데이터. 실제 API 응답이나 저장된 사용자 상태가 아니다.
const exampleSteps: readonly preparationStep[] = [
  { id: "budget", label: "예산, 상견례", caption: "완료", status: "complete", iconSrc: "/icons/dashboard/completedCheck.svg" },
  { id: "venue", label: "예식장 계약", caption: "지금 할 일", status: "current", iconSrc: "/icons/dashboard/currentBuilding.svg" },
  { id: "styling", label: "스드메 계약", caption: "D-240~180", status: "upcoming", iconSrc: "/icons/dashboard/upcomingDress.svg" },
  { id: "photography", label: "촬영, 신혼여행", caption: "D-180~120", status: "upcoming", iconSrc: "/icons/dashboard/upcomingCamera.svg" },
  { id: "invitation", label: "청첩장, 하객", caption: "D-120~30", status: "upcoming", iconSrc: "/icons/dashboard/upcomingMail.svg" },
  { id: "finalCheck", label: "최종 점검", caption: "D-30~0", status: "upcoming", iconSrc: "/icons/dashboard/upcomingSparkle.svg" },
];

const exampleBudget: readonly budgetItem[] = [
  { id: "venue", label: "예식장", amount: "1,550만", percentage: 52, color: "brand800" },
  { id: "styling", label: "스드메", amount: "600만", percentage: 20, color: "brand500" },
  { id: "other", label: "여유 · 기타", amount: "850만", percentage: 28, color: "brand200" },
];

const exampleTasks: readonly checklistTask[] = [
  { id: "agreeBudget", label: "예산 상한 합의하기", checked: true, assignee: "together" },
  { id: "bookTours", label: "후보 예식장 3곳 투어 예약", checked: false, assignee: "me" },
  { id: "shareVenues", label: "부모님께 후보 공유", checked: false, assignee: "partner" },
];

export function DashboardExample() {
  const [tasks, setTasks] = useState(exampleTasks);

  function handleCheckedChange(taskId: string, checked: boolean) {
    setTasks((previous) => previous.map((task) => task.id === taskId ? { ...task, checked } : task));
  }

  return (
    <>
      <Panel className={styles.stepsPanel}>
        <PreparationSteps steps={exampleSteps} />
      </Panel>
      <div className={styles.dashboardGrid}>
        <Panel><BudgetSummary total="3,000만" items={exampleBudget} /></Panel>
        <Panel><TaskChecklist tasks={tasks} onCheckedChange={handleCheckedChange} /></Panel>
      </div>
    </>
  );
}

import Image from "next/image";
import type { iconName } from "@/src/constants/designSystem/icons";
import styles from "./designSystem.module.css";

type iconProps = {
  name: iconName;
  label?: string;
  className?: string;
};

/** 원본 SVG의 크기와 색상을 보존한다. 아이콘만 있는 버튼에는 label을 지정한다. */
export function Icon({ name, label, className }: iconProps) {
  return (
    <span className={`${styles.iconSlot} ${className ?? ""}`}>
      <Image
        src={`/icons/${name}.svg`}
        alt={label ?? ""}
        width={24}
        height={24}
        unoptimized
      />
    </span>
  );
}

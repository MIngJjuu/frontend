import type { Metadata } from "next";
import localFont from "next/font/local";
import { colors, colorGroups } from "@/src/constants/designSystem/colors";
import { typographyGroups } from "@/src/constants/designSystem/typography";
import { iconNames } from "@/src/constants/designSystem/icons";
import { Icon } from "@/src/components/common/designSystem/icon";
import { DashboardExample } from "./dashboardExample";
import styles from "./designSystem.module.css";

const notoSansKr = localFont({
  src: "../../../public/fonts/notoSansKrHeading.ttf",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "디자인 시스템 | WeDid",
  description: "WeDid 색상, 타이포그래피, 아이콘과 재방문 대시보드의 Figma 대조 페이지",
  robots: { index: false, follow: false },
};

const weightExamples = [
  { weight: 400, label: "Regular 400 · 본문" },
  { weight: 500, label: "Medium 500 · 캡션 · 입력값" },
  { weight: 600, label: "SemiBold 600 · 라벨 · 버튼" },
  { weight: 650, label: "650 · H3 · H4 · 작은 숫자", note: "(Figma 표시: Semi Bold)" },
  { weight: 700, label: "Bold 700 · 제목 · 금액" },
];

const weightLabels: Record<number, string> = {
  400: "Regular 400", 500: "Medium 500", 600: "SemiBold 600",
  650: "650 (Semi Bold)", 700: "Bold 700",
};

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <h1 className={`${styles.foundationsTitle} ${notoSansKr.className}`}>1. 기초</h1>

      <section className={styles.section} aria-labelledby="colorsTitle">
        <h2 className="tH2" id="colorsTitle">색상</h2>
        <div className={styles.colors}>
          {colorGroups.map((group) => (
            <div className={styles.colorGroup} key={group.title}>
              <h3 className="tLabel">{group.title}</h3>
              <div className={styles.colorGrid}>
                {group.tokens.map((token) => (
                  <div className={styles.swatch} key={token.name}>
                    <div className={styles.swatchColor} style={{ background: colors[token.name] }} />
                    <p className={styles.swatchName}>{token.figmaName}</p>
                    <p className={styles.swatchValue}>{colors[token.name]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.typography}`} aria-labelledby="typographyTitle">
        <h2 className="tH2" id="typographyTitle">타이포그래피</h2>
        <div className={styles.fontBanner}><span>프리텐다드</span><span>Pretendard</span></div>
        <div className={styles.fontRules}>
          <div><h3>글꼴</h3><p>Pretendard Variable (가변 글꼴)<br />예비: Apple SD Gothic Neo · Noto Sans KR</p></div>
          <div><h3>숫자</h3><p>금액 · 날짜 · 인원은 고정폭 숫자</p></div>
          <div><h3>자간</h3><p>큰 제목일수록 좁게 (−4.5% ~ 0)<br />본문은 −1% 안팎</p></div>
        </div>
        <h3 className={`${styles.subheading} tH3`}>굵기</h3>
        <div className={styles.weightGrid}>
          {weightExamples.map((example) => (
            <div className={styles.weightCard} key={example.weight}>
              <p className={styles.weightSample} style={{ fontWeight: example.weight }}>가나다 Aa</p>
              <p className={styles.weightLabel}>{example.label}</p>
              {example.note && <p className={styles.weightNote}>{example.note}</p>}
            </div>
          ))}
        </div>

        <div className={styles.typeStyles}>
          <h3 className="tH2">스타일</h3>
          {typographyGroups.map((group) => (
            <div className={styles.typeGroup} key={group.title}>
              <h4 className="tH3">{group.title}</h4>
              <div className={styles.tableScroll}>
                <table className={styles.typeTable}>
                  <caption className="sr-only">{group.title} 타이포그래피 규격</caption>
                  <colgroup><col /><col /><col /><col /><col /><col /><col /></colgroup>
                  <thead><tr>{["명칭", "크기 / 행간", "굵기", "자간", "CSS 클래스", "주요 용도", "예시"].map((label) => <th key={label} scope="col">{label}</th>)}</tr></thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.className}>
                        <th scope="row">{row.name}</th>
                        <td>{row.size}
                          {row.className === "mainHeroTitle" && <small>40~72 (폭 4.4%)</small>}
                          {row.className === "returnHeroTitle" && <small>32~56 (폭 3.2%)</small>}
                        </td>
                        <td>{weightLabels[row.weight]}{row.className === "stepItem" && <><br />(진행 중 650)</>}</td><td>{row.tracking}</td>
                        <td><code>.{row.className}</code></td><td>{row.usage}</td>
                        <td><span className={row.className} data-typography={row.className}>{row.sample}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <h3 className={`${styles.subheading} tH3`}>글자 색</h3>
        <div className={styles.textColors}>
          {[
            ["본문 글자", "text", "text · ink-900"], ["보조 글자", "text2", "text-2 · ink-500"],
            ["3차 글자", "text3", "text-3"], ["강조 글자", "brand600", "brand-600"],
            ["오류 글자", "dangerText", "danger-text"], ["반전 글자", "textInverse", "text-inverse"],
          ].map(([label, name, description]) => (
            <div key={name} className={name === "textInverse" ? styles.inverseColor : ""}>
              <p style={{ color: colors[name as keyof typeof colors] }}>{label}</p>
              <small>{description} {colors[name as keyof typeof colors]}</small>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="iconsTitle">
        <h2 className="tH2" id="iconsTitle">아이콘</h2>
        <div className={styles.iconGrid}>
          {iconNames.map((name) => (
            <div className={styles.iconCard} key={name}>
              <Icon name={name} />
              <span>{name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="dashboardTitle">
        <h2 className="tH2" id="dashboardTitle">재방문 대시보드</h2>
        <div className={styles.dashboard}><DashboardExample /></div>
      </section>
      <p className={styles.exampleNote}>Figma 대조용 예시입니다. 체크 상태는 이 페이지에서만 바뀌며 저장되지 않습니다.</p>
    </main>
  );
}

import type { CSSProperties } from "react";

/** Figma 677:18045. 색상 값의 단일 원본. */
export const colors = {
  "brand50": "#F2F7F4",
  "brand100": "#E6EFEA",
  "brand200": "#CFE3DD",
  "brand300": "#A7C8BC",
  "brand500": "#4E7A6B",
  "brand600": "#41695C",
  "brand700": "#356052",
  "brand800": "#24453B",
  "brand900": "#142B24",
  "ink50": "#F5F7F6",
  "ink100": "#ECEFED",
  "ink200": "#DEE3E0",
  "ink300": "#C4CAC7",
  "ink400": "#8F9894",
  "ink500": "#66716D",
  "ink700": "#3A4642",
  "ink800": "#1F2A26",
  "ink900": "#111A17",
  "canvas": "#FAFAF8",
  "surface": "#FFFFFF",
  "surfaceSunken": "#F4F5F2",
  "champagne": "#F3ECDD",
  "sand50": "#F6F3EE",
  "sand100": "#F3EFE9",
  "sand200": "#EDE7DE",
  "positive": "#2F9E6B",
  "warning": "#E3A33B",
  "warningBg": "#FBF1DD",
  "warningText": "#8A5B0B",
  "warningSoft": "#FCFAF4",
  "warningOnDark": "#F6D38A",
  "danger": "#E05757",
  "dangerBg": "#FDF1F1",
  "dangerText": "#B23B3B",
  "kakao": "#FEE500",
  "kakaoText": "#191600",
  "text": "#111A17",
  "text2": "#66716D",
  "text3": "#6E7874",
  "line": "rgba(17, 26, 23, .08)",
  "line2": "rgba(17, 26, 23, .14)",
  "ring": "rgba(65, 105, 92, .22)",
  "textInverse": "#FFFFFF"
} as const;

export type colorName = keyof typeof colors;

export const colorVariables = Object.fromEntries(
  Object.entries(colors).map(([name, value]) => [`--${name}`, value]),
) as CSSProperties;

export const colorGroups = [
  {
    "title": "Brand",
    "tokens": [
      {
        "name": "brand50",
        "figmaName": "brand-50"
      },
      {
        "name": "brand100",
        "figmaName": "brand-100"
      },
      {
        "name": "brand200",
        "figmaName": "brand-200"
      },
      {
        "name": "brand300",
        "figmaName": "brand-300"
      },
      {
        "name": "brand500",
        "figmaName": "brand-500"
      },
      {
        "name": "brand600",
        "figmaName": "brand-600"
      },
      {
        "name": "brand700",
        "figmaName": "brand-700"
      },
      {
        "name": "brand800",
        "figmaName": "brand-800"
      },
      {
        "name": "brand900",
        "figmaName": "brand-900"
      }
    ]
  },
  {
    "title": "Ink",
    "tokens": [
      {
        "name": "ink50",
        "figmaName": "ink-50"
      },
      {
        "name": "ink100",
        "figmaName": "ink-100"
      },
      {
        "name": "ink200",
        "figmaName": "ink-200"
      },
      {
        "name": "ink300",
        "figmaName": "ink-300"
      },
      {
        "name": "ink400",
        "figmaName": "ink-400"
      },
      {
        "name": "ink500",
        "figmaName": "ink-500"
      },
      {
        "name": "ink700",
        "figmaName": "ink-700"
      },
      {
        "name": "ink800",
        "figmaName": "ink-800"
      },
      {
        "name": "ink900",
        "figmaName": "ink-900"
      }
    ]
  },
  {
    "title": "Surface",
    "tokens": [
      {
        "name": "canvas",
        "figmaName": "canvas"
      },
      {
        "name": "surface",
        "figmaName": "surface"
      },
      {
        "name": "surfaceSunken",
        "figmaName": "surface-sunken"
      },
      {
        "name": "champagne",
        "figmaName": "champagne"
      }
    ]
  },
  {
    "title": "Mood (메인 히어로)",
    "tokens": [
      {
        "name": "sand50",
        "figmaName": "sand-50"
      },
      {
        "name": "sand100",
        "figmaName": "sand-100"
      },
      {
        "name": "sand200",
        "figmaName": "sand-200"
      }
    ]
  },
  {
    "title": "Status",
    "tokens": [
      {
        "name": "positive",
        "figmaName": "positive"
      },
      {
        "name": "warning",
        "figmaName": "warning"
      },
      {
        "name": "warningBg",
        "figmaName": "warning-bg"
      },
      {
        "name": "warningText",
        "figmaName": "warning-text"
      },
      {
        "name": "warningSoft",
        "figmaName": "warning-soft"
      },
      {
        "name": "warningOnDark",
        "figmaName": "warning-on-dark"
      },
      {
        "name": "danger",
        "figmaName": "danger"
      },
      {
        "name": "dangerBg",
        "figmaName": "danger-bg"
      },
      {
        "name": "dangerText",
        "figmaName": "danger-text"
      },
      {
        "name": "kakao",
        "figmaName": "kakao"
      },
      {
        "name": "kakaoText",
        "figmaName": "kakao-text"
      }
    ]
  },
  {
    "title": "Text · Line (semantic)",
    "tokens": [
      {
        "name": "text",
        "figmaName": "text"
      },
      {
        "name": "text2",
        "figmaName": "text-2"
      },
      {
        "name": "text3",
        "figmaName": "text-3"
      },
      {
        "name": "line",
        "figmaName": "line"
      },
      {
        "name": "line2",
        "figmaName": "line-2"
      },
      {
        "name": "ring",
        "figmaName": "ring"
      }
    ]
  }
] as const;

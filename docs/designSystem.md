# 디자인 시스템

`npm run dev` 실행 후 `/designSystem`에서 Figma 기준 색상·타이포그래피·아이콘·재방문 대시보드를 확인한다.

## 원본 디자인

- [기초 제목](https://www.figma.com/design/4uJLQ7PqAXgVzzWLmDRV8g/?node-id=677-21457)
- [색상](https://www.figma.com/design/4uJLQ7PqAXgVzzWLmDRV8g/?node-id=677-18045)
- [타이포그래피](https://www.figma.com/design/4uJLQ7PqAXgVzzWLmDRV8g/?node-id=677-18326)
- [아이콘](https://www.figma.com/design/4uJLQ7PqAXgVzzWLmDRV8g/?node-id=677-18936)
- [재방문 대시보드](https://www.figma.com/design/4uJLQ7PqAXgVzzWLmDRV8g/?node-id=677-20684)

## 토큰 사용

- 색상 값의 원본은 `src/constants/designSystem/colors.ts`다. 루트 레이아웃에서 CSS 변수로 주입하며, 전역 CSS의 Tailwind 테마와 연결한다.
- Figma의 `brand-600`, `text-2`는 코드에서 `brand600`, `text2`로 사용한다. 예: `bg-brand600 text-textInverse`, `border-line`, `var(--brand600)`.
- 타이포그래피 원본은 `src/styles/typography.css`다. Figma 클래스 이름을 camelCase로 바꿨다. 예: `tH1`, `tBody`, `tNumXl`, `tCaption`, `mainHeroTitle`.
- `tH3`, `tH4`, `tNumS`는 가변 굵기 650을 사용한다. 금액용 클래스는 `tabular-nums`가 적용되어 있고, 다른 숫자에는 `tabularNumbers`를 사용한다.
- Pretendard는 공식 저장소의 가변 폰트를 로컬에서 제공한다. Noto Sans KR은 첫 번째 제목에 쓰는 글자만 포함한다. 각 폰트의 라이선스는 `public/fonts`에 보관한다.

```tsx
<h1 className="tH1 text-text">우리 결혼 예상 비용</h1>
<p className="tNumXl text-brand600">1,800만 원</p>
```

## 공통 컴포넌트

`src/components/common/designSystem`에서 필요한 컴포넌트를 직접 가져온다. React 컴포넌트 이름은 JSX에서 인식하도록 PascalCase를 쓰며, 파일·속성·변수·타입 이름은 camelCase를 사용한다.

| 컴포넌트 | 책임 |
| --- | --- |
| `Icon` | Figma 아이콘 45개를 이름으로 선택한다. 장식용이면 label을 생략하고 의미를 전달해야 하면 label을 지정한다. |
| `Panel` | 대시보드의 흰색 배경, 테두리, 22px 모서리, 28px 여백, 그림자를 제공한다. |
| `PreparationSteps` | 완료·진행 중·예정 상태와 연결선을 표시한다. 실제 목적지가 있는 단계에만 href를 전달한다. |
| `BudgetSummary` | 총 예산과 항목별 금액·비율을 표시한다. 금액 계산은 호출하는 기능의 책임이다. |
| `AssigneeBadge` | 함께·나·짝꿍 배지를 표시한다. |
| `TaskChecklist` | 전달받은 체크 상태를 표시하고 변경을 콜백으로 알린다. 저장은 호출하는 기능의 책임이다. |

```tsx
import { Icon } from "@/src/components/common/designSystem/icon";
import { Panel } from "@/src/components/common/designSystem/panel";

<Panel><Icon name="calendar" label="결혼 예정일" /></Panel>
```

아이콘 원본 SVG의 경로·색상·크기는 변경하지 않는다. 기본 아이콘은 24px 원본을 22px 인스턴스 슬롯에 배치하고, 대시보드는 Figma에서 제공한 별도 22px SVG를 사용한다.

## 범위

확인 페이지의 예산과 체크리스트는 Figma 예시 데이터다. 체크 상태는 메모리에서만 변경되며 API, 인증, 저장소와 연결되어 있지 않다. 진행 단계 링크는 실제 기능의 라우트가 정해진 뒤 연결한다.

현재 루트(`/`)에는 기존 Next.js 초기 화면이 남아 있다. 이번 작업은 디자인 시스템 기반과 제공된 대시보드 예시까지만 포함한다.

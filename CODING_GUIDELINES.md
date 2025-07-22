# 코드 작성 규칙 및 디렉토리 구조 컨벤션

본 문서는 솔로 프로젝트이지만, 프로젝트의 일관성 있는 코드 작성과 효율적인 협업을 연습하기 정한 규칙 및 디렉토리 구조 컨벤션을 정리한 것입니다.

---

## 1. 폴더 이름

- **폴더 이름은 케밥 케이스 kebab-case**를 사용합니다.
  - 예시: `sign-in`, `sign-up`, `my-page`

## 2. 파일 이름

- **페이지 컴포넌트는 페이지 별 폴더를 만들고, index.tsx를 생성합니다.**
  - 예시: `/sign-in/index.tsx`, `/sign-up/index.tsx`

- **컴포넌트의 파일명은 함수명과 동일하게 파스칼 케이스 PascalCase**를 사용합니다.
  - 예시: `SignIn`, `SignUp`, `MyPage`

- **그 외의 .ts 파일들은 소문자로 하되 동일하게 PascalCase**를 사용합니다.
  - 예시: `useOpenModal.ts`, `formatStringToNumber.ts`, `getTime.ts`

## 2. 타입 정의 위치

- 단일 파일 내부에서만 사용하는 타입은 해당 컴포넌트 파일 내에서 정의합니다.
- **여러 곳에서 재사용되는 타입**은 `types/` 폴더(필요시 생성) 또는 관련 폴더(`components/teams/UpsertPageBody/types.ts` 등)로 분리하여 import합니다.
  - 컴포넌트를 내보내는 파일에서는 타입이나 상수를 내보내서는 안됩니다. (ref: eslint `react-refresh/only-export-components` 룰)

## 3. 정해진 규칙 보관 위치

- 추가 논의 및 변경 사항이 생기면 점진적으로 추가할 예정입니다.

---

## API 호출 컨벤션

- **fetch 호출은 `/src/api` 디렉토리 내에서만 허용됩니다.**
- 컴포넌트, 훅, 페이지 등에서는 직접 fetch를 호출하지 말고 API 모듈을 사용합니다.
- 새로운 API 엔드포인트가 필요한 경우 해당하는 API 파일에 함수를 추가하세요.

**예시:**

```typescript
// ❌ 잘못된 방법 - 컴포넌트에서 직접 fetch 호출
const handleSubmit = () => {
  fetch("/api/v1/challenges/submit", {
    method: "POST",
    body: formData,
  });
};

// ✅ 올바른 방법 - API 모듈 사용
import { challengesApi } from "@/api/challenges";

const handleSubmit = () => {
  challengesApi.submitChallenge(formData);
};
```

**API 파일 구조:**

- `/src/api/challenges.ts` - 챌린지 관련 API
- `/src/api/users.ts` - 사용자 관련 API

module.exports = {
  semi: false, // 세미콜론 제거
  trailingComma: 'es5', // ES5 호환 후행 쉼표 (객체, 배열 마지막에 쉼표 추가)
  singleQuote: true, // 작은따옴표 사용
  printWidth: 80, // 한 줄 최대 길이 (80자 초과시 줄바꿈)
  tabWidth: 2, // 들여쓰기 크기 (2칸 스페이스)
  useTabs: false, // 탭 대신 스페이스 사용
  bracketSpacing: true, // 객체 괄호 안 공백 (예: { name: 'kim' })
  bracketSameLine: false, // JSX 닫는 괄호 새 줄에 배치
  arrowParens: 'always', // 화살표 함수 매개변수 괄호 생략 불가
  endOfLine: 'lf', // 줄바꿈 문자
  jsxSingleQuote: true, // JSX에서 작은따옴표 사용 (코드 일관성 유지 용)
  quoteProps: 'as-needed', // 객체 key name 따옴표 (필요할 때만)
  proseWrap: 'preserve', // 마크다운 텍스트 줄바꿈 보존
}

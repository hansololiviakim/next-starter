import { BookIcon, CodeBlockIcon, AlgorithmIcon } from '@vapor-ui/icons'

export default function Home() {
  return (
    <div className='min-h-screen bg-background-normal p-vapor-400'>
      <div className='max-w-4xl mx-auto'>
        {/* 헤더 */}
        <header className='text-center mb-vapor-600'>
          <h1 className='text-vapor-600 font-vapor-sans font-vapor-700 mb-vapor-200'>
            Tailwind CSS + Vapor UI 통합 예시
          </h1>
          <p className='text-vapor-200 font-vapor-sans text-vapor-200'>
            구름의 디자인 시스템과 Tailwind CSS를 함께 사용해보세요
          </p>
        </header>

        {/* 카드 그리드 */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-vapor-400'>
          {/* Vapor UI 아이콘 + Tailwind CSS */}
          <div className='bg-background-normal border border-border-normal rounded-vapor-300 p-vapor-400'>
            <div className='flex items-center gap-vapor-200 mb-vapor-300'>
              <BookIcon className='text-primary-500 w-6 h-6' />
              <h2 className='text-vapor-300 font-vapor-sans font-vapor-500'>
                Vapor UI 아이콘
              </h2>
            </div>
            <p className='text-vapor-075 font-vapor-sans text-foreground-secondary'>
              Vapor UI 아이콘과 Tailwind CSS 클래스를 함께 사용
            </p>
          </div>

          {/* Tailwind CSS + Vapor 색상 */}
          <div className='bg-background-primary rounded-vapor-300 p-vapor-400 border border-border-primary'>
            <div className='flex items-center gap-vapor-200 mb-vapor-300'>
              <CodeBlockIcon className='text-foreground-accent w-6 h-6' />
              <h2 className='text-vapor-300 font-vapor-sans font-vapor-500 text-foreground-accent'>
                Tailwind + Vapor 색상
              </h2>
            </div>
            <p className='text-vapor-075 font-vapor-sans text-foreground-accent'>
              Tailwind CSS 클래스로 Vapor UI 색상 토큰 사용
            </p>
          </div>

          {/* Vapor 아이콘 + Tailwind 스타일링 */}
          <div className='bg-background-success rounded-vapor-300 p-vapor-400 border border-border-success'>
            <div className='flex items-center gap-vapor-200 mb-vapor-300'>
              <AlgorithmIcon className='text-foreground-accent w-6 h-6' />
              <h2 className='text-vapor-300 font-vapor-sans font-vapor-500 text-foreground-accent'>
                Vapor 아이콘
              </h2>
            </div>
            <p className='text-vapor-075 font-vapor-sans text-foreground-accent'>
              Vapor UI 아이콘 라이브러리 활용
            </p>
          </div>
        </div>

        {/* 색상 팔레트 예시 */}
        <div className='mt-vapor-600'>
          <h3 className='text-vapor-400 font-vapor-sans font-vapor-500 mb-vapor-300'>
            Vapor 색상 팔레트
          </h3>
          <div className='grid grid-cols-5 gap-vapor-200'>
            <div className='bg-primary-500 h-20 rounded-vapor-200 flex items-center justify-center'>
              <span className='text-vapor-075 font-vapor-sans text-foreground-accent font-vapor-500'>
                Primary
              </span>
            </div>
            <div className='bg-success-500 h-20 rounded-vapor-200 flex items-center justify-center'>
              <span className='text-vapor-075 font-vapor-sans text-foreground-accent font-vapor-500'>
                Success
              </span>
            </div>
            <div className='bg-warning-500 h-20 rounded-vapor-200 flex items-center justify-center'>
              <span className='text-vapor-075 font-vapor-sans text-foreground-accent font-vapor-500'>
                Warning
              </span>
            </div>
            <div className='bg-danger-500 h-20 rounded-vapor-200 flex items-center justify-center'>
              <span className='text-vapor-075 font-vapor-sans text-foreground-accent font-vapor-500'>
                Danger
              </span>
            </div>
            <div className='bg-foreground-hint h-20 rounded-vapor-200 flex items-center justify-center'>
              <span className='text-vapor-075 font-vapor-sans text-foreground-accent font-vapor-500'>
                Hint
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

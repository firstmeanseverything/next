import FMEMark from '../../svgs/fme-mark.svg'

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <FMEMark className="h-12 w-auto" />
          {children}
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/auth-bg.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default AuthLayout

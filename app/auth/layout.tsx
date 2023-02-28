type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="container flex flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-md rounded-3xl bg-black py-4 px-6 shadow-lg dark:bg-neutral-800">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout

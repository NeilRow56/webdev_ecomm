const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-4 flex h-screen w-full justify-center text-center  sm:mt-8 lg:mt-12">
      {children}
    </div>
  )
}

export default AuthLayout

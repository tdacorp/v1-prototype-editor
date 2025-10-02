import { Suspense } from "react"
import AuthCard from "./_components/auth-card"

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Suspense>
        <AuthCard />
      </Suspense>
    </div>
  )
}

export default AuthPage

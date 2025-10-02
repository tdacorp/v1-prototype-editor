import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-96">
      <h1 className="text-3xl font-semibold">404 - Not Found</h1>
      <p>Hey! You seem to be a little lost...</p>
      <Button asChild>
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage

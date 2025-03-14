import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md bg-background/50 backdrop-blur-sm shadow-lg border-0">
        <CardContent className="p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <Image src="/1.png" alt="Finexa Logo" width={100} height={100} className="rounded-full" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">Register for Finexa</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your Email" className="mt-1" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
                Password
              </label>
              <Input id="password" type="password" placeholder="Your Password" className="mt-1" />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
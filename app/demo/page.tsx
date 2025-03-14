import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LiveDemoPage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center space-y-8 pt-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Live Demo
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Experience the features of Finexa in real-time. Fill out the form below to request a live demo.
        </p>
      </section>

      {/* Live Demo Request Form */}
      <section className="container">
        <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-center mb-6">Request a Live Demo</h2>
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
                <label htmlFor="company" className="block text-sm font-medium text-muted-foreground">
                  Company
                </label>
                <Input id="company" type="text" placeholder="Your Company" className="mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <Textarea id="message" placeholder="Your Message" className="mt-1" />
              </div>
              <Button type="submit" className="w-full">
                Request Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="bg-background/80 backdrop-blur-sm py-12">
        <div className="container mx-auto text-center space-y-6">
          <div className="flex justify-center space-x-6">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              About Us
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Contact
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Finexa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
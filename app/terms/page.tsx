import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center space-y-8 pt-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Terms of Service
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Please read these terms of service carefully before using our website.
        </p>
      </section>

      {/* Terms of Service Content */}
      <section className="container">
        <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using our services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Provision of Services</h2>
              <p className="text-muted-foreground">
                We are constantly innovating in order to provide the best possible experience for our users. You acknowledge and agree that the form and nature of the services which we provide may change from time to time without prior notice to you.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
              <p className="text-muted-foreground">
                You agree to use the services only for purposes that are permitted by (a) the terms and (b) any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Account Security</h2>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate your access to the website, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. All provisions of this agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these terms, please contact us at support@finexa.com.
              </p>
            </div>
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
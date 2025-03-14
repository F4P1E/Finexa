import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center space-y-8 pt-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Privacy Policy
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
        </p>
      </section>

      {/* Privacy Policy Content */}
      <section className="container">
        <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information that you provide to us directly, such as when you create an account, update your profile, or use our services. This may include your name, email address, phone number, and payment information.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use your information to provide, maintain, and improve our services. This includes using your information to process transactions, send you updates and notifications, and respond to your inquiries.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
              <p className="text-muted-foreground">
                We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. We may share your information with service providers who perform services on our behalf.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
              <p className="text-muted-foreground">
                You have the right to access, update, and delete your personal information. You can do this by logging into your account or contacting us directly. You may also opt out of receiving promotional communications from us by following the instructions in those communications.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy, please contact us at support@finexa.com.
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
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, LineChart, Wallet, PiggyBank, ArrowUpRight, StarIcon, CheckCircle2, Users2, Globe, MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center space-y-8 pt-8">
        <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Financial Management Made Simple
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Track Your Money <br />
          <span className="text-primary">With Confidence</span>
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          A modern approach to managing your personal finances. Track expenses, set budgets, 
          and reach your financial goals.
        </p>
        <div className="flex gap-4 pt-4">
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="h-12 px-8 font-medium"
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/demo">
            <Button 
              size="lg" 
              className="h-12 px-8 font-medium bg-white text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Live Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-3">Everything you need</h2>
              <p className="text-muted-foreground">Powerful features to help you manage every aspect of your finances</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureCard
                icon={<Wallet className="h-6 w-6" />}
                title="Expense Tracking"
                description="Monitor your spending patterns with detailed categorization and insights."
              />
              <FeatureCard
                icon={<LineChart className="h-6 w-6" />}
                title="Budget Management"
                description="Create and manage budgets that help you reach your financial goals."
              />
              <FeatureCard
                icon={<PiggyBank className="h-6 w-6" />}
                title="Savings Goals"
                description="Set and track savings goals with visual progress indicators."
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="container">
        <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-3">Trusted by Thousands</h2>
              <p className="text-muted-foreground">Join our growing community of smart financial planners</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                icon={<Users2 className="h-5 w-5" />}
                label="Active Users"
                value="10k+"
                trend="+25%"
                trendLabel="vs last month"
              />
              <StatCard 
                icon={<LineChart className="h-5 w-5" />}
                label="Transactions"
                value="1M+"
                trend="+12%"
                trendLabel="processed daily"
              />
              <StatCard 
                icon={<PiggyBank className="h-5 w-5" />}
                label="Money Saved"
                value="$2M+"
                trend="+30%"
                trendLabel="this quarter"
              />
              <StatCard 
                icon={<Globe className="h-5 w-5" />}
                label="Countries"
                value="50+"
                trend="Global"
                trendLabel="coverage"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Loved by Users</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            See what our community has to say about their experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="This app completely changed how I manage my finances. The insights are incredible!"
            author="Anna Johnson"
            role="Small Business Owner"
            image="/testimonials/anna.jpg"
            rating={5}
          />
          <TestimonialCard
            quote="The budget tracking features are intuitive and have helped me save more than ever."
            author="Michael Chen"
            role="Software Engineer"
            image="/testimonials/michael.jpg"
            rating={5}
          />
          <TestimonialCard
            quote="I love how easy it is to track my expenses and set savings goals."
            author="Emma Davis"
            role="Marketing Manager"
            image="/testimonials/emma.jpg"
            rating={5}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-3">Simple pricing</h2>
          <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PriceCard
            title="Free"
            price="$0"
            description="Perfect for getting started"
            features={[
              "Basic expense tracking",
              "Monthly budgeting",
              "Basic reports",
              "Mobile app access"
            ]}
            buttonText="Get Started"
            buttonVariant="default"
          />
          <PriceCard
            title="Pro"
            price="$9.99"
            period="/month"
            description="For serious finance management"
            features={[
              "Everything in Free",
              "Advanced analytics",
              "Custom categories",
              "Bill reminders",
              "Priority support"
            ]}
            buttonText="Start Pro Trial"
            buttonVariant="default"
            popular
          />
          <PriceCard
            title="Business"
            price="$19.99"
            period="/month"
            description="For teams and businesses"
            features={[
              "Everything in Pro",
              "Team collaboration",
              "Receipt scanning",
              "API access",
              "Custom reports",
              "Dedicated support"
            ]}
            buttonText="Contact Sales"
            buttonVariant="default"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Find answers to common questions about our service
          </p>
        </div>
        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my financial data secure?</AccordionTrigger>
              <AccordionContent>
                Yes! We use bank-level 256-bit encryption to protect your data. We never store your bank credentials, 
                and all information is encrypted both in transit and at rest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I connect multiple bank accounts?</AccordionTrigger>
              <AccordionContent>
                Absolutely! You can connect multiple bank accounts, credit cards, and investment accounts 
                to get a complete view of your finances in one place.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
              <AccordionContent>
                Yes! Our mobile app is available for both iOS and Android devices, allowing you to 
                track your finances on the go.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I export my financial data?</AccordionTrigger>
              <AccordionContent>
                Yes! You can export your data in various formats including PDF, CSV, and Excel. 
                Perfect for tax preparation or personal record-keeping.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Integration Partners - Vietnamese Banks */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Works With Vietnamese Banks & Online Wallets</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Securely connect with major Vietnamese banking institutions and online wallets
          </p>
        </div>
        <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {[
                {
                  name: "Vietcombank",
                  logo: "/banks/Vietcombank.svg",
                },
                {
                  name: "VPBank",
                  logo: "/banks/VPBank.svg",
                },
                {
                  name: "BIDV",
                  logo: "/banks/BIDV.svg",
                },
                {
                  name: "Techcombank",
                  logo: "/banks/techcombank.svg",
                },
                {
                  name: "TPBank",
                  logo: "/banks/TPBank.svg",
                },
                {
                  name: "ACB",
                  logo: "/banks/ACB.svg",
                },
                {
                  name: "MB",
                  logo: "/banks/MB.svg",
                },
                {
                  name: "Momo",
                  logo: "/banks/momosquare.svg",
                },
                {
                  name: "ZaloPay",
                  logo: "/banks/zalopay.svg",
                },
                {
                  name: "ViettelPay",
                  logo: "/banks/viettelpay.svg",
                }
              ].map((bank) => (
                <div 
                  key={bank.name} 
                  className="group relative flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-accent/50 transition-all duration-200"
                >
                  <div className="relative h-16 w-40">
                    <Image
                      src={bank.logo}
                      alt={`${bank.name} logo`}
                      fill
                      className="object-contain transition-all duration-200"
                      priority
                    />
                  </div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {bank.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card className="border-0 shadow-xl bg-background/60 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="text-muted-foreground text-lg">
                Join thousands of users who are already taking control of their finances and managing their money smarter. 
                Start your financial journey today and gain insights, track expenses, and achieve your financial goals with ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="shadow-lg hover:shadow-xl transition-all duration-200 text-base font-semibold"
                  >
                    Get Started Free
                  </Button>
                  <Button 
                    size="lg" 
                    className="shadow-lg hover:shadow-xl transition-all duration-200 text-base font-semibold"
                  >
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/20 backdrop-blur-sm rounded-2xl" />
                <div className="relative p-6">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-background/80 shadow-2xl flex items-center justify-center">
                    <Image
                      src="/1.png" // Make sure you have this image
                      alt="Finexa Logo"
                      width={400}
                      height={400}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators - Updated */}
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { 
                    stat: "10K+", 
                    label: "Active Users",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  { 
                    stat: "99.9%", 
                    label: "Uptime",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  { 
                    stat: "24/7", 
                    label: "Support",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  { 
                    stat: "4.9/5", 
                    label: "User Rating",
                    gradient: "from-blue-500 to-blue-600"
                  },
                ].map((item) => (
                  <Card 
                    key={item.label} 
                    className="border-0 shadow-md hover:shadow-lg transition-all duration-200 bg-background/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-6 text-center space-y-2">
                      <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                        {item.stat}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
            <Link href="/privacypolicy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
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

      { /* Chat Support Icon */}
      <div className="fixed bottom-8 right-8">
        <Button
         size="icon"
         className="bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
          <MessageCircle className="h-6 w-6" />
         </Button>  
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 border-0">
      <CardContent className="p-6">
        <div className="rounded-xl bg-primary/5 p-3 w-fit">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="mt-5 font-medium text-lg">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

function StatCard({ 
  icon, 
  label, 
  value, 
  trend, 
  trendLabel 
}: { 
  icon: React.ReactNode
  label: string
  value: string
  trend: string
  trendLabel: string
}) {
  return (
    <Card className="border-0 bg-card hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        {/* Icon and Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <p className="font-medium text-sm text-muted-foreground">
            {label}
          </p>
        </div>
        
        {/* Value */}
        <div className="mb-2">
          <div className="text-3xl font-bold">
            {value}
          </div>
        </div>

        {/* Trend */}
        <div className="flex items-center gap-2">
          <div className={cn(
            "text-sm font-medium",
            trend.includes('+') ? 'text-green-600 dark:text-green-500' : 'text-primary'
          )}>
            {trend}
          </div>
          <div className="text-sm text-muted-foreground">
            {trendLabel}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  image,
  rating
}: {
  quote: string
  author: string
  role: string
  image: string
  rating: number
}) {
  return (
    <Card className="bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border-0">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-lg">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-4 pt-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={`${author} photo`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PriceCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  popular = false
}: {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}) {
  return (
    <Card className={cn(
      "relative bg-background/50 backdrop-blur-sm transition-all duration-200 border-0",
      popular 
        ? "shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:translate-y-[-4px]" 
        : "shadow-md hover:shadow-lg hover:translate-y-[-4px]"
    )}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 rounded-full">
            Most Popular
          </Badge>
        </div>
      )}
      <CardContent className="p-8 flex flex-col justify-between h-full">
        <div>
          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">{price}</span>
              <span className="text-muted-foreground">{period}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          </div>
          <div className="space-y-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <Button 
          className="w-full font-medium text-sm h-11 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
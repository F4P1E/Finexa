import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center space-y-8 pt-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          About Us
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Learn more about our mission, vision, and the team behind Finexa.
        </p>
      </section>

      {/* Mission Section */}
      <section className="container py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/mission/mission.png" // Replace with your mission image
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center md:text-left mb-12">
                  <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At Finexa, we are committed to revolutionizing financial management with innovative solutions that empower individuals and businesses. 
                    Our mission is to simplify finance through cutting-edge technology, ensuring smarter decisions and greater financial well-being. 
                    With a clear vision of a seamless and intelligent financial future, our dedicated team of experts combines industry knowledge and innovation to drive excellence. 
                    Join us on our journey to reshape the way you manage your finances.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center md:text-left mb-12">
                  <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We envision a world where everyone has the knowledge and tools to achieve financial freedom and security.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/vision/vision.png" // Replace with your vision image
              alt="Our Vision"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Our dedicated team of professionals is here to help you achieve your financial goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dong Duong",
              role: "CEO",
              image: "/team/dong.png",
            },
            {
              name: "Minh Thu",
              role: "CFO",
              image: "/team/minhthu.png",
            },
            {
              name: "Michael Brown",
              role: "CTO",
              image: "/team/michael.png",
            },
          ].map((member) => (
            <Card key={member.name} className="bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} photo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
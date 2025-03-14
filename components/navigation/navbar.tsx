import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Finexa<span className="text-primary"></span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <Link 
              href="/dashboard" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link 
              href="/transactions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Transactions
            </Link>
            <Link 
              href="/budget"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Budget
            </Link>
            <Link 
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About Us
            </Link>
          </div>
          <ThemeToggle />
          <Link href="/login">
            <Button className="text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
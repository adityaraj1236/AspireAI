import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCapIcon,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b border-gray-300 backdrop-blur-md z-50 bg-white/60">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold flex items-center">
            Aspire<span className="text-blue-500">AI</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <DropdownMenu suppressHydrationWarning>
              <DropdownMenuTrigger suppressHydrationWarning>
                <Button>
                  <StarsIcon className="h-5 w-5" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/resume"} className="flex">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/ai-cover-letter"} className="flex">
                    <PenBox className="mr-2 h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/interview-prep"} className="flex">
                    <GraduationCapIcon className="mr-2 h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium">
                <LayoutDashboard className="h-5 w-5" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                  userButtonAvatarBox: "h-10 w-10",
                  userButtonBox: "h-10 w-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;

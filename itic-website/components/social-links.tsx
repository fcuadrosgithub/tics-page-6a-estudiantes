import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button
        variant="outline"
        size="icon"
        asChild
        className="rounded-full border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 group"
      >
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
        </Link>
      </Button>
      <Button
        variant="outline"
        size="icon"
        asChild
        className="rounded-full border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 group"
      >
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
        </Link>
      </Button>
      <Button
        variant="outline"
        size="icon"
        asChild
        className="rounded-full border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 group"
      >
        <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
        </Link>
      </Button>
      <Button
        variant="outline"
        size="icon"
        asChild
        className="rounded-full border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 group"
      >
        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
        </Link>
      </Button>
    </div>
  )
}

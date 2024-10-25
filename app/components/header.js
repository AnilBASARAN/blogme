import Counter from "./counter";
import Link from 'next/link'
import { inter } from "app/fonts/myFonts";

export default function Header() {
  return (
    <header className={`p-20 border border-yellow-400 ${inter.className}`}>
      <ul className="flex space-x-4" >
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/projects">Projects</Link></li>
      </ul>
      <Counter />
    </header>
  )
}
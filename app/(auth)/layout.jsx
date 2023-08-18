import Link from "next/link"

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
       <Link href="/"><h1>Helpdesk</h1></Link>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}
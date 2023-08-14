import Link  from 'next/link';
import Image from 'next/image'
import Logo from './AR2.svg';


export default function Navbar() {
  return (
    <nav>
      <Image src={Logo}
      alt="Logo"
      width={50}
      quality={100}
      />
    <h1>Help desk</h1>
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">Tickets</Link>
  </nav>
  )
}

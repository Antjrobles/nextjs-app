import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/AR2.svg';

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt='Logo' width={50} quality={100} />

      <h1>Help desk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/tickets/create'>Add Ticket</Link>

      <Link href='/login'>Login</Link>
      <Link href='/signup'>Signup</Link>
    </nav>
  );
}

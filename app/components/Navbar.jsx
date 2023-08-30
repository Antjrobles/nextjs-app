import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/AR2.svg';
import LogoutButton from './LogoutButton';


export default function Navbar({ user }) {
  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-3 mr-auto'>
        <Image src={Logo} alt='Logo' width={50} quality={100} />

        <h1>Helpdesk</h1>
        <Link href='/'>Dashboard</Link>
        <Link href='/tickets'>Tickets</Link>
        <Link href='/tickets/create'>Add Ticket</Link>
      </div>
         {user && <span className="text-primary font-bold text-xl">Hello {user.email}</span>}
         <LogoutButton />
      {/* <div className="flex items-center gap-3">
      <Link href='/signup'>Signup</Link>
      <Link href='/login'>Login</Link>
      </div> */}
    </nav>
  );
}

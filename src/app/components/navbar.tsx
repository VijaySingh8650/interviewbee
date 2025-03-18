import { signOut } from "next-auth/react";
import Image from "next/image";



const NavbarComponent:React.FC = () => {
  return (
    <div className="flex justify-between items-center  bg-white p-2">
       <Image src="/images/logo.svg" alt="Logo" width={200} height={200} priority/>
       <button onClick={() => signOut({ callbackUrl: "/" })} className="bg-primary p-2 rounded-md subparagraph-fontSize">Logout</button>
    </div>
  )
}

export default NavbarComponent

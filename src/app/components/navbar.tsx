import { signOut } from "next-auth/react";



const NavbarComponent:React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white p-2">
       <img src="/images/logo.svg" alt="Logo" width={200} height={200} />
       <button onClick={() => signOut({ callbackUrl: "/" })} className="bg-primary p-2 rounded-md subparagraph-fontSize">Logout</button>
    </div>
  )
}

export default NavbarComponent

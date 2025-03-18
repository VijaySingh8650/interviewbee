"use client"; 

import { useEffect, useState } from "react";
import { useSession} from "next-auth/react";
import LoginComponent from "./components/login";
import MeetComponent from "./components/meet";

export default function UserInfo() {

  const [client, setClient] = useState(false);


  const { data: session } = useSession();
  

  useEffect(() => {
    setClient(true); // hydration error
  }, []);




  return (client ? (!session ?  <LoginComponent/> : <MeetComponent/>) : null);
}

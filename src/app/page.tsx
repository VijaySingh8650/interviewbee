"use client"; 

import { useSession} from "next-auth/react";
import LoginComponent from "./components/login";
import MeetComponent from "./components/meet";

export default function UserInfo() {

  const { data: session } = useSession();



  return !session ?  <LoginComponent/> : <MeetComponent/>;
}

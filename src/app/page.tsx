"use client"; 

import { useSession} from "next-auth/react";
import LoginComponent from "./components/login";
import MeetComponent from "./components/meet";

export default function UserInfo() {
  const { data: session } = useSession();

  // if (session) {
  //   console.log(session, "sdlhhsfkhsfkf")
  //   return (
  //     <div>
  //       <p>Signed in as {session.user?.name ?? "Unknown User"}</p>
  //       <p>Email: {session.user?.email ?? "No Email Provided"}</p>
  //       <img src={session.user?.image ?? ""} alt={session.user?.name ?? "User"} width="50" height="50" />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </div>
  //   );
  // }

  // return <button onClick={() => signIn("google")}>Sign in with Google</button>;

  return !session ?  <LoginComponent/> : <MeetComponent/>;
}

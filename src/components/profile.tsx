"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>Form Client: {JSON.stringify(session.data.user)}</div>;
  }
  return <div>From client: user is not signed</div>;
}

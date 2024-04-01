"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession();

  const ls = "bada bada boom boom";
  const change = ls + "sdf";

  return (
    <div className="h-full w-full">
      <Appbar
        onSignin={signIn}
        onSignout={async () => {
          await signOut();
          router.push("/api/auth/signin");
        }}
        user={session.data?.user}
      />
      <span>{change}</span>
    </div>
  );
}

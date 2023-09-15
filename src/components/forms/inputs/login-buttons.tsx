import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginButtons() {
  const { data: session } = useSession();

  console.log("session", session);
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div onClick={() => console.log("tocanding")} className="mx-6 border-2">
        hello maifrei
      </div>
      Not signed in <br />
      <button
        className="bg-red-500 ml-4"
        onClick={() => {
          return signIn("credentials", {
            callbackUrl: "/es",
          });
        }}
      >
        Sign in
      </button>
    </>
  );
}

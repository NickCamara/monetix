import { UserButton } from "@clerk/nextjs";
import { Button } from "./_components/ui/button";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
};

export default Home;

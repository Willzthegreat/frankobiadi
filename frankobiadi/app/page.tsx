import AfricanGreatestOportunity from "@/components/africanGreatestOportunity";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <AfricanGreatestOportunity />
      <h1>Home</h1>
    </div>
  );
}

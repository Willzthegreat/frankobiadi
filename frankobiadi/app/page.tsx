import AfricanGreatestOportunity from "@/components/africanGreatestOportunity";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-none justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <AfricanGreatestOportunity />
    </div>
  );
}

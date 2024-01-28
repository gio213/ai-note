import Image from "next/image";
import logo from "@/assets/logo.png";
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="FlowBrain Logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          FlowBrain
        </span>
      </div>
    </main>
  );
}

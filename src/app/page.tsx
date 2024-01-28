import Image from "next/image";
import Next from "../../public/pexels-mali-maeder-225406.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="https://github.com/yossydev/difference-between-remote-and-local-for-next-image/assets/87469023/2968e824-8640-423c-9c15-d1657d6765df"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src={Next}
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="https://github.com/yossydev/difference-between-remote-and-local-for-next-image/assets/87469023/2968e824-8640-423c-9c15-d1657d6765df"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
    </main>
  );
}

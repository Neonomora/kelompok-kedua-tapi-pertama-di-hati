import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="relative size-50">
        <Image src="/meme.webp" alt="Meme Image" fill={true} className="object-contain"></Image>
      </main>
    </div>
  );
}

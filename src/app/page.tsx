import { IoStarSharp } from "react-icons/io5";

export default function Home() {
  return (
    <section className="max-w-lg mx-auto text-center mt-16">
      <div className="flex flex-col justify-center items-center">
        <p className="flex gap-1 text-gray-600">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </p>
        <p className="mt-2">Loved by 100,000+ creators</p>
      </div>
      <h1 className="text-6xl font-bold mt-4">Find your creative work</h1>
      <h2 className="mt-4 mb-8">Accept support for you work. It&apos;s easier than you think.</h2>
      <button className="bg-yellow-300 px-8 py-4 font-bold rounded-full hover:bg-yellow-400 duration-300">Start my page</button>
    </section>
  );
}

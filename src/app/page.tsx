import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          学生団体連合UNION
        </h1>
        <p className="text-xl text-center mb-12">
          学生の声を社会に響かせる
        </p>
        <div className="flex justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            JOIN US
          </button>
        </div>
      </div>
    </div>
  );
}

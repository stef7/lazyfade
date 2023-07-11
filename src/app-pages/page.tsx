import { Image } from "@/components/image/image";

export default function Home() {
  return (
    <>
      <div className="flex overflow-auto m-auto max-w-[900px] gap-[60px] snap-x snap-mandatory [outline:4px_solid_orange] outline-offset-1 mt-4 p-3 scroll-p-3">
        {[...Array(30)].map((_, i) => (
          <Image
            key={i}
            src={`https://source.unsplash.com/random?Gallery&${i}`}
            alt=""
            width={600}
            height={500}
            className="object-cover flex-shrink-0 snap-start [outline:2px_solid_blue] outline-offset-1"
            priority={!i}
          />
        ))}
      </div>

      {[...Array(30)].map((_, i) => (
        <Image
          key={i}
          src={`https://source.unsplash.com/random?Scroll&${i}`}
          alt=""
          width={600}
          height={800}
          className="object-cover m-auto my-20 block outline-2 [outline:4px_solid_blue] outline-offset-1"
        />
      ))}
    </>
  );
}

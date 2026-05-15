"use client";

import Image from "next/image";

export function LynAppShowcaseGallery() {
  return (
    <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-[1.75fr_1fr] lg:gap-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        <div className="border-lyn-border relative aspect-[4/3] overflow-hidden rounded-[32px] border sm:aspect-auto sm:min-h-[160px] lg:min-h-[346px]">
          <Image
            src="/assets/gallery1.png"
            alt="App dashboard overview"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 40vw"
          />
          <div className="pointer-events-none absolute left-0 flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/reactagle.png"
              alt=""
              width={180}
              height={200}
              // className="h-[85%] w-auto max-w-none rotate-[85deg] object-contain opacity-95"
            />
          </div>
        </div>
        <GalleryTile src="/assets/gallery2.png" alt="App clients view" />
        <GalleryTile src="/assets/gallery3.png" alt="App calendar view" />
      </div>
      <div className="border-lyn-border relative min-h-[220px] overflow-hidden rounded-[32px] border sm:min-h-[280px] lg:min-h-[346px]">
        <Image
          src="/assets/gallery4.png"
          alt="Lynco on mobile"
          fill
          className="object-cover object-center"
          sizes="(max-width:1024px) 100vw, 35vw"
        />
      </div>
    </div>
  );
}

function GalleryTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="border-lyn-border relative aspect-[4/3] overflow-hidden rounded-[32px] border sm:aspect-auto sm:min-h-[160px] lg:min-h-[346px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width:1024px) 100vw, 40vw"
      />
    </div>
  );
}

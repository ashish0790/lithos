"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { categories, tiles, type Category } from "@/data/tiles";

type FilterValue = Category | "All";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const largeFormat = useMemo(
    () => tiles.filter((tile) => tile.category === "Large Format Slabs"),
    []
  );
  const floorTiles = useMemo(
    () => tiles.filter((tile) => tile.category === "Porcelain Floor Tiles"),
    []
  );

  const showLargeFormat = activeFilter === "All" || activeFilter === "Large Format Slabs";
  const showFloorTiles = activeFilter === "All" || activeFilter === "Porcelain Floor Tiles";

  return (
    <>
      {/* Filter / Categories */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-section-gap">
        <div className="flex flex-wrap gap-4 fine-line-bottom pb-4">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={
                  isActive
                    ? "font-label-caps text-label-caps uppercase text-primary border-b-2 border-primary pb-1"
                    : "font-label-caps text-label-caps uppercase text-secondary hover:text-primary transition-colors pb-1"
                }
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <main className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-section-gap">
        {showLargeFormat && (
          <div className="mb-24">
            <h2 className="font-headline-md text-headline-md text-primary mb-12 fine-line-bottom pb-4">
              Large Format Porcelain Tiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {largeFormat.map((tile) =>
                tile.featured ? (
                  <FeaturedTile key={tile.id} tile={tile} />
                ) : null
              )}
              <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
                {largeFormat
                  .filter((tile) => !tile.featured)
                  .map((tile) => (
                    <SmallTile key={tile.id} tile={tile} />
                  ))}
              </div>
            </div>
          </div>
        )}

        {showFloorTiles && (
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-12 fine-line-bottom pb-4">
              Porcelain Floor Tiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {floorTiles.map((tile) => (
                <FloorTile key={tile.id} tile={tile} />
              ))}
            </div>
          </div>
        )}

        {!showLargeFormat && !showFloorTiles && (
          <p className="text-on-surface-variant font-body-md text-body-md">
            No tiles found in this collection yet.
          </p>
        )}
      </main>
    </>
  );
}

function FeaturedTile({
  tile,
}: {
  tile: (typeof tiles)[number];
}) {
  return (
    <article className="group col-span-1 md:col-span-8 relative overflow-hidden bg-surface-container-low hover-lift cursor-pointer h-[500px] md:h-[700px]">
      <Image
        src={tile.image}
        alt={tile.alt}
        fill
        sizes="(min-width: 768px) 66vw, 100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 image-overlay flex flex-col justify-end p-8">
        <span className="font-label-caps text-label-caps text-alabaster uppercase tracking-widest mb-2 opacity-80">
          {tile.collection}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-alabaster mb-1">
          {tile.name}
        </h3>
        <p className="font-body-md text-body-md text-alabaster/80">{tile.size}</p>
      </div>
    </article>
  );
}

function SmallTile({ tile }: { tile: (typeof tiles)[number] }) {
  return (
    <article className="group relative overflow-hidden bg-surface-container-low hover-lift cursor-pointer flex-1 h-[240px] md:h-[338px]">
      <Image
        src={tile.image}
        alt={tile.alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 image-overlay flex flex-col justify-end p-6">
        <span className="font-label-caps text-label-caps text-alabaster uppercase tracking-widest mb-1 opacity-80">
          {tile.collection}
        </span>
        <h3 className="font-body-lg text-body-lg text-alabaster font-medium mb-1">
          {tile.name}
        </h3>
        <p className="font-body-md text-body-md text-alabaster/80 text-sm">
          {tile.size}
        </p>
      </div>
    </article>
  );
}

function FloorTile({ tile }: { tile: (typeof tiles)[number] }) {
  return (
    <article className="group cursor-pointer">
      <div className="overflow-hidden bg-surface-container-low h-[400px] mb-6 relative">
        <Image
          src={tile.image}
          alt={tile.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="px-2">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block">
          {tile.collection}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
          {tile.name}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {tile.size}
        </p>
      </div>
    </article>
  );
}

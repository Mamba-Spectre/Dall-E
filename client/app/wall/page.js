"use client";
import Gallery from "react-photo-gallery";
import Footer from "@/main/components/footer";

// all the photos from  folder
const photos = [
  {
    src: "/images/1231.png",
    width: 3,
    height: 4,
  },
  {
    src: "/images/download (9).png",
    width: 1,
    height: 1,
  },
  {
    src: "/images/1232.png",
    width: 3,
    height: 4,
  },

  {
    src: "/images/download (14).png",
    width: 1,
    height: 1,
  },

  {
    src: "images/download (2).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (3).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/1233.png",
    width: 3,
    height: 4,
  },
  {
    src: "/images/download.png",
    width: 4,
    height: 4,
  },

  {
    src: "/images/og.png",
    width: 4,
    height: 4,
  },

  {
    src: "/images/download (10).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (11).png",
    width: 4,
    height: 4,
  },

  {
    src: "/images/download (12).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (13).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (21).png",
    width: 4,
    height: 4,
  },

  {
    src: "/images/download (24).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (17).png",
    width: 4,
    height: 4,
  },

  {
    src: "/images/1235.png",
    width: 3,
    height: 4,
  },
  {
    src: "/images/download (23).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (20).png",
    width: 2,
    height: 2,
  },
  {
    src: "/images/download (25).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (16).png",
    width: 2,
    height: 2,
  },
  {
    src: "/images/download (26).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (18).png",
    width: 2,
    height: 2,
  },
  {
    src: "/images/download (27).png",
    width: 4,
    height: 4,
  },
  {
    src: "/images/download (19).png",
    width: 2,
    height: 2,
  },
];

export default function Wall() {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center text-center text-1xl px-6 pt-24">
        <Gallery photos={photos} />
      </div>
      <Footer />
    </div>
  );
}

"use client";
import Photo from "@/main/components/item";
import { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Footer from "@/main/components/footer";

export async function generateStaticParams() {

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const res = await data.json();
  return res.data.map((test) => ({
    gen: toString(test._id),
  }));
}

export default function About() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([
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
      src: "/images/download (2).png",
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
  ]);

  const getData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts`
    );
    const temp = await res.json();
    const d = temp.data;
    const imgs = [
      ...images,
      ...d.map((item) => {
        if (item.height === 768) {
          return {
            src: item.image,
            width: 3,
            height: 4,
          };
        } else {
          return {
            src: item.image,
            width: 4,
            height: 4,
          };
        }
      }),
    ];

    setImages(imgs);
    // add the new data to the existing data
    setData((old) => [...old, ...d]);
    // setData(d);
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="h-20"></div>
      <div className="h-10"></div>
      <div className="w-full ">
        <div className="grid grid-cols-fluid">
          {data.length > 0 &&
            data.map((item) => (
              <Photo
                rt={item._id}
                key={item._id}
                prompt={item.prompt}
                steps={item.steps}
                sampler_index={item.sampler_index}
                cfg_scale={item.cfg_scale}
                image={item.image}
              />
            ))}
        </div>
      </div>
      <div className="h-10"></div>
      <Gallery photos={images} />
      <Footer />
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GeneratedImage({ params }) {
  const [data, setData] = useState([]);
  const { gen } = params;

  const getData = async () => {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/${gen}`
    );
    const temp = await res.json();
    const d = temp.data;
    // console.log(d[0]);
    setData(d[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data.model);

  return (
    <div>
      <div className="p-10">
        <div className="h-10"></div>
        <div className="flex flex-row justify-between">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="py-5">{data.prompt}</p>
            {data.model ? null : (
              <div>
                <p className="text-1xl p-2"> Steps : {data.steps}</p>
                <p className="text-1xl p-2"> cfg scale :{data.cfg_scale}</p>
                <p className="text-1xl p-2"> Sampler: {data.sampler_index}</p>
              </div>
            )}
          </div>
          <Image
            className="my-12"
            src={data.image}
            width={500}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}

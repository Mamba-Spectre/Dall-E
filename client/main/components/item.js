"use client";
import Image from "next/image";
import Link from "next/link";
export default function Photo(item) {
  return (
    <div className="bg-white m-3 rounded-xl shadow-xl ">
      {/* <p>{item.prompt}</p> */}
      <div className=" w-1/3 flex flex-row justify-between">
        {/* <p> Steps : {item.steps}</p>
        <p> Sampler : {item.sampler_index}</p>
        <p> Cfg : {item.cfg_scale}</p> */}
      </div>
      <Link href={`/c/${item.rt}`} target="_blank">
        <Image
          className="rounded-xl"
          src={item.image}
          alt={item.prompt}
          height={512}
          width={512}
        ></Image>
      </Link>
    </div>
  );
}

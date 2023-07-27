"use client";
import React, { useEffect, useState } from "react";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import Loader from "./Loader";

import Image from "next/image";

const CreatePost = () => {
  const [savelink, setSavelink] = useState("");
  const [Op, setOp] = useState({
    prompt: "",
    image: "",
  });
  const [prmpt, setPrmpt] = useState({
    prompt: "",
    selectedSteps: "",
    selectedSampler: "",
    selectedCfg: "",
    image: "",
  });

  const [prompt, setPrompt] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [selectedSteps, setSelectedSteps] = useState("40");
  const [selectedSampler, setSelectedSampler] = useState("Euler a");
  const [selectedCfg, setSelectedCfg] = useState("7");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const handlePromptChange = (e) => setPrompt(e.target.value);

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(prompt);
    setPrompt(randomPrompt);
  };

  const MongoPost = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/mongo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: Op.prompt,
            image: Op.image,
            model: "dalle",
          }),
        }
      );
      const temp = await response.json();
      const d = temp.data;
      setSavelink(`${process.env.NEXT_PUBLIC_APP_URL}/c/${d._id}`);
    } catch (err) {
      alert(err);
    }
  };


  useEffect(() => {
    if (Op.image) {
      MongoPost();
    }
  }, [Op.image]);

  const openAIImage = async () => {
    if (prompt) {
      try {
        setGeneratingImg(true);
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/dalle`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: `${prompt}`,
            }),
          }
        );
        const data = await response.json();
        setPreviewImg(`data:image/png;base64,${data.photo}`);
        setOp({
          prompt: prompt,
          image: `data:image/png;base64,${data.photo}`,
        });
        // console.log(prmpt);
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  return (
    <section className="2xl:pt-10 lg:pt-20 md:pt-32 pt-20 md:px-10 mx-auto ">
      <div className="flex flex-col lg:flex-row gap-5 justify-between">
        <div className="flex flex-col  gap-5 justify-center">
          <div>
            <h1 className=" font-extrabold text-[#222328] text-[32px]">
              Create
            </h1>
            <p className=" mt-2 max-w-7xl text-[#666e75] text-[14px] pb-5">
              Generate an imaginative image through OpenAI&apos;s DALL-E model.{" "}
              <br />
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-gray-900"
              >
                Prompt
              </label>
              <button
                type="button"
                onClick={handleSurpriseMe}
                className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
              >
                Surprise me
              </button>
            </div>
            <input
              type="text"
              name="prompt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
              value={prompt}
              onChange={handlePromptChange}
              required
            />
          </div>

          <div className="flex ">
           
            <div className="mt-8 px-8 hidden md:block">
              <button
                type="button"
                onClick={openAIImage}
                className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {generatingImg ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>

        </div>
        <div className="flex flex-end">
          <div>
            <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 md:max-w-lg flex justify-center items-center">
              {previewImg ? (
                <Image
                  // src={form.photo}
                  src={previewImg}
                  alt={prompt}
                  className="w-full h-full object-contain rounded-xl"
                  width={512}
                  height={512}
                ></Image>
              ) : (
                <Image
                  src={preview}
                  alt="preview"
                  className="w-9/12 h-9/12 object-contain opacity-40"
                ></Image>
              )}

              {generatingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
                </div>
              )}
            </div>
            <div className="text-center w-full p-5">
              {savelink ? (
                <a
                  href={savelink}
                  className="text-1xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  Share : {savelink}
                </a>
              ) : null}
            </div>

            {/* {generatingImg ? (
              <div>
                <div className="flex justify-between m-1 pt-2">
                  <span className="text-base font-medium text-blue-700">
                    Progress
                  </span>
                  <span className="text-sm font-medium text-blue-700 ">
                    {Math.trunc(progress * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 ">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${progress * 100}%` }}
                  ></div>
                </div>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-5">
        <button
          type="button"
          // onClick={generateImage}
          onClick={openAIImage}
          disabled
          className=" text-white bg-green-700 font-medium rounded-md text-sm w-full md:w-auto px-5 py-2.5 text-center md:hidden"
        >
          {generatingImg ? "Generating..." : "Generate"}
        </button>
      </div>

      <div className="h-10"></div>
    </section>
  );
};

export default CreatePost;

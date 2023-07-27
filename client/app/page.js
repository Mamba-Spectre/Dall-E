import CreatePost from "@/main/components/CreatePost";
import Footer from "@/main/components/footer";
import Navbar from "@/main/navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-20"></div>
      <div className="flex-grow px-6 place-items-center ">
        <CreatePost />
      </div>
      <Footer />
    </div>
  );
};

export default page;

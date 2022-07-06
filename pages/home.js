import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(
  async () => {
    // Sleep, for demoing purposes
    await new Promise((res) => setTimeout(res, 1500));
    // @ts-ignore
    return await import("LandingPage/Home");
  },
  {
    ssr: false,
    loading: ({ error }) => {
      if (error) {
        return <h1>{error.message}</h1>;
      }
      return <h1>loading...</h1>;
    },
  }
);

function home() {
  return <Home />;
}

export default home;

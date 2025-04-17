import React from "react";
import FeatureSlider from "./components/FeatureSlider";

const App: React.FC = () => (
  <section className="w-full max-w-[1440px]  mx-auto md:bg-[#F5F5F5] h-full flex flex-col items-center justify-center ">
    <FeatureSlider />
  </section>
);

export default App;

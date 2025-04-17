import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs } from "../data/phoneData";
import { TabItem } from "../types";

const FeatureSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabItem>(tabs[0]);

  return (
    <div className="w-full z-0 md:pt-[33px] flex flex-col items-center justify-center">
      <section className="w-full bg-white md:pt-[74px]" style={{ zIndex: 1 }}>
        <div className="flex md:flex-row flex-col items-center sm:items-start md:section-padding-custom gap-7 md:[gap:76px]">
          <div className="w-[60%] z-0 md:w-1/2  md:pt-[57px] md:pl-[20px] flex justify-center order-2 md:order-none ">
            <div className="flex justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 120 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="relative md:w-[365px] md:h-[483px] "
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <img
                    className="w-full  h-auto object-contain"
                    src={activeTab.image}
                    alt={activeTab.title}
                  />
                </motion.div>

                {activeTab.id === "sign" && (
                  <>
                    <motion.img
                      src="/images/group1.png"
                      alt="Group Image 1"
                      className=" absolute w-[60%] left-[-28%] bottom-[19%] transform "
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    <motion.img
                      src="/images/group2.png"
                      alt="Group Image 2"
                      className="absolute w-[60%] md:w-auto right-[-24%] top-[28%] "
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.25 }}
                    />
                  </>
                )}
                {activeTab.id === "filters" && (
                  <>
                    <motion.img
                      src="/images/left-bar.png"
                      alt="Bar Image 1"
                      className="absolute h-[75%] md:h-auto left-[-6%] bottom-[4%] transform -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    <motion.img
                      src="/images/right-bar.png"
                      alt="Bar Image 2"
                      className="absolute h-[75%] md:h-auto right-[-6%] bottom-[4%] transform -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.25 }}
                    />
                  </>
                )}
                {activeTab.id === "batch" && (
                  <>
                    <motion.img
                      src="/images/file1.png"
                      alt="Batch Image 1"
                      className="absolute h-[67%] md:w-auto z-10  top-[25%]"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.2, delay: 1 }}
                    />
                    <motion.img
                      src="/images/file2.png"
                      alt="Batch Image 2"
                      className="absolute h-[67%] md:w-auto z-20 left-[14%] top-[26%]"
                      style={{
                        left: "14%",
                        top: "26%",
                      }}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.2, delay: 1.25 }}
                    />
                    <motion.img
                      src="/images/file3.png"
                      alt="Batch Image 3"
                      className="absolute h-[67%] md:w-auto z-30 left-[12%] top-[30%]"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.2, delay: 1.5 }}
                    />
                  </>
                )}
                {activeTab.id === "export" && (
                  <>
                    <motion.img
                      src="/images/arrow.png"
                      alt="Arrow Image 1"
                      className=" absolute left-[-42px] bottom-[36px] transform -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    <motion.img
                      src="/images/pdf.png"
                      alt="Pdf Image 1"
                      className="absolute w-[40%] md:w-auto left-[-7%] bottom-[3%] transform -translate-y-1/2 "
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.25 }}
                    />
                    <motion.img
                      src="/images/jpg.png"
                      alt="Jpg Image 2"
                      className="absolute w-[35%] md:w-auto left-[31%] bottom-[11%] transform -translate-y-1/2 "
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    />
                    <motion.img
                      src="/images/txt.png"
                      alt="Txt Image 2"
                      className="absolute w-[40%] md:w-auto right-[-8%] bottom-[1%] transform -translate-y-1/2 "
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.75 }}
                    />
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pt-[138px] text-center md:text-right mx-auto md:mx-0 order-1 md:order-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 opacity-100 flex flex-col items-center md:items-end"
              >
                <p className="font-extrabold tracking-[2px] text-base text-[#0381FF]">
                  {activeTab.category}
                </p>
                <h2 className="mt-4 font-bold text-[32px] leading-[40px] text-[#0B122A]">
                  {activeTab.title}
                </h2>
                <p className="md:p-0 text-sm md:text-xl  md:leading-[32px] leading-7   px-6 tracking-normal  md:tracking-[0.8px] font-normal text-[#0B172A]">
                  {activeTab.description}
                </p>
                <button className="mt-2 md:text-xl text-sm  btn-padding border-[0.5px] border-[rgba(0,0,0,0.16)]">
                  Learn More
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div
        className="w-full bg-white overflow-x-auto scrollbar-hide md:overflow-x-visible"
        style={{ zIndex: 2 }}
      >
        <div className="flex md:grid md:grid-cols-5 flex-nowrap min-w-max h-[124px] items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`min-w-[200px] md:min-w-0 h-full transition flex items-center justify-center gap-4 border-r border-r-[#00000014] px-4 ${
                activeTab.id === tab.id
                  ? "text-blue-600 bg-[#0381FF]/[0.03] font-semibold"
                  : "text-gray-500 hover:border-gray-400"
              }`}
            >
              <motion.div
                className={`w-14 h-14 flex items-center justify-center rounded-full border transition-all duration-500 ${
                  activeTab.id === tab.id
                    ? "bg-white step-border"
                    : "border border-gray-300"
                }`}
                animate={{
                  borderColor:
                    activeTab.id === tab.id ? "#0381FF" : "rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                {tab.icon(activeTab.id === tab.id)}
              </motion.div>
              <span className="text-[#0B172A] text-xl font-medium whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;

"use client";

import Card from "@/components/Card";
import CardTwo from "@/components/CardTwo";
import useAlg from "@/hooks/useAlg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const tabSection = useRef<HTMLDivElement>(null);
  const singleContainer3 = useRef<HTMLDivElement>(null);
  const singleContainer1 = useRef<HTMLDivElement>(null);
  const singleContainer2 = useRef<HTMLDivElement>(null);
  const SANContainerRef = useRef<HTMLDivElement>(null);

  const [history, setHistory] = useState<any>([]);
  const [val, setVal] = useState("");
  const { sanPattern } = useAlg();
  const [data, setData] = useState<any>([]);
  const [SAN, setSAN] = useState([]);

  const valueEnter = (e: any) => {
    e.preventDefault();
    if (val) {
      setHistory((prevHistory: any) => [
        ...prevHistory,
        {
          data: JSON.stringify(data),
          SAN: JSON.stringify(SAN),
        },
      ]);
      setData((prv: any) => [...prv, val]);
      setSAN(sanPattern(SAN, val));
      setVal("");
    }
  };

  const undoOption = () => {
    setHistory((prevHistory: any) => prevHistory.slice(0, -1));
    if (history.length > 0) {
      // Remove the last history entry

      const lastState: any = history[history.length - 2]; // Get the last snapshot
      if (lastState) {
        setData((prv: any) => JSON.parse(lastState.data));
        setSAN((prv) => JSON.parse(lastState.SAN));
      } else {
        setData((prv: any) => []);
        setSAN((prv) => []);
      }
    }
  };
  useEffect(() => {
    singleContainer3.current?.scrollIntoView({ behavior: "smooth" });
    singleContainer1.current?.scrollIntoView({ behavior: "smooth" });
    singleContainer2.current?.scrollIntoView({ behavior: "smooth" });
    SANContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [val]);

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-6 bg-white shadow">
        <h4 className="text-xl font-bold text-[#9F0D0F] capitalize md:text-3xl text-center">
          💲 F4 💲
        </h4>
      </header>

      {/* Scrollable Grid Section */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <CardTwo title="Level 1" record={data} type="level_1" />
            <div ref={singleContainer3} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <CardTwo title="Level 2" record={data} type="level_2" />
            <div ref={singleContainer1} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <CardTwo title="Level 3" record={data} type="level_3" />
            <div ref={singleContainer2} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card title={"SAN"} record={SAN} type="SAN" />
            <div ref={SANContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          {/* <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card title={"EVEN-ODD"} record={EO} type="evenOdd" />
            <div ref={singleContainer} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card title={"ODD-ODD"} record={OO} type="oddOdd" />
            <div ref={singleContainer} className="h-1 w-full bg-transparent" />
          </div> */}
        </div>
      </main>

      {/* Sticky Footer Form */}
      <footer className="sticky bottom-0 bg-white p-4 border-t shadow-md">
        <form onSubmit={valueEnter} className="flex  max-w-md mx-auto  ">
          <div className="flex border-2 border-blue-500 overflow-hidden">
            <input
              type="text"
              placeholder="Enter the Numbers"
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3 appearance-none"
              value={val}
              onChange={(e: any) => {
                if (!isNaN(e.target.value)) {
                  setVal(e.target.value);
                }
              }}
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-[#007bff] px-5 text-sm text-white"
            >
              SUBMIT
            </button>
          </div>
          <button
            onClick={undoOption}
            className="flex mx-2 items-center justify-center bg-red-700 px-5 text-sm text-white"
          >
            🗑️ UNDO
          </button>
        </form>
      </footer>
    </div>
  );
}

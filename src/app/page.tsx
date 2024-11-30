"use client";

import Card from "@/components/Card";
import useAlg from "@/hooks/useAlg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const tabSection = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState("");
  const { oddEvenPattern, EvenOddPattern, oddOddPattern, evenEvenPattern } =
    useAlg();
  const [OE, setOE] = useState([]);
  const [EO, setEO] = useState([]);
  const [OO, setOO] = useState([]);
  const [EE, setEE] = useState([]);

  const valueEnter = (e: any) => {
    e.preventDefault();
    if (val) {
      setOE(oddEvenPattern(OE, val));
      setEO(EvenOddPattern(EO, val));
      setOO(oddOddPattern(OO, val));
      setEE(evenEvenPattern(EE, val));
      setVal("");
    }
  };

  const undoOptionOE = (array: any, changeState: any) => {
    let temp = array[array.length - 1];
    if (temp.length == 1) {
      array.pop();
    } else {
      temp.pop();
      array[array.length - 1] = temp;
    }

    changeState([...array]); // Ensure re-render
  };

  useEffect(() => {
    tabSection.current?.scrollIntoView({ behavior: "smooth" });
  }, [val]);

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-6 bg-white shadow">
        <h4 className="text-xl font-bold text-[#9F0D0F] capitalize md:text-3xl text-center">
          💲 Casino speed roulette 💲
        </h4>
      </header>

      {/* Scrollable Grid Section */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card
            title={"ODD-EVEN"}
            record={OE}
            type="oddEven"
            handleUndo={() => {
              undoOptionOE(OE, setOE);
            }}
          />
          <Card
            title={"EVEN-ODD"}
            record={EO}
            type="evenOdd"
            handleUndo={() => {
              undoOptionOE(EO, setEO);
            }}
          />
          <Card
            title={"ODD-ODD"}
            record={OO}
            type="oddOdd"
            handleUndo={() => {
              undoOptionOE(OO, setOO);
            }}
          />
          <Card
            title={"EVEN-EVEN"}
            record={EE}
            type="evenEven"
            handleUndo={() => {
              undoOptionOE(EE, setEE);
            }}
          />
        </div>
        <div ref={tabSection} className="h-1 w-full bg-transparent" />
      </main>

      {/* Sticky Footer Form */}
      <footer className="sticky bottom-0 bg-white p-4 border-t shadow-md">
        <form
          onSubmit={valueEnter}
          className="flex max-w-md mx-auto border-2 border-blue-500 overflow-hidden"
        >
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
        </form>
      </footer>
    </div>
  );
}

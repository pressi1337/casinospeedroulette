"use client";

import Card from "@/components/Card";
import useAlg from "@/hooks/useAlg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const tabSection = useRef<HTMLDivElement>(null);
  const OEContainerRef = useRef<HTMLDivElement>(null);
  const EOContainerRef = useRef<HTMLDivElement>(null);
  const OOContainerRef = useRef<HTMLDivElement>(null);
  const EEContainerRef = useRef<HTMLDivElement>(null);
  const NOEContainerRef = useRef<HTMLDivElement>(null);
  const HLContainerRef = useRef<HTMLDivElement>(null);
  const SANContainerRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<any>([]);
  const [val, setVal] = useState("");
  const {
    oddEvenPattern,
    EvenOddPattern,
    oddOddPattern,
    evenEvenPattern,
    normalOEPattern,
    sanPattern,
  } = useAlg();
  const [OE, setOE] = useState([]);
  const [EO, setEO] = useState([]);
  const [OO, setOO] = useState([]);
  const [EE, setEE] = useState([]);
  const [NOE, setNOE] = useState([]);
  const [SAN, setSAN] = useState([]);

  const valueEnter = (e: any) => {
    e.preventDefault();
    if (val) {
      setHistory((prevHistory: any) => [
        ...prevHistory,
        {
          OE: JSON.stringify(OE),
          EO: JSON.stringify(EO),
          OO: JSON.stringify(OO),
          EE: JSON.stringify(EE),
          NOE: JSON.stringify(NOE),
          SAN: JSON.stringify(SAN),
        }, // Save current snapshot
      ]);

      setOE(oddEvenPattern(OE, val));
      setEO(EvenOddPattern(EO, val));
      setOO(oddOddPattern(OO, val));
      setEE(evenEvenPattern(EE, val));
      setNOE(normalOEPattern(NOE, val));
      setSAN(sanPattern(SAN, val));
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

  const undoOption = () => {
    setHistory((prevHistory: any) => prevHistory.slice(0, -1));
    if (history.length > 0) {
      // Remove the last history entry

      const lastState: any = history[history.length - 2]; // Get the last snapshot

      if (lastState) {
        setOE((prv) => JSON.parse(lastState.OE));
        setEO((prv) => JSON.parse(lastState.EO));
        setOO((prv) => JSON.parse(lastState.OO));
        setEE((prv) => JSON.parse(lastState.EE));
        setNOE((prv) => JSON.parse(lastState.NOE));
        setSAN((prv) => JSON.parse(lastState.SAN));
      } else {
        setOE((prv) => []);
        setEO((prv) => []);
        setOO((prv) => []);
        setEE((prv) => []);
        setNOE((prv) => []);
        setSAN((prv) => []);
      }
    }
  };
  useEffect(() => {
    OEContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EOContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EEContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    OOContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    NOEContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    HLContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    SANContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [val]);

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-6 bg-white shadow">
        <h4 className="text-xl font-bold text-[#9F0D0F] capitalize md:text-3xl text-center">
          💲 f4 💲
        </h4>
      </header>

      {/* Scrollable Grid Section */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-7 xl:grid-cols-7">
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"ODD-EVEN"}
              record={OE}
              type="oddEven"
              handleUndo={() => {
                undoOptionOE(OE, setOE);
              }}
            />
            <div ref={OEContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"EVEN-ODD"}
              record={EO}
              type="evenOdd"
              handleUndo={() => {
                undoOptionOE(EO, setEO);
              }}
            />
            <div ref={EOContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"ODD-ODD"}
              record={OO}
              type="oddOdd"
              handleUndo={() => {
                undoOptionOE(OO, setOO);
              }}
            />
            <div ref={OOContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"EVEN-EVEN"}
              record={EE}
              type="evenEven"
              handleUndo={() => {
                undoOptionOE(EE, setEE);
              }}
            />
            <div ref={EEContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"STD-OE"}
              record={NOE}
              type="normalOddEven"
              handleUndo={() => {
                undoOptionOE(NOE, setNOE);
              }}
            />
            <div ref={NOEContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"HL"}
              record={NOE}
              type="highLow"
              handleUndo={() => {
                undoOptionOE(NOE, setNOE);
              }}
            />
            <div ref={HLContainerRef} className="h-1 w-full bg-transparent" />
          </div>

          <div className="h-[calc(80vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"SAN"}
              record={SAN}
              type="SAN"
              handleUndo={() => {
                undoOptionOE(SAN, setNOE);
              }}
            />
            <div ref={SANContainerRef} className="h-1 w-full bg-transparent" />
          </div>
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

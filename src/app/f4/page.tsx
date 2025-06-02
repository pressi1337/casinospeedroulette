"use client";

import Card from "@/components/Card";
import useAlg from "@/hooks/useAlg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const tabSection = useRef<HTMLDivElement>(null);
  const EOContainerRef = useRef<HTMLDivElement>(null);
  const OOContainerRef = useRef<HTMLDivElement>(null);
  const EEContainerRef = useRef<HTMLDivElement>(null);

  const OO4ContainerRef = useRef<HTMLDivElement>(null);
  const OO4dupContainerRef = useRef<HTMLDivElement>(null);
  const EE4ContainerRef = useRef<HTMLDivElement>(null);
  const OOO4ContainerRef = useRef<HTMLDivElement>(null);
  const OOO4dupContainerRef = useRef<HTMLDivElement>(null);
  const EEE4ContainerRef = useRef<HTMLDivElement>(null);
  const EEE4dupContainerRef = useRef<HTMLDivElement>(null);
  const EE4dupContainerRef = useRef<HTMLDivElement>(null);
  const OEOCContainerRef = useRef<HTMLDivElement>(null);
  const EOECContainerRef = useRef<HTMLDivElement>(null);
  const B1ContainerRef = useRef<HTMLDivElement>(null);
  const OEContainerRef = useRef<HTMLDivElement>(null);
  const SANContainerRef = useRef<HTMLDivElement>(null);
  const NOEContainerRef = useRef<HTMLDivElement>(null);

  const [history, setHistory] = useState<any>([]);
  const [val, setVal] = useState("");
  const {
    oddOddPattern,
    evenEvenPattern,
    oddOddv4Pattern,
    evenEvenv4Pattern,
    OOO4V4Pattern,
    EEE4V4Pattern,
    oddEvenOddClose,
    evenOddEvenClose,
    B1Close,
    oddEvenPattern,
    normalOEPattern,
    sanPattern,
  } = useAlg();
  const [OO, setOO] = useState([]);
  const [EE, setEE] = useState([]);
  const [OO4, setOO4] = useState([]);
  const [EE4, setEE4] = useState([]);
  const [OOO4, setOOO4] = useState([]);
  const [EEE4, setEEE4] = useState([]);
  const [OEOC, setOEOC] = useState([]);
  const [EOEC, setEOEC] = useState([]);
  const [B1, setB1] = useState([]);
  const [OE, setOE] = useState([]);
  const [NOE, setNOE] = useState([]);
  const [SAN, setSAN] = useState([]);

  const valueEnter = (e: any) => {
    e.preventDefault();
    if (val) {
      setHistory((prevHistory: any) => [
        ...prevHistory,
        {
          OO: JSON.stringify(OO),
          EE: JSON.stringify(EE),
          OO4: JSON.stringify(OO4),
          EE4: JSON.stringify(EE4),
          OOO4: JSON.stringify(OOO4),
          EEE4: JSON.stringify(EEE4),
          OEOC: JSON.stringify(OEOC),
          EOEC: JSON.stringify(EOEC),
          B1: JSON.stringify(B1),
          OE: JSON.stringify(OE),
          NOE: JSON.stringify(NOE),
          SAN: JSON.stringify(SAN),
        }, // Save current snapshot
      ]);

      setOO(oddOddPattern(OO, val));
      setEE(evenEvenPattern(EE, val));
      setOO4(oddOddv4Pattern(OO4, val));
      setEE4(evenEvenv4Pattern(EE4, val));
      setOOO4(OOO4V4Pattern(OOO4, val));
      setEEE4(EEE4V4Pattern(EEE4, val));
      setOEOC(oddEvenOddClose(OEOC, val));
      setEOEC(evenOddEvenClose(EOEC, val));
      setOE(oddEvenPattern(OE, val));
      setB1(B1Close(B1, val));
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
        setOO((prv) => JSON.parse(lastState.OO));
        setEE((prv) => JSON.parse(lastState.EE));
        setOO4((prv) => JSON.parse(lastState.OO4));
        setEE4((prv) => JSON.parse(lastState.EE4));
        setOOO4((prv) => JSON.parse(lastState.OOO4));
        setEEE4((prv) => JSON.parse(lastState.EEE4));
        setOEOC((prv) => JSON.parse(lastState.OEOC));
        setEOEC((prv) => JSON.parse(lastState.EOEC));
        setB1((prv) => JSON.parse(lastState.B1));
        setOE((prv) => JSON.parse(lastState.OE));
        setNOE((prv) => JSON.parse(lastState.NOE));
        setSAN((prv) => JSON.parse(lastState.SAN));
      } else {
        setOO((prv) => []);
        setEE((prv) => []);
        setOO4((prv) => []);
        setEE4((prv) => []);
        setOOO4((prv) => []);
        setEEE4((prv) => []);
        setOEOC((prv) => []);
        setB1((prv) => []);
        setOE((prv) => []);
        setNOE((prv) => []);
        setSAN((prv) => []);
      }
    }
  };
  useEffect(() => {
    EOContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EEContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    OO4ContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EE4ContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    OOO4ContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    OOO4dupContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    OO4dupContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EEE4ContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EEE4dupContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EE4dupContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    OEOCContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    EOECContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    B1ContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    SANContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    NOEContainerRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-7 xl:grid-cols-7">
          {/* v4 */}
          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"ODD-ODD4"}
              record={OO4}
              type="oddoddv4"
              handleUndo={() => {
                undoOptionOE(OO4, setOO4);
              }}
            />
            <div ref={OO4ContainerRef} className="h-1 w-full bg-transparent" />
          </div>

          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"OD-OD-OD"}
              record={OOO4}
              type="odododv4"
              conditionCheckShow={true}
              openBoxLimit={2}
              handleUndo={() => {
                undoOptionOE(OOO4, setOOO4);
              }}
            />
            <div
              ref={OOO4dupContainerRef}
              className="h-1 w-full bg-transparent"
            />
          </div>

          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"OD-OD-EV"}
              record={OOO4}
              type="ododevv4"
              conditionCheckShow={true}
              openBoxLimit={2}
              handleUndo={() => {
                undoOptionOE(OOO4, setOOO4);
              }}
            />
            <div ref={OOO4ContainerRef} className="h-1 w-full bg-transparent" />
          </div>

          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"EV-EV4"}
              record={EE4}
              type="evevv4"
              handleUndo={() => {
                undoOptionOE(EE4, setEE4);
              }}
            />
            <div ref={EE4ContainerRef} className="h-1 w-full bg-transparent" />
          </div>

          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"EV-EV-EV"}
              record={EEE4}
              type="evevevv4"
              conditionCheckShow={true}
              openBoxLimit={2}
              handleUndo={() => {
                undoOptionOE(EEE4, setEEE4);
              }}
            />
            <div
              ref={EEE4dupContainerRef}
              className="h-1 w-full bg-transparent"
            />
          </div>
          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"EV-EV-OD"}
              record={EEE4}
              type="evevodv4"
              conditionCheckShow={true}
              openBoxLimit={2}
              handleUndo={() => {
                undoOptionOE(EEE4, setEEE4);
              }}
            />
            <div ref={EEE4ContainerRef} className="h-1 w-full bg-transparent" />
          </div>

          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"ODD-EV4"}
              record={OO4}
              type="oddevv4"
              handleUndo={() => {
                undoOptionOE(OO4, setOO4);
              }}
            />
            <div
              ref={OO4dupContainerRef}
              className="h-1 w-full bg-transparent"
            />
          </div>

          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"EV-ODD4"}
              record={EE4}
              type="evodv4"
              handleUndo={() => {
                undoOptionOE(EE4, setEE4);
              }}
            />
            <div
              ref={EE4dupContainerRef}
              className="h-1 w-full bg-transparent"
            />
          </div>
          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"OEOC"}
              record={OEOC}
              type="oeoc"
              handleUndo={() => {
                undoOptionOE(OEOC, setOEOC);
              }}
            />
            <div ref={OEOCContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"EOEC"}
              record={EOEC}
              type="eoec"
              handleUndo={() => {
                undoOptionOE(EOEC, setEOEC);
              }}
            />
            <div ref={EOECContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"B1"}
              record={B1}
              type="b1"
              handleUndo={() => {
                undoOptionOE(B1, setB1);
              }}
            />
            <div ref={B1ContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"ODD-EVEN1"}
              record={OE}
              type="oddEven"
              handleUndo={() => {
                undoOptionOE(OE, setOE);
              }}
            />
            <div ref={OEContainerRef} className="h-1 w-full bg-transparent" />
          </div>

          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          <div className="h-[calc(60vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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

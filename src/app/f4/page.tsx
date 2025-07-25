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
  const B2ContainerRef = useRef<HTMLDivElement>(null);
  const OEContainerRef = useRef<HTMLDivElement>(null);
  const SANContainerRef = useRef<HTMLDivElement>(null);
  const NOEContainerRef = useRef<HTMLDivElement>(null);
  const B1HLContainerRef = useRef<HTMLDivElement>(null);
  const B2HLContainerRef = useRef<HTMLDivElement>(null);
  const B1BRContainerRef = useRef<HTMLDivElement>(null);
  const B2BRContainerRef = useRef<HTMLDivElement>(null);

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
    B1CloseHL,
    B1CloseBR,
    oddEvenPattern,
    normalOEPattern,
    sanPattern,
    B2Close,
    B2CloseHL,
    B2CloseBR,
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
  const [B2, setB2] = useState([]);
  const [B1HL, setB1HL] = useState([]);
  const [B1BR, setB1BR] = useState([]);
  const [B2HL, setB2HL] = useState([]);
  const [B2BR, setB2BR] = useState([]);
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
          B2: JSON.stringify(B2),
          B1HL: JSON.stringify(B1HL),
          B1BR: JSON.stringify(B1BR),
          B2HL: JSON.stringify(B2HL),
          B2BR: JSON.stringify(B2BR),
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
      setB2(B2Close(B2, val));
      setB1HL(B1CloseHL(B1HL, val));
      setB1BR(B1CloseBR(B1BR, val));
      setB2HL(B2CloseHL(B2HL, val));
      setB2BR(B2CloseBR(B2BR, val));
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
        setB2((prv) => JSON.parse(lastState.B2));
        setOE((prv) => JSON.parse(lastState.OE));
        setNOE((prv) => JSON.parse(lastState.NOE));
        setSAN((prv) => JSON.parse(lastState.SAN));
        setB1HL((prv) => JSON.parse(lastState.B1HL));
        setB1BR((prv) => JSON.parse(lastState.B1BR));
        setB2HL((prv) => JSON.parse(lastState.B2HL));
        setB2BR((prv) => JSON.parse(lastState.B2BR));
      } else {
        setOO((prv) => []);
        setEE((prv) => []);
        setOO4((prv) => []);
        setEE4((prv) => []);
        setOOO4((prv) => []);
        setEEE4((prv) => []);
        setOEOC((prv) => []);
        setB1((prv) => []);
        setB2((prv) => []);
        setB1HL((prv) => []);
        setB1BR((prv) => []);
        setB2HL((prv) => []);
        setB2BR((prv) => []);
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
    B2ContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    B1HLContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    B1BRContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    B2HLContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    B2BRContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    SANContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    NOEContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    OEContainerRef.current?.scrollIntoView({ behavior: "smooth" });
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
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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

          {/* <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          </div> */}

          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          {/* <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          </div> */}

          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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

          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"B1HL"}
              record={B1HL}
              type="b1hl"
              handleUndo={() => {
                undoOptionOE(B1HL, setB1HL);
              }}
            />
            <div ref={B1HLContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"B1BR"}
              record={B1BR}
              type="b1br"
              displayType="colorType"
              handleUndo={() => {
                undoOptionOE(B1BR, setB1BR);
              }}
            />
            <div ref={B1BRContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
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
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"B2"}
              record={B2}
              type="b2"
              handleUndo={() => {
                undoOptionOE(B2, setB2);
              }}
            />
            <div ref={B2ContainerRef} className="h-1 w-full bg-transparent" />
          </div>

          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"B2HL"}
              record={B2HL}
              type="b2hl"
              handleUndo={() => {
                undoOptionOE(B2HL, setB2HL);
              }}
            />
            <div ref={B2HLContainerRef} className="h-1 w-full bg-transparent" />
          </div>
          <div className="h-[calc(50vh-5rem)] overflow-y-auto border border-gray-300 rounded shadow p-4">
            <Card
              title={"B2BR"}
              record={B2BR}
              type="b2br"
              displayType="colorType"
              handleUndo={() => {
                undoOptionOE(B2BR, setB2BR);
              }}
            />
            <div ref={B2BRContainerRef} className="h-1 w-full bg-transparent" />
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

"use client";
import Card from "@/components/Card";
import BlockInput from "@/components/Forms/BlockInput";
import useAlg from "@/hooks/useAlg";
import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState("");
  const { oddEvenPattern, EvenOddPattern } = useAlg();
  const [OE, setOE] = useState([]);
  const [EO, setEO] = useState([]);

  const valueEnter = (e: any) => {
    e.preventDefault();
    if (val) {
      setOE(oddEvenPattern(OE, val));
      setEO(EvenOddPattern(EO, val));
      setVal((prv) => "");
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

    changeState(JSON.parse(JSON.stringify(array)));
  };

  return (
    <section className="container p-6 mx-auto space-y-3  bg-white">
      <h4 className="text-xl font-bold text-[#9F0D0F] capitalize  md:text-3xl text-center">
        💲 Casino speed roulette 💲
      </h4>

      <form onSubmit={valueEnter}>
        <div className="flex border-2  border-blue-500 overflow-hidden max-w-md mx-auto  mt-6">
          <input
            type="number"
            placeholder="0"
            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <button
            onClick={valueEnter}
            type="submit"
            className="flex items-center justify-center bg-[#007bff] px-5 text-sm text-white"
          >
            SUBMIT
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center">
        <div className="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        </div>
      </div>
    </section>
  );
}

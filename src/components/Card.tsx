"use client";

import { useEffect, useState } from "react";
import BlockInput from "./Forms/BlockInput";

export default function Card({
  title = "",
  record = [],
  type = "oddEven",
  handleUndo = () => {},
}) {
  const [clientRecord, setClientRecord] = useState(record);

  useEffect(() => {
    setClientRecord(record);
  }, [record]);

  const OddEvenType = (values: any) => {
    if (values.length == 1) {
      return "bg-stone-300";
    }
    if (values.length == 2) {
      if (values[0] % 2 != 0 && values[1] % 2 == 0) {
        return "bg-green-300";
      }
      return "bg-stone-300";
    }
    if (values.length == 3) {
      if (values[0] % 2 != 0 && values[1] % 2 != 0 && values[2] % 2 == 0) {
        return "bg-green-300";
      }
      if (values[0] % 2 != 0 && values[1] == 0 && values[2] % 2 == 0) {
        return "bg-green-300";
      }
      return "bg-stone-300";
    }

    return "bg-red-300";
  };

  const EvenOddType = (values: any) => {
    if (values.length == 1) {
      return "bg-stone-300";
    }
    if (values.length == 2) {
      if (values[0] % 2 == 0 && values[1] % 2 != 0) {
        return "bg-green-300";
      }
      return "bg-stone-300";
    }
    if (values.length == 3) {
      if (values[0] % 2 == 0 && values[1] % 2 == 0 && values[2] % 2 != 0) {
        return "bg-green-300";
      }
      if (values[0] % 2 == 0 && values[1] == 0 && values[2] % 2 != 0) {
        return "bg-green-300";
      }
      return "bg-stone-300";
    }

    return "bg-red-300";
  };

  console.log({ record });
  return (
    <div className="w-full max-w-xs">
      <div className="object-cover object-center w-full p-5 mx-auto rounded-lg bg-blue-50 border border-blue-10">
        <div>
          <h5 className="text-lg font-bold text-[#9F0D0F]">
            {title} <button onClick={handleUndo}>: 🗑️</button>
          </h5>
          {clientRecord?.map((item: any, index: number) => (
            <div
              className={`flex items-center gap-1 my-1 rounded ${
                type == "oddEven" ? OddEvenType(item) : EvenOddType(item)
              } p-2`}
              key={`record-${index}`}
            >
              <p className="my-auto text-black">
                <b>{index + 1} -</b>
              </p>
              {item.map((val: any, inx: number) => (
                <BlockInput
                  val={val}
                  key={`value-${index}-${inx}`}
                  index={inx}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

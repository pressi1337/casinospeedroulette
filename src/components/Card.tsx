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

  const oddOddType = (values: any) => {
    if (values.length == 1) {
      return "bg-stone-300";
    }
    if (values.length == 2) {
      if (values[0] % 2 != 0 && values[1] % 2 != 0) {
        return "bg-green-300";
      }
      return "bg-stone-300";
    }
    if (values.length == 3) {
      if (values[0] % 2 != 0 && values[1] % 2 == 0 && values[2] % 2 != 0) {
        return "bg-green-300";
      }
      if (values[0] % 2 != 0 && values[1] == 0 && values[2] % 2 != 0) {
        return "bg-green-300";
      }
      if (values[0] % 2 != 0 && values[1] == 0 && values[2] % 2 == 0) {
        return "bg-red-300";
      }
      return "bg-red-300";
    }
    return "bg-stone-300";
  };

  const evenEvenType = (values: any) => {
    if (values.length == 1) {
      return "bg-stone-300";
    }
    if (values.length == 2) {
      if (values[0] % 2 == 0 && values[1] % 2 == 0) {
        return "bg-green-300";
      }
      return "bg-stone-300";
    }
    if (values.length == 3) {
      if (values[0] % 2 == 0 && values[1] == 0 && values[2] == 0) {
        return "bg-red-300";
      }
      if (values[0] % 2 == 0 && values[1] != 0 && values[2] == 0) {
        return "bg-red-300";
      }
      if (values[0] % 2 == 0 && values[1] % 2 != 0 && values[2] % 2 == 0) {
        return "bg-green-300";
      }

      if (values[0] % 2 == 0 && values[1] == 0 && values[2] % 2 == 0) {
        return "bg-green-300";
      }

      return "bg-red-300";
    }
    return "bg-stone-300";
  };

  const normalOEType = (values: any) => {
    if (values.length == 1) {
      return "bg-stone-300";
    }
    if (values.length == 2) {
      if (values[0] == 0 || values[1] == 0) {
        return "bg-red-300";
      }

      if (
        (values[0] % 2 != 0 && values[1] % 2 != 0) ||
        (values[0] % 2 == 0 && values[1] % 2 == 0)
      ) {
        return "bg-red-300";
      }

      return "bg-green-300";
    }

    return "bg-stone-300";
  };

  const FindHingLow = (val: any) => {
    if (val == 0) {
      return 0;
    }

    if (val >= 19) {
      return "H";
    }
    if (val <= 18) {
      return "L";
    }
  };

  const highType = (values: any) => {
    if (values.length == 1) {
      return "bg-stone-300";
    }
    if (values.length == 2) {
      if (FindHingLow(values[0]) == 0 || FindHingLow(values[1]) == 0) {
        return "bg-red-300";
      }

      if (
        (FindHingLow(values[0]) == "H" && FindHingLow(values[1]) == "H") ||
        (FindHingLow(values[0]) == "L" && FindHingLow(values[1]) == "L")
      ) {
        return "bg-red-300";
      }

      return "bg-green-300";
    }

    return "bg-stone-300";
  };
  const sanColor = (values: any) => {
    if (values.length == 1) {
      return "bg-stone-300";
    }
    if (values.length == 2) {
      if (values[1] == 0) {
        return "bg-red-300";
      }
      if (values[0] % 2 == 0 && values[1] % 2 == 0) {
        return "bg-green-300";
      }

      if (values[0] % 2 != 0 && values[1] % 2 != 0) {
        return "bg-green-300";
      }

      return "bg-red-300";
    }

    if (values.length === 3) {
      if (values[0] % 2 != 0 && values[1] % 2 == 0 && values[2] % 2 != 0) {
        return "bg-green-300";
      }
      if (values[0] % 2 == 0 && values[1] % 2 != 0 && values[2] % 2 == 0) {
        return "bg-green-300";
      }
      return "bg-red-300";
    }

    return "bg-stone-300";
  };

  const COLOR_PATTERN = (type: any, values: any) => {
    if (type === "oddEven") {
      return OddEvenType(values);
    }
    if (type === "evenOdd") {
      return EvenOddType(values);
    }
    if (type === "oddOdd") {
      return oddOddType(values);
    }
    if (type === "evenEven") {
      return evenEvenType(values);
    }
    if (type === "normalOddEven") {
      return normalOEType(values);
    }

    if (type === "highLow") {
      return highType(values);
    }

    if (type === "SAN") {
      return sanColor(values);
    }

    return "bg-stone-300";
  };

  return (
    <div className="w-full max-w-xs">
      <div className="object-cover object-center w-full p-5 mx-auto rounded-lg bg-blue-50 border border-blue-10">
        <div>
          {clientRecord?.map((item: any, index: number) => (
            <div
              className={`flex items-center gap-1 my-1 rounded ${COLOR_PATTERN(
                type,
                item
              )} p-2`}
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
          {/* {Boolean(clientRecord.length) && (
            <button
              className="text-white mt-4 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
              onClick={handleUndo}
            >
              UNDO: 🗑️
            </button>
          )} */}
          <h5 className="text-lg font-bold text-[#9F0D0F]">{title}</h5>
        </div>
      </div>
    </div>
  );
}

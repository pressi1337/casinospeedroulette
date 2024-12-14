"use client";

import { useEffect, useState } from "react";
import BlockInput from "./Forms/BlockInput";
import DATA from "../constant/data";
export default function CardTwo({
  title = "",
  record = [],
  type = "level_1",
}: any) {
  const COLOR: any = {
    "jeu zero": "#e74c3c", // Flat red
    Voisins: "#3498db", // Flat blue
    orphelins: "#f1c40f", // Flat yellow
    Tiers: "#9b59b6", // Flat purple
    "Dozen 2": "#1abc9c", // Flat teal (distinguishing it from Voisins)
    "Dozen 1": "#f39c12", // Flat orange-yellow (different from orphelins)
    "Dozen 3": "#c0392b", // Dark flat red
    "column 1": "#2980b9", // Dark flat blue
    "column 2": "#f4d03f", // Bright yellow (variation of orphelins)
    "column 3": "#e74c3c", // Same flat red as "jeu zero"
    "-": "#95a5a6", // Flat gray
  };
  return (
    <div className="w-full max-w-xs">
      <div className="object-cover object-center w-full p-5 mx-auto rounded-lg bg-blue-50 border border-blue-10">
        <div>
          {Boolean(record.length) && (
            <div
              className={` items-center gap-1 my-1 rounded bg-stone-300 p-2`}
            >
              {/* <b>{index + 1} -</b> */}
              {record?.map((item: any, index: number) => (
                <p
                  className="my-2 text-black"
                  key={index}
                  style={{ color: COLOR?.[item]?.[type] }}
                >
                  <b>{item}</b>{" "}
                  <b
                    className="text-lg"
                    style={{ color: COLOR[DATA[item]?.[type]] }}
                  >
                    {DATA[item]?.[type].toUpperCase()}
                  </b>
                </p>
              ))}
            </div>
          )}

          <h5 className="text-lg font-bold text-[#9F0D0F]">{title}</h5>
        </div>
      </div>
    </div>
  );
}

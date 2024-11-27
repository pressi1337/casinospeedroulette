"use client";

export default function BlockInput({ val, index }: any) {
  return (
    <div>
      <input
        type="text"
        value={val}
        readOnly={true}
        className={`w-8 h-6 text-center text-sm font-extrabold text-slate-900 bg-slate-150 border rounded ${
          index == 3 && "bg-gray-300 "
        }  `}
      />
    </div>
  );
}

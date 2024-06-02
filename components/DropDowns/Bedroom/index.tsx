"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import SelectField from "@/components/Forms/ClientInputs/SelectField";
import { BedroomIcon } from "@/components/Icons/BedroomIcon";
import { useSearchParams } from "next/navigation";
interface BedroomDropdown {
  label?: string;
}

const Bedroom: FC<BedroomDropdown> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  const searchQuery = useSearchParams();

  const [bedroom, setBedroom] = useState(searchQuery?.get("bedroom") || "1");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleClick(event: { target: any }) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdown}>
      <input type="hidden" name="bedroom" value={bedroom} />
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BedroomIcon className="pr-1 w-[25px] h-[25px]" />
        <span className="text-slate-400 xs:text-sm whitespace-nowrap">
          {bedroom ? `${bedroom} Bedroom${parseInt(bedroom) > 1 ? "s" : ""}` : "Bedroom"}
        </span>
      </div>
      <div
        className={`absolute transition-all overflow-hidden top-full bg-white z-20 shadow-sm border-slate-100 flex flex-col max-h-0 gap-2 p-4 ${isOpen ? "!p-2 !max-h-[20rem]" : "!p-0 !max-h-0"
          }`}
      >
        <div className="text-sm text-black cursor-pointer w-[140px] border p-2 border-solid border-slate-200">
          <SelectField name="bedroom" value={bedroom.toString()} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setBedroom(e.target.value)} className="w-full outline-none">
            <option value="">Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectField>
        </div>
        <div>
          {parseInt(bedroom) > 0 && (
            <div className="text-center">
              <span
                onClick={() => {
                  setBedroom("");
                  setIsOpen(false);
                }}
                className="text-xs text-slate-500 cursor-pointer"
              >
                Clear
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bedroom;

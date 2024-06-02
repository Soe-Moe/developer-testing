import { BedroomIcon } from "@/components/Icons/BedroomIcon";
import { Loading } from "@/components/Icons/Loading";
import { TProperty } from "@/types/TProperty";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

interface PropertyCardProps {
  item: TProperty;
}

const PropertyCard: FC<PropertyCardProps> = ({ item }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col md:gap-8 gap-5">
      <div className="max-w-sm w-full sm:w-full lg:w-full">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden relative">
          <Link href={"/property/" + item.id}>
            {loading && (
              <div className="w-[394px] h-[384px] bg-gray-300 animate-pulse absolute left-0 top-0 flex items-center justify-center">
                <Loading className="w-10 h-10" />
              </div>
            )}
            <Image
              src={item.thumbnail}
              width={394}
              height={394}
              className="w-full h-full object-cover"
              alt="Property IMG"
              loading="lazy"
              onLoad={() => setLoading(false)}
            />
          </Link>
          <Link href={"/property/" + item.id}>
            <div className="p-4">
              <p className="uppercase tracking-wide text-sm font-bold text-gray-700 line-clamp-1">
                {item.propertyType} • {item.type}
              </p>
              <p className="text-3xl text-gray-900 py-1">
                {"$" + item.price.toLocaleString("en-us")}
              </p>
              <p className="text-gray-700 line-clamp-1">{item.title}</p>
            </div>
            <div className="flex p-4 border-t border-gray-300 text-gray-700">
              <div className="flex-1 inline-flex items-center">
                <BedroomIcon className="w-6 h-6 mr-3 text-gray-600" />
                <p>
                  <span className="text-gray-900 font-bold">
                    {item.bedroom}
                  </span>{" "}
                  Bedroom{item.bedroom > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex-1 inline-flex justify-end items-center">
                <svg
                  className="h-6 w-6 text-gray-600 fill-current mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M27 22.142V9.858A3.992 3.992 0 1 0 22.142 5H9.858A3.992 3.992 0 1 0 5 9.858v12.284A3.992 3.992 0 1 0 9.858 27h12.284A3.992 3.992 0 1 0 27 22.142M26 4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16.142-3H9.858A4 4 0 0 0 7 22.142V9.858A4 4 0 0 0 9.858 7h12.284A4 4 0 0 0 25 9.858v12.284A3.99 3.99 0 0 0 22.142 25M26 28a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2"
                  />
                </svg>
                <p>
                  <span className="text-gray-900 font-bold">{item.area}</span>{" "}
                  sqft
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

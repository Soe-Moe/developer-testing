"use server";


import { APP_URL } from "@/config/app";
import { redirect } from "next/navigation";


const getURL = () => {
  let url = APP_URL;

  // Make sure to include https:// when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing /.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

export const searchHandler = async (formData: FormData) => {
  const key = formData.get("keyword"),
    sort = formData.get("sort"),
    price = formData.get("price_range"),
    area = formData.get("area_range"),
    type = formData.get("type"),
    property_type = formData.get("property_type");

  let url = "";
  if (key) {
    url += "?keyword=" + key;
  }
  if (sort) {
    url += (url ? "&" : "?") + "sort=" + sort;
  }
  if (price) {
    url += (url ? "&" : "?") + "price_range=" + price;
  }
  if (area) {
    url += (url ? "&" : "?") + "area_range=" + area;
  }
  if (type) {
    url += (url ? "&" : "?") + "type=" + type;
  }
  if (property_type) {
    url += (url ? "&" : "?") + "property_type=" + property_type;
  }

  return redirect(getURL() + "search" + url);
};

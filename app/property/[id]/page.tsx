import React, { FC, Suspense } from "react";
import ItemSection from "@/containers/property-page/item-section";
import type { Metadata } from "next";

interface PropertiesProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: 'Detail | ' + process.env.APP_NAME,
  description: "Property detail page.",
};

const Property: FC<PropertiesProps> = ({ params }) => {
  return (
    <main>
      <Suspense>
        <ItemSection propertyId={params.id} />
      </Suspense>
    </main>
  );
};

export default Property;

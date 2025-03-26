import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>Product {params.id}</div>;
};

export default page;

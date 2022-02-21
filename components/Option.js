import React from "react";
import { useRouter } from "next/router";

function Option() {
  const router = useRouter();
  console.log(router.query);
  return <div>{router.query.optionId}</div>;
}

export default Option;

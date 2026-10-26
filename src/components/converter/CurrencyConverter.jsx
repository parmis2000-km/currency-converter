import { useState } from "react";
import RialSection from "./RialSection";
import DollarSection from "./DollarSection";
import Header from "./Header";

export default function CurrencyConverter() {
  const [isRial, setIsRial] = useState(true);

  return (
    <>
      <Header isRial={isRial} setIsRial={setIsRial} />
      {isRial ? <RialSection /> : <DollarSection />}
    </>
  );
}

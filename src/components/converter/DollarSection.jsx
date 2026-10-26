import { useState } from "react";
import ToDollarForm from "./ToDollarForm";
import Result from "./Result";

export default function DollarSection() {
  const [convertedAmount, setConvertedAmount] = useState({
    finalDollar: null,
    initialDollar: null,
    initialRial: null,
  });
  return (
    <main
      className={`flex flex-col justify-center items-start pt-15 w-full min-h-screen`}
    >
      <h1 className="w-full mb-6 text-center text-2xl font-bold tracking-tight text-teal-800 sm:text-3xl">
        تبدیل ریال به دلار
      </h1>

      <ToDollarForm
        convertedAmount={convertedAmount}
        setConvertedAmount={setConvertedAmount}
      />
      <Result
        status={"dollar"}
        dollar={"ریال به دلار"}
        convertedAmount={convertedAmount}
      />
    </main>
  );
}

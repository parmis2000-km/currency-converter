import { useState } from "react";
import ToRialForm from "./ToRialForm.jsx";
import Result from "./Result.jsx";

export default function RialSection() {
  const [convertedAmount, setConvertedAmount] = useState({
    finalToman: null,
    finalRial: null,
    initialDollar: null,
    initialRial: null,
  });

  return (
    <main className="flex flex-col justify-center items-start pt-15 w-full min-h-screen">
      <h1 className="w-full mb-6 text-center text-2xl font-bold tracking-tight text-teal-800 sm:text-3xl">
        تبدیل دلار به ریال
      </h1>

      <ToRialForm
        convertedAmount={convertedAmount}
        setConvertedAmount={setConvertedAmount}
      />

      <Result
        status={"rial"}
        convertedAmount={convertedAmount}
        rial={"دلار به ریال"}
      />
    </main>
  );
}

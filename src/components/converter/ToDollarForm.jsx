import { useState } from "react";
import { converter } from "../../schema/convertSchema";
import toDollar from "../../utils/toDollar";
import ButtonUi from "../ui/Button";

export default function ToDollarForm({ convertedAmount, setConvertedAmount }) {
  const [zod, setZod] = useState({
    dollar: [],
    rial: [],
  });

  const disableResetBtn =
    !convertedAmount.finalDollar &&
    !convertedAmount.initialDollar &&
    !convertedAmount.initialRial;

  const disableCalculateBtn =
    !convertedAmount.initialDollar || !convertedAmount.initialRial;

  const handleOnsubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);

    const rialNum = formdata.get("rial");
    const dollarNum = formdata.get("dollar");

    if (dollarNum === "") {
      setZod({
        dollar: ["فیلد نمیتواند خالی باشد."],
      });
      return;
    }

    if (rialNum === "") {
      setZod({
        rial: ["فیلد نمیتواند خالی باشد."],
      });
      return;
    }

    const rial = Number(rialNum);
    const dollar = Number(dollarNum);
    const parsedData = converter.safeParse({ dollar, rial });

    if (!parsedData.success) {
      setZod(parsedData.error?.flatten()?.fieldErrors);
      return;
    }

    const finalResult = toDollar(parsedData.data.dollar, parsedData.data.rial);

    setConvertedAmount({
      initialDollar: parsedData.data.dollar,
      initialRial: parsedData.data.rial,
      finalDollar: finalResult,
    });

    setZod({ dollar: [], rial: [] });
  };
  return (
    <form
      className="space-y-5 flex flex-col justify-between w-full min-w-70 max-w-100 mx-auto h-76"
      onSubmit={handleOnsubmit}
    >
      <div>
        <label
          htmlFor="rial"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          مبلغ به ریال
        </label>
        <input
          id="rial"
          name="rial"
          type="number"
          value={convertedAmount.initialRial || ""}
          onChange={(e) =>
            setConvertedAmount((prev) => ({
              ...prev,
              initialRial: e.target.value,
              finalDollar: null,
            }))
          }
          placeholder="مبلغ را وارد کنید"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-600"
        />
        {zod?.rial?.length > 0 && (
          <p className="text-[12px] text-red-500 mt-3">{zod?.rial?.[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="dollar"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          نرخ هر دلار به ریال
        </label>
        <input
          id="dollar"
          name="dollar"
          type="number"
          value={convertedAmount.initialDollar || ""}
          onChange={(e) =>
            setConvertedAmount((prev) => ({
              ...prev,
              initialDollar: e.target.value,
              finalDollar: null,
            }))
          }
          placeholder="نرخ دلار را وارد کنید"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-600"
        />
        {zod?.dollar?.length > 0 && (
          <p className="text-[12px] text-red-500 mt-3">{zod?.dollar?.[0]}</p>
        )}
      </div>

      <div className="flex w-full items-center justify-center gap-3">
        <ButtonUi
          disabled={disableCalculateBtn}
          type={"submit"}
          children={"محاسبه"}
          className={
            disableCalculateBtn
              ? "bg-teal-700/70 hover:bg-teal-700/70 hover:shadow-none"
              : "bg-teal-700 cursor-pointer hover:bg-teal-800 hover:shadow-md active:scale-[0.98]"
          }
        />
        <ButtonUi
          disabled={disableResetBtn}
          children={"بازنشانی"}
          type={"button"}
          onClick={() => {
            setZod({
              dollar: [],
              rial: [],
            });

            setConvertedAmount({
              finalDollar: null,

              initialDollar: null,
              initialRial: null,
            });
          }}
          className={
            disableResetBtn
              ? "text-gray-400 border-gray-300 hover:border-gray-300 hover:bg-white hover:text-gray-400"
              : "bg-white text-gray-700 border-gray-700 cursor-pointer hover:border-teal-700 hover:bg-teal-50 hover:text-teal-800 active:scale-[0.98]"
          }
        />
      </div>
    </form>
  );
}

export default function Result({ status, convertedAmount, rial, dollar }) {
  return (
    <>
      <div className="mt-5 rounded-lg bg-gray-100 p-4 text-center h-22 w-full min-w-70 max-w-100 mx-auto">
        {status === "dollar" && (
          <div>
            <div className="text-sm text-gray-500 ">
              {convertedAmount.initialRial !== null ? (
                <p>
                  نتیجه تبدیل{" "}
                  {Number(convertedAmount.initialRial).toLocaleString("fa-IR")}{" "}
                  {dollar}
                </p>
              ) : (
                <p>لطفا مبلغ را وارد نمایید.</p>
              )}
            </div>
            {convertedAmount.finalDollar && (
              <p className="mt-2 text-xl font-bold text-gray-800">
                {convertedAmount.finalDollar.toLocaleString("fa-IR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                دلار
              </p>
            )}
          </div>
        )}
        {status === "rial" && (
          <div>
            <div className="text-sm text-gray-500">
              {convertedAmount.initialDollar !== null ? (
                <p>
                  نتیجه تبدیل{" "}
                  {Number(convertedAmount.initialDollar).toLocaleString(
                    "fa-IR",
                  )}{" "}
                  {rial}
                </p>
              ) : (
                <p>لطفا مبلغ را وارد نمایید.</p>
              )}
            </div>
            {convertedAmount.finalRial && (
              <p className="mt-2 text-xl font-bold text-gray-800">
                {convertedAmount.finalRial.toLocaleString("fa-IR")} ریال، معادل{" "}
                {convertedAmount.finalToman.toLocaleString("fa-IR")} تومان
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default function Header({ isRial, setIsRial }) {
  return (
    <header className="mt-7 flex w-full justify-center fixed top-0 left-0 right-0">
      <div className="flex w-full min-w-70 max-w-md mx-auto rounded-xl bg-gray-100 p-1.5">
        <button
          type="button"
          onClick={() => setIsRial(false)}
          className={`flex-1 cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
            !isRial
              ? "bg-teal-700 text-white shadow-sm"
              : "text-gray-600 hover:bg-white hover:text-teal-800"
          }`}
        >
          ریال به دلار
        </button>

        <button
          type="button"
          onClick={() => setIsRial(true)}
          className={`flex-1 cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
            isRial
              ? "bg-teal-700 text-white shadow-sm"
              : "text-gray-600 hover:bg-white hover:text-teal-800"
          }`}
        >
          دلار به ریال
        </button>
      </div>
    </header>
  );
}

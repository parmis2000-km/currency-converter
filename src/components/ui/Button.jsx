import { twMerge } from "tailwind-merge";

export default function ButtonUi({
  type,
  disabled,
  onClick,
  children,
  className,
}) {
  return (

      <button
        disabled={disabled}
        type={type}
        className={twMerge(
          `w-full rounded-xl text-white px-4 py-3 font-semibold transition-all duration-200 `,
          className,
        )}
        onClick={onClick}
      >
        {children}
      </button>
  
  );
}

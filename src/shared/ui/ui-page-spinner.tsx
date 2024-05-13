import clsx from "clsx";
import { UiSpinner } from "./ui-spinner";

export function UiPageSpinner({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-200",
        className,
      )}
    >
      <UiSpinner className="text-cyan-500 w-24 h-24" />
    </div>
  );
}

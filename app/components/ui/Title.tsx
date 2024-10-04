import { UiProps } from "@/app/types";

export default function Title({ children }: UiProps) {
  return (
    <h1 className="flex gap-2 text-4xl font-bold border-b-2 border-black">
      {children}
    </h1>
  );
}

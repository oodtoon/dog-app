import { UiProps } from "@/app/types";

export default function Ul({ children }: UiProps) {
  return <ul className="mx-4 list-disc">{children}</ul>;
}

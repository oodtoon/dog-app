import { UiProps } from "@/app/types";

export default function Header({ children }: UiProps) {
  return <h2 className="text-2xl font-bold underline">{children}</h2>;
}

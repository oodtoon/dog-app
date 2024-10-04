import { UiProps } from "@/app/types";

export default function Section({ children, id }: UiProps) {
  return (
    <section id={id} className="grid gap-4 m-2">
      {children}
    </section>
  );
}

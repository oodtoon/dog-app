import PawFilledIcon from "./icons/Paw";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Areas for Improvement", href: "/areas-for-improvement" },
  { label: "For Jon Haarmann", href: "/for-jon-haarmann" },
];

export default function Nav() {
  return (
    <nav className="flex flex-row flex-wrap justify-between m-4 text-foreground font-bold bg-tertiary p-2 rounded-lg max-w-4xl md:flex-row md:m-auto">
      <a href="/" className="flex gap-2 items-center hover:text-secondary">
        Dog Finder <PawFilledIcon />
      </a>
      <div className="flex flex-col gap-2 flex-wrap sm:flex-row">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="underline hover:text-secondary text-lg"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

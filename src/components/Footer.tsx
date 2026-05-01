import Link from "next/link";
import JCMLogo from "@/components/JCMLogo";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full py-20 bg-surface-container-high border-t border-outline-variant/15">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-[1440px] mx-auto gap-8">
        <JCMLogo className="h-6 w-auto opacity-50 grayscale" />

        <p className="font-body text-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} JCM Software. Built with
          Architectural Precision.
        </p>

        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

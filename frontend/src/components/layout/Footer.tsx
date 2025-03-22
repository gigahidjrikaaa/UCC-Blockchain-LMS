import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-4 px-6 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-600 dark:text-slate-400">
          © 2025 Universitas Gadjah Mada - UCC Blockchain Initiative
        </div>
        <div className="flex gap-6">
          <Link
            href="/about"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
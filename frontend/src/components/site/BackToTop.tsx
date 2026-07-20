import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
       className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-background shadow-lg transition-all duration-500 hover:bg-brand hover:text-white ${
         show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
       }`}
     >
       <ArrowUp className="h-5 w-5" />
    </button>
  );
}

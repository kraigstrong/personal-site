import Image from "next/image";

// Small square marks for each project. App icons are used where they exist;
// Keepsake and Photoframe get vector stand-ins.

export function ProjectIcon({ id, name, size = 48 }: { id: string; name: string; size?: number }) {
  const box = "shrink-0 overflow-hidden rounded-[22%] ring-1 ring-black/5 dark:ring-white/10";
  const style = { width: size, height: size };
  switch (id) {
    case "time-tutor":
      return <Image src="/projects/time-tutor/icon.svg" alt="" width={size} height={size} className={box} unoptimized />;
    case "math-reef":
      return <Image src="/projects/math-reef/icon.svg" alt="" width={size} height={size} className={box} unoptimized />;
    case "bigger-fish":
      return <Image src="/projects/bigger-fish/icon.png" alt="" width={size} height={size} className={box} />;
    case "brightbench":
      return (
        <span className={`${box} flex items-end justify-center bg-[#F6EFE3]`} style={style}>
          <Image src="/projects/brightbench/fox.png" alt="" width={size * 1.5} height={size} className="max-w-none translate-y-[6%]" />
        </span>
      );
    case "double-putt":
      return <Image src="/projects/double-putt/icon.png" alt="" width={size} height={size} className={box} />;
    case "keepsake":
      return (
        <span className={`${box} flex items-center justify-center bg-[#211F1B]`} style={style} aria-hidden="true">
          <svg viewBox="0 0 1024 1024" width={size} height={size}>
            <path d="M352 310h320v404L512 617 352 714Z" fill="#F5F1EA" />
          </svg>
        </span>
      );
    case "photoframe":
      return (
        <span className={`${box} flex items-center justify-center bg-[#1E5B33]`} style={style} aria-hidden="true">
          <svg viewBox="0 0 48 48" width={size * 0.62} height={size * 0.62} fill="none">
            <rect x="9" y="6" width="30" height="36" rx="3" stroke="#FBFAF6" strokeWidth="3" />
            <rect x="14" y="11" width="20" height="20" rx="1.5" fill="#FBFAF6" opacity="0.25" />
            <path d="m14 28 6-6 4 4 3-3 7 7" stroke="#FBFAF6" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M17 36h14" stroke="#FBFAF6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </span>
      );
    default:
      return <span className={`${box} bg-surface-2`} style={style} aria-label={name} />;
  }
}

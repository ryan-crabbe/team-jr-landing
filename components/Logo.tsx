import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps): React.ReactNode {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Placeholder logo - replace with actual logo */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
        JR
      </div>
      <span className="text-xl font-bold text-white">Team Just Respect</span>
    </Link>
  );
}

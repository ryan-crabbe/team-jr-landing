import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps): React.ReactNode {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-black",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
}

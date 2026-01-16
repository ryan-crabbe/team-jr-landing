import Link from "next/link";
import type { TeamMember } from "@/lib/team-data";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps): React.ReactNode {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block overflow-hidden rounded-xl bg-jr-dark-gray transition-all duration-300 hover:scale-105 hover:bg-white/10"
    >
      {/* Headshot Placeholder */}
      <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-blue-900 to-black">
        <div className="flex h-full w-full items-center justify-center">
          {/* Placeholder initials */}
          <span className="text-6xl font-bold text-white/20">
            {member.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-orange-500">
          {member.name}
        </h3>
        <p className="text-sm text-gray-400">{member.role}</p>
      </div>
    </Link>
  );
}

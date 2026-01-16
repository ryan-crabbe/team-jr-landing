export interface TeamMember {
  name: string;
  role: "Director" | "Coach";
  slug: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jimpee Saunders",
    role: "Director",
    slug: "jimpee-saunders",
    bio: "Program Director with years of experience developing young athletes. Committed to building character and basketball skills in every player.",
  },
  {
    name: "Randy Masilang",
    role: "Director",
    slug: "randy-masilang",
    bio: "Program Director focused on creating opportunities for youth basketball players. Dedicated to fostering teamwork and respect.",
  },
  {
    name: "Aba",
    role: "Coach",
    slug: "aba",
    bio: "Coach Aba brings energy and expertise to every practice. Specializes in developing fundamental skills and game IQ.",
  },
  {
    name: "Justin",
    role: "Coach",
    slug: "justin",
    bio: "Coach Justin is passionate about player development and helping athletes reach their full potential on and off the court.",
  },
  {
    name: "Rock",
    role: "Coach",
    slug: "rock",
    bio: "Coach Rock emphasizes defense and discipline. Known for building strong team chemistry and competitive spirit.",
  },
  {
    name: "Jaden",
    role: "Coach",
    slug: "jaden",
    bio: "Coach Jaden connects with players and brings a modern approach to skill development and basketball strategy.",
  },
  {
    name: "Dar",
    role: "Coach",
    slug: "dar",
    bio: "Coach Dar focuses on conditioning and athletic development. Helps players build the physical foundation for success.",
  },
  {
    name: "Henry",
    role: "Coach",
    slug: "henry",
    bio: "Coach Henry is dedicated to teaching the game the right way. Emphasizes hard work, respect, and continuous improvement.",
  },
  {
    name: "Ryan",
    role: "Coach",
    slug: "ryan",
    bio: "Coach Ryan brings strategic insight and a player-first mentality. Committed to developing well-rounded athletes.",
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

export function getAllSlugs(): string[] {
  return teamMembers.map((member) => member.slug);
}

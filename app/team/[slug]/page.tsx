import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTeamMember, getAllSlugs } from "@/lib/team-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function TeamMemberPage({
  params,
}: PageProps): Promise<React.ReactNode> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-black pt-24">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Back Link */}
          <Link
            href="/team"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-orange-500"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Team
          </Link>

          {/* Profile Card */}
          <div className="overflow-hidden rounded-2xl bg-jr-dark-gray">
            <div className="flex flex-col md:flex-row">
              {/* Headshot */}
              <div className="aspect-square w-full bg-gradient-to-br from-blue-900 to-black md:w-1/3">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-8xl font-bold text-white/20">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                <span className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-500">
                  {member.role}
                </span>
                <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  {member.name}
                </h1>
                <p className="text-lg leading-relaxed text-gray-300">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

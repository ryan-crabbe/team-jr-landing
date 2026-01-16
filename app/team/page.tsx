import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/lib/team-data";

export default function TeamPage(): React.ReactNode {
  const directors = teamMembers.filter((m) => m.role === "Director");
  const coaches = teamMembers.filter((m) => m.role === "Coach");

  return (
    <>
      <Header />

      <main className="min-h-screen bg-black pt-24">
        <div className="mx-auto max-w-6xl px-6 py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Our Team
            </h1>
            <p className="text-lg text-gray-400">
              Meet the people behind Team Just Respect
            </p>
          </div>

          {/* Directors Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-semibold text-orange-500">
              Program Directors
            </h2>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
              {directors.map((member) => (
                <TeamCard key={member.slug} member={member} />
              ))}
            </div>
          </section>

          {/* Coaches Section */}
          <section>
            <h2 className="mb-8 text-center text-2xl font-semibold text-orange-500">
              Coaches
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coaches.map((member) => (
                <TeamCard key={member.slug} member={member} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

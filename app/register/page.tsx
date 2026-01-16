import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Team Just Respect",
  description: "Contact Team Just Respect to register or learn more about our AAU basketball program.",
};

interface DirectorContact {
  name: string;
  role: string;
  phone: string;
  email: string;
}

const directors: DirectorContact[] = [
  {
    name: "Jimpee Saunders",
    role: "Program Director",
    phone: "(555) 123-4567", // Placeholder
    email: "jimpee@teamjustrespect.com", // Placeholder
  },
  {
    name: "Randy Masilang",
    role: "Program Director",
    phone: "(555) 987-6543", // Placeholder
    email: "randy@teamjustrespect.com", // Placeholder
  },
];

export default function RegisterPage(): React.ReactNode {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black pt-24">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-gray-400">
              Interested in joining Team Just Respect? Reach out to our program
              directors.
            </p>
          </div>

          {/* Director Cards */}
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            {directors.map((director) => (
              <div
                key={director.name}
                className="rounded-xl bg-jr-dark-gray p-6"
              >
                <h3 className="mb-1 text-xl font-semibold text-white">
                  {director.name}
                </h3>
                <p className="mb-4 text-sm text-orange-500">{director.role}</p>

                <div className="space-y-3">
                  {/* Phone */}
                  <a
                    href={`tel:${director.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white"
                  >
                    <svg
                      className="h-5 w-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {director.phone}
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${director.email}`}
                    className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white"
                  >
                    <svg
                      className="h-5 w-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {director.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Section */}
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Follow Us
            </h2>
            <Link
              href="https://instagram.com/teamjustrespect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-all hover:scale-105"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @teamjustrespect
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

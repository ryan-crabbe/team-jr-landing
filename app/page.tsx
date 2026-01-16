import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import Button from "@/components/Button";

export default function Home(): React.ReactNode {
  return (
    <>
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative flex min-h-screen items-center justify-center">
        <VideoBackground />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Team Just Respect
          </h1>
          <p className="mb-10 text-lg text-gray-300 md:text-xl">
            Building champions on and off the court
          </p>
          <Button href="/register" variant="primary">
            Register Now
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      <Footer />
    </>
  );
}

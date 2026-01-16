import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Set your Google Calendar ID in .env.local
// NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your_calendar_id_here
const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID ?? "your_calendar_id_here";

export default function CalendarPage(): React.ReactNode {
  const calendarSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}&ctz=America%2FLos_Angeles&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&bgcolor=%230a0a0a`;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-black pt-24">
        <div className="mx-auto max-w-6xl px-6 py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Calendar
            </h1>
            <p className="text-lg text-gray-400">
              Stay up to date with practices, games, and events
            </p>
          </div>

          {/* Google Calendar Embed */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-jr-dark-gray">
            <iframe
              src={calendarSrc}
              className="h-[600px] w-full md:h-[700px]"
              frameBorder="0"
              scrolling="no"
              title="Team Just Respect Calendar"
            />
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Click on an event to see details and add it to your personal calendar
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

import { EventCard } from "@/components/shared/EventCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 px-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

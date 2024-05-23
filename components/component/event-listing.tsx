import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { SVGProps } from "react"
import { slugify } from "@/utils/slugify"

const events = [
  {
    "name": "Music Festival 2023",
    "date": "June 15, 2023",
    "description": "Join us for a weekend of live music, food, and fun at the annual Music Festival.",
    "imageSrc": "/placeholder.svg"
  },
  {
    "name": "Art Exhibit Opening",
    "date": "July 1, 2023",
    "description": "Explore the latest works from local and international artists at our art exhibit opening.",
    "imageSrc": "/placeholder.svg"
  },
  {
    "name": "Business Networking Event",
    "date": "August 10, 2023",
    "description": "Connect with other professionals and expand your business connections.",
    "imageSrc": "/placeholder.svg"
  },
  {
    "name": "Cooking Workshop",
    "date": "September 5, 2023",
    "description": "Learn new culinary skills and techniques from our expert chefs.",
    "imageSrc": "/placeholder.svg"
  },
  {
    "name": "Tech Conference",
    "date": "October 20, 2023",
    "description": "Explore the latest trends and innovations in the tech industry.",
    "imageSrc": "/placeholder.svg"
  },
  {
    "name": "Wellness Retreat",
    "date": "November 1, 2023",
    "description": "Rejuvenate your mind and body at our wellness retreat.",
    "imageSrc": "/placeholder.svg"
  },
  {
    "name": "Holiday Craft Fair",
    "date": "December 10, 2023",
    "description": "Browse unique handmade crafts and gifts at our annual holiday fair.",
    "imageSrc": "/placeholder.svg"
  },
  {
    "name": "Photography Workshop",
    "date": "January 15, 2024",
    "description": "Improve your photography skills with our expert-led workshop.",
    "imageSrc": "/placeholder.svg"
  }
]

// events.forEach(event => {
//   const slug = slugify(event.name);
//   const eventUrl = `/events/${slug}`;
//   console.log(eventUrl);
//   // Output: /events/music-festival-123 and /events/music-festival-456
// });

export function EventListing() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="grid gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Upcoming Events</h1>
            <p className="text-gray-500 dark:text-gray-400">Discover the latest events in your area.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <FilterIcon className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Event Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Concert</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Workshop</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Conference</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <ListIcon className="w-4 h-4 mr-2" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value="date-asc">
                  <DropdownMenuRadioItem value="date-asc">Date: Ascending</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="date-desc">Date: Descending</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <CatIcon className="w-4 h-4 mr-2" />
                  Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Event Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Music</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Arts</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Business</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

{/* MAPPING OVER THE EVENT LIST */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border-2">

              {/* LINK TO INDIVIDUAL PAGES HERE */}
              <Link className="absolute inset-0 z-10" href={"events/" + slugify(event.name) + "-" + index}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                alt="Event Image"
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                height={300}
                src={event.imageSrc}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">{event.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {event.description.slice(0, 100)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SVG ICONS FOR THE DROPDOWN MENU

function CatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}

function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

function ListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}

// import { useRouter } from 'next/router';
// // import { getEventById } from '../../lib/api'; // Assumed API function to fetch event by ID

// const EventDetails = async ({ params }) => {
//   const { slug, id } = params;
//   const event = await getEventById(id);

//   if (!event) {
//     // Handle event not found (e.g., return a 404 page)
//     return <div>Event not found</div>;
//   }

//   return (
//     <div>
//       <h1>{event.name}</h1>
//       <p>{event.description}</p>
//       {/* Render other event details */}
//     </div>
//   );
// };

// export default EventDetails;


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9z53KLFm52M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
// import { ResponsiveHeatMap } from "@nivo/heatmap"
import { SVGProps } from "react"
import { EventCard } from "@/components/shared/EventCard"

export default function Component() {
  return (
    <>
{/*     
      <header className="bg-gray-900 text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Events</h1>
          <nav className="hidden md:flex items-center space-x-4">
            <Link className="hover:underline" href="#">
              Upcoming
            </Link>
            <Link className="hover:underline" href="#">
              Past
            </Link>
            <Link className="hover:underline" href="#">
              Trending
            </Link>
          </nav>
        </div>
      </header> */}
      <main className="container mx-auto my-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              alt="Event Banner"
              className="w-full rounded-lg object-cover"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
            <h2 className="text-3xl font-bold mt-6">Annual Tech Conference</h2>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span>June 15, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-gray-500" />
                <span>9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
              <Link className="text-blue-500 hover:underline" href="#">
                123 Main St, Anytown USA
              </Link>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Organizer</h3>
              <div className="flex items-center space-x-2 mt-2">
                <img alt="Organizer Avatar" className="h-8 w-8 rounded-full" src="/placeholder.svg" />
                <span>John Doe</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Ticket Types</h3>
              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <span>Early Bird</span>
                  <span>$99</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Regular</span>
                  <span>$149</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>VIP</span>
                  <span>$249</span>
                </div>
                <Link href={"/payment"}><Button className="w-full">Buy Tickets</Button></Link>
                
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">About the Event</h3>
            <p className="mt-4 text-gray-700 dark:text-gray-400">
              Join us for the annual tech conference, where industry leaders and innovators come together to share their
              insights and explore the latest trends in technology. This year's event promises to be informative,
              inspiring, and full of networking opportunities.
            </p>
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Agenda</h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-400">
                <li>Keynote Presentation: The Future of Technology</li>
                <li>Panel Discussion: Navigating the Startup Ecosystem</li>
                <li>Breakout Sessions: Emerging Technologies</li>
                <li>Networking Lunch</li>
                <li>Closing Remarks and Q&A</li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Speakers</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-center">
                  <img alt="Speaker 1" className="h-20 w-20 rounded-full" src="/placeholder.svg" />
                  <span className="mt-2 text-gray-700 dark:text-gray-400">Jane Doe</span>
                  <span className="text-gray-500 text-sm">CEO, Acme Inc.</span>
                </div>
                <div className="flex flex-col items-center">
                  <img alt="Speaker 2" className="h-20 w-20 rounded-full" src="/placeholder.svg" />
                  <span className="mt-2 text-gray-700 dark:text-gray-400">John Smith</span>
                  <span className="text-gray-500 text-sm">CTO, Tech Innovations</span>
                </div>
                <div className="flex flex-col items-center">
                  <img alt="Speaker 3" className="h-20 w-20 rounded-full" src="/placeholder.svg" />
                  <span className="mt-2 text-gray-700 dark:text-gray-400">Sarah Lee</span>
                  <span className="text-gray-500 text-sm">Head of Product, Startup X</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 place-items-center">
                <img alt="Sponsor 1" className="h-16 w-auto" src="/placeholder.svg" />
                <img alt="Sponsor 2" className="h-16 w-auto" src="/placeholder.svg" />
                <img alt="Sponsor 3" className="h-16 w-auto" src="/placeholder.svg" />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Additional Information</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-400">
                Dress code: Business casual
                <br />
                Parking: Free parking available on-site
                <br />
                Accessibility: The venue is wheelchair accessible
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              alt="Gallery 1"
              className="w-full rounded-lg object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <img
              alt="Gallery 2"
              className="w-full rounded-lg object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <img
              alt="Gallery 3"
              className="w-full rounded-lg object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <img
              alt="Gallery 4"
              className="w-full rounded-lg object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Reviews and Ratings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent>
                <div className="flex items-center space-x-2 mt-4">
                  <img alt="Reviewer Avatar" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                  <div>
                    <h4 className="font-bold">Jane Doe</h4>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700  dark:text-gray-400">
                  "This was an amazing event! The speakers were informative and engaging, and I made some great
                  connections. Highly recommended!"
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
                <div className="flex items-center space-x-2 mt-4">
                  <img alt="Reviewer Avatar" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5 text-gray-300" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-400">
                  "The event was well-organized and the venue was great. I enjoyed the networking opportunities and
                  learned a lot from the presentations."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center space-x-2 mt-4">
                  <img alt="Reviewer Avatar" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
                  <div>
                    <h4 className="font-bold">Sarah Lee</h4>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5 text-gray-300" />
                      <StarIcon className="h-5 w-5 text-gray-300" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-400">
                  "The event was a good value for the price. The content was informative, and I made some valuable
                  connections. I would consider attending again next year."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <img
                alt="Related Event 1"
                className="w-full rounded-t-lg object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent>
                <h3 className="text-lg font-bold pt-4">Tech Meetup</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Join us for a casual meetup to discuss the latest trends in technology.
                </p>
                <div className="flex items-center space-x-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <span>June 1, 2023</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <MapPinIcon className="h-5 w-5 text-gray-500" />
                  <span>123 Main St, Anytown USA</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Related Event 2"
                className="w-full rounded-t-lg object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent>
                <h3 className="text-lg font-bold pt-4">Design Workshop</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">Learn from industry experts and hone your design skills.</p>
                <div className="flex items-center space-x-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <span>July 15, 2023</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <MapPinIcon className="h-5 w-5 text-gray-500" />
                  <span>456 Oak St, Anytown USA</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Related Event 3"
                className="w-full rounded-t-lg object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent>
                <h3 className="text-lg font-bold pt-4">Startup Pitch Competition</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Watch as entrepreneurs pitch their innovative ideas to a panel of judges.
                </p>
                <div className="flex items-center space-x-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <span>August 1, 2023</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <MapPinIcon className="h-5 w-5 text-gray-500" />
                  <span>789 Oak St, Anytown USA</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Event Location</h2>
          <div className="rounded-lg overflow-hidden">
            <HeatmapChart className="aspect-[4/3]" />
          </div>
        </div>
      </section> */}
    </>
  )
}



// SVG ICONS HERE   

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


// function HeatmapChart(props: SVGProps<SVGSVGElement>) {
//   return (
//     <div {...props}>
//       <ResponsiveHeatMap
//         data={[
//           {
//             id: "A",
//             data: [
//               {
//                 x: "1",
//                 y: 4415,
//               },
//               {
//                 x: "2",
//                 y: -59456,
//               },
//               {
//                 x: "3",
//                 y: -79886,
//               },
//               {
//                 x: "4",
//                 y: 14478,
//               },
//               {
//                 x: "5",
//                 y: -63874,
//               },
//               {
//                 x: "6",
//                 y: -47542,
//               },
//               {
//                 x: "7",
//                 y: 16635,
//               },
//               {
//                 x: "8",
//                 y: -30278,
//               },
//               {
//                 x: "9",
//                 y: -95178,
//               },
//             ],
//           },
//           {
//             id: "B",
//             data: [
//               {
//                 x: "1",
//                 y: 41241,
//               },
//               {
//                 x: "2",
//                 y: -77516,
//               },
//               {
//                 x: "3",
//                 y: -19422,
//               },
//               {
//                 x: "4",
//                 y: 61220,
//               },
//               {
//                 x: "5",
//                 y: -65044,
//               },
//               {
//                 x: "6",
//                 y: -59254,
//               },
//               {
//                 x: "7",
//                 y: 9299,
//               },
//               {
//                 x: "8",
//                 y: -58470,
//               },
//               {
//                 x: "9",
//                 y: 51828,
//               },
//             ],
//           },
//           {
//             id: "C",
//             data: [
//               {
//                 x: "1",
//                 y: 94426,
//               },
//               {
//                 x: "2",
//                 y: 31248,
//               },
//               {
//                 x: "3",
//                 y: -15766,
//               },
//               {
//                 x: "4",
//                 y: 22271,
//               },
//               {
//                 x: "5",
//                 y: 86246,
//               },
//               {
//                 x: "6",
//                 y: -23717,
//               },
//               {
//                 x: "7",
//                 y: 97595,
//               },
//               {
//                 x: "8",
//                 y: -69800,
//               },
//               {
//                 x: "9",
//                 y: 74453,
//               },
//             ],
//           },
//           {
//             id: "D",
//             data: [
//               {
//                 x: "1",
//                 y: -49899,
//               },
//               {
//                 x: "2",
//                 y: 13864,
//               },
//               {
//                 x: "3",
//                 y: -45673,
//               },
//               {
//                 x: "4",
//                 y: -20270,
//               },
//               {
//                 x: "5",
//                 y: 99430,
//               },
//               {
//                 x: "6",
//                 y: 17283,
//               },
//               {
//                 x: "7",
//                 y: -6514,
//               },
//               {
//                 x: "8",
//                 y: -21766,
//               },
//               {
//                 x: "9",
//                 y: -52610,
//               },
//             ],
//           },
//           {
//             id: "E",
//             data: [
//               {
//                 x: "1",
//                 y: 81123,
//               },
//               {
//                 x: "2",
//                 y: -25153,
//               },
//               {
//                 x: "3",
//                 y: 2577,
//               },
//               {
//                 x: "4",
//                 y: 24409,
//               },
//               {
//                 x: "5",
//                 y: 82923,
//               },
//               {
//                 x: "6",
//                 y: 51283,
//               },
//               {
//                 x: "7",
//                 y: 10208,
//               },
//               {
//                 x: "8",
//                 y: 4055,
//               },
//               {
//                 x: "9",
//                 y: -14699,
//               },
//             ],
//           },
//         ]}
//         margin={{ top: 0, right: 10, bottom: 30, left: 30 }}
//         axisTop={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         colors={{
//           type: "sequential",
//           scheme: "blue_green",
//         }}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//         }}
//         role="application"
//         ariaLabel="A heatmap chart/matrix"
//       />
//     </div>
//   )
// }


function MapPinIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function StarIcon(props: SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

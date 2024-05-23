/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xTlkeJa3w5X
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-950 text-white py-4 px-6 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="#">
              <FlagIcon className="h-8 w-8" />
            </Link>
            <h1 className="text-xl font-bold">Checkout</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-6 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Ticket</span>
                <span>$99.00</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span>2</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$198.00</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Billing Information</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip</Label>
                  <Input id="zip" placeholder="10001" />
                </div>
              </form>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Payment Method</h2>
              <RadioGroup className="grid grid-cols-3 gap-4" defaultValue="card">
                <div>
                  <RadioGroupItem className="peer sr-only" id="card" value="card" />
                  <Label
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="card"
                  >
                    <CreditCardIcon className="mb-3 h-6 w-6" />
                    Card
                  </Label>
                </div>
                <div>
                  <RadioGroupItem className="peer sr-only" id="paypal" value="paypal" />
                  <Label
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="paypal"
                  >
                    <WalletCardsIcon className="mb-3 h-6 w-6" />
                    Wallet
                  </Label>
                </div>
                <div>
                  <RadioGroupItem className="peer sr-only" id="apple" value="apple" />
                  <Label
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="apple"
                  >
                    <DollarSignIcon className="mb-3 h-6 w-6" />
                    Cash
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Promotional Code</h2>
              <div className="flex space-x-2">
                <Input placeholder="Enter code" />
                <Button>Apply</Button>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Review and Confirm</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Ticket</span>
                  <span>$99.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>2</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$198.00</span>
                </div>
              </div>
              <div className="mt-4">
                <Checkbox id="terms" />
                <Label className="ml-2" htmlFor="terms">
                  I agree to the &nbsp;
                  <Link className="underline" href="#">
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button className="w-full mt-4">Place Order</Button>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-gray-900 text-white py-8 px-6 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <LockIcon className="h-8 w-8" />
            <div>
              <h3 className="text-lg font-bold">Secure Checkout</h3>
              <p className="text-sm">Your information is encrypted and secure.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ShieldIcon className="h-8 w-8" />
            <div>
              <h3 className="text-lg font-bold">Buyer Protection</h3>
              <p className="text-sm">We guarantee a safe and secure transaction.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BadgeIcon className="h-8 w-8" />
            <div>
              <h3 className="text-lg font-bold">Verified Payments</h3>
              <p className="text-sm">We accept all major credit cards and payment methods.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-6 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Need Help?</h3>
            <p className="text-sm">
              If you have any questions or need assistance, please don't hesitate to contact us.
            </p>
            <div className="mt-4">
              <PhoneIcon className="h-6 w-6 inline-block mr-2" />
              <span>+1 (555) 555-5555</span>
            </div>
            <div className="mt-2">
              <MailIcon className="h-6 w-6 inline-block mr-2" />
              <span>support@example.com</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are a leading event ticketing platform, providing a seamless and secure checkout experience for our
              customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link className="hover:text-gray-900 dark:hover:text-gray-50" href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-900 dark:hover:text-gray-50" href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-900 dark:hover:text-gray-50" href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BadgeIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function CreditCardIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props: SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function FacebookIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function FlagIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function InstagramIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LockIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MailIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ShieldIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TwitterIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function WalletCardsIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
}
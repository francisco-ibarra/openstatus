import { Bell, Globe, Monitor } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Monitor,
    title: "Add your monitors",
    description:
      "Connect your websites and APIs in seconds. Set your check frequency and regions.",
  },
  {
    number: "02",
    icon: Bell,
    title: "Get notified instantly",
    description:
      "Receive alerts via email, Slack, or SMS the moment downtime is detected.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Share your status",
    description:
      "Publish a beautiful public status page to keep your users informed.",
  },
] as const;

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="not-prose my-8">
      {/* Heading — matches prose h2 style used elsewhere on the page */}
      <h2
        id="how-it-works-heading"
        className="mb-2 font-mono text-2xl font-semibold tracking-tight text-foreground"
      >
        How it works
      </h2>
      <p className="mb-6 font-mono text-sm text-muted-foreground">
        Up and running in three steps — no configuration overhead.
      </p>

      {/* Steps grid — same border pattern as the Grid MDX component */}
      <div className="grid grid-cols-1 md:grid-cols-3 [&>*]:border [&>*]:border-border [&>*]:p-4 [&>*]:border-t-0 [&>*:first-child]:border-t md:[&>*:nth-child(-n+3)]:border-t md:[&>*]:border-l-0 md:[&>*:nth-child(3n+1)]:border-l">
        {steps.map(({ number, icon: Icon, title, description }) => (
          <div key={number} className="flex flex-col gap-4">
            {/* Icon */}
            <div
              className="flex h-10 w-10 items-center justify-center border border-border"
              aria-hidden="true"
            >
              <Icon className="h-5 w-5 text-foreground" />
            </div>

            {/* Title with step number inline */}
            <h3 className="font-mono text-sm font-semibold text-foreground">
              {number} {title}
            </h3>

            {/* Description */}
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

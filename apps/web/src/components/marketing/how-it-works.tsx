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
    <section
      aria-labelledby="how-it-works-heading"
      className="not-prose -mx-4 my-8 border border-border bg-muted/40 px-4 py-10 sm:py-12"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2
          id="how-it-works-heading"
          className="font-mono text-2xl font-medium tracking-tight text-foreground text-balance"
        >
          How it works
        </h2>
        <p className="mt-2 font-mono text-sm text-muted-foreground text-balance">
          Up and running in three steps — no configuration overhead.
        </p>
      </div>

      {/* Steps grid */}
      <div className="relative grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
        {steps.map(({ number, icon: Icon, title, description }) => (
          <div
            key={number}
            className="relative flex flex-col gap-4 bg-muted/40 p-6 hover:bg-muted/70 transition-colors"
          >
            {/* Number badge */}
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-8 items-center justify-center border border-border bg-background font-mono text-xs font-medium text-muted-foreground"
            >
              {number}
            </span>

            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center border border-border bg-background">
              <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1">
              <h3 className="font-mono text-sm font-semibold text-foreground">
                {title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            {/* Connector arrow — visible only between cards on sm+ */}
            {number !== "03" && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:flex"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-border"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                  <path
                    d="M7 10h6M10 7l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

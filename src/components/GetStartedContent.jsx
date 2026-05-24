import { company } from "../constants";

const actions = [
  {
    label: "Start free",
    desc: "Spin up an AI agent on one site — no card required.",
    href: "https://github.com/techanvconsulting",
    primary: true,
  },
  {
    label: "Read the docs",
    desc: "Self-host guide, API reference, and SDK quickstart.",
    href: company.site,
  },
  {
    label: "View on GitHub",
    desc: "Open source — read, fork, and self-host it.",
    href: company.github,
  },
  {
    label: "Talk to sales",
    desc: "Enterprise, SSO, and Warden security controls.",
    href: company.site,
  },
];

const GetStartedContent = () => (
  <div className="flex flex-col gap-3">
    <p className="mb-2">
      Open. Secure. Transparent. Pick how you want to begin:
    </p>
    {actions.map((a) => (
      <a
        key={a.label}
        href={a.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block p-4 rounded-xl border transition-colors ${
          a.primary
            ? "bg-color-1/10 border-color-1/40 hover:border-color-1"
            : "bg-n-8 border-n-6 hover:border-color-1/40"
        }`}
      >
        <span className="block font-code text-sm font-bold uppercase tracking-wider text-n-1">
          {a.label}
        </span>
        <span className="block mt-1 text-n-4">{a.desc}</span>
      </a>
    ))}
  </div>
);

export default GetStartedContent;

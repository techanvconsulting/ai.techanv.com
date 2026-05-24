import Section from "./Section";
import { socials, company } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} {company.name}. Open source · AI-First ·
          Security · Transparent.
        </p>

        <ul className="flex items-center gap-6 flex-wrap font-code text-xs uppercase tracking-wider text-n-4">
          <li>
            <a
              className="transition-colors hover:text-color-1"
              href={company.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-color-1"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-color-1"
              href={`tel:${company.phone.replace(/\s/g, "")}`}
            >
              {company.phone}
            </a>
          </li>
        </ul>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;

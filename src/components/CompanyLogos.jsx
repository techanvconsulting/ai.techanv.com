import { trustSignals } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Open source · self-hostable · security-first
      </h5>
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {trustSignals.map((signal, index) => (
          <li
            key={index}
            className="px-4 py-2 rounded-full border border-n-6 bg-n-7 font-code text-xs uppercase tracking-wider text-color-1"
          >
            {signal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;

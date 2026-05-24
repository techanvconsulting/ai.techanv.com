import Section from "./Section";
import Heading from "./Heading";
import { aiCapabilities } from "../constants";

const Capabilities = () => {
  return (
    <Section id="capabilities" className="overflow-hidden">
      <div className="container relative z-2">
        <Heading
          tag="Every AI use case, one platform"
          title="Full-spectrum AI coverage"
          text="From conversational agents to fraud detection — open, self-hosted, and security-first."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiCapabilities.map((item) => (
            <div
              key={item.id}
              className="relative p-6 bg-n-7 border border-n-6 rounded-2xl transition-colors hover:border-color-1/40"
            >
              <div className="flex items-center mb-3">
                <span className="block w-2 h-2 mr-3 rounded-full bg-color-1" />
                <h6 className="font-code text-xs uppercase tracking-wider text-color-1">
                  {String(Number(item.id) + 1).padStart(2, "0")}
                </h6>
              </div>
              <h5 className="h6 mb-2 text-n-1">{item.title}</h5>
              <p className="body-2 text-n-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Capabilities;

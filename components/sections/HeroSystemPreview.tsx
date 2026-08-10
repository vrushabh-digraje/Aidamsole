/**
 * Static system architecture for the hero — one flat diagram, no nested cards.
 */
export function HeroSystemPreview() {
  const layers = [
    {
      id: "intake",
      label: "Intake",
      items: ["Website", "Ads", "WhatsApp"],
    },
    {
      id: "core",
      label: "Operating core",
      items: ["Sales", "Operations", "Finance"],
    },
    {
      id: "visibility",
      label: "Leadership",
      items: ["Pipeline", "Delivery", "Collections"],
    },
  ] as const;

  return (
    <figure className="w-full" aria-label="Business system architecture">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <figcaption className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
          System architecture
        </figcaption>

        <ol className="mt-8 space-y-0">
          {layers.map((layer, index) => (
            <li key={layer.id}>
              <div className="border-t border-gray-200 py-5 first:border-t-0 first:pt-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {String(index + 1).padStart(2, "0")} · {layer.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="text-base font-semibold tracking-tight text-gray-900"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-2 border-t border-gray-200 pt-5 text-sm text-gray-500">
          One connected operating model on Zoho
        </p>
      </div>
    </figure>
  );
}

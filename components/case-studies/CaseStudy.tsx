type CaseStudyMetric = {
  label: string;
  value: string;
};

type CaseStudyProps = {
  title: string;
  industry: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  metrics?: readonly CaseStudyMetric[];
};

export function CaseStudy({
  title,
  industry,
  problem,
  approach,
  solution,
  outcome,
  metrics,
}: CaseStudyProps) {
  return (
    <article className="py-12">
      <p className="text-sm font-medium text-primary">{industry}</p>
      <h2 className="mt-6">{title}</h2>

      <div className="mt-12 space-y-10">
        <section>
          <h3>Problem</h3>
          <p className="mt-6">{problem}</p>
        </section>

        <section>
          <h3>Approach</h3>
          <p className="mt-6">{approach}</p>
        </section>

        <section>
          <h3>Solution</h3>
          <p className="mt-6">{solution}</p>
        </section>

        <section>
          <h3>Outcome</h3>
          <p className="mt-6">{outcome}</p>

          {metrics && metrics.length > 0 ? (
            <dl className="mt-8 space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-sm font-medium text-gray-900">{metric.label}</dt>
                  <dd className="mt-2 text-base text-gray-600">{metric.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </section>
      </div>
    </article>
  );
}

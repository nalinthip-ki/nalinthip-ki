import { HeaderNav } from "./_components/header-nav";
import { resumeData } from "@/data/resume";

type SectionIntroProps = {
  eyebrow: string;
  title?: string;
  description?: string;
};

type ContactIconName = "email" | "phone" | "location";

const { educations, experiences, profile, skillGroups } = resumeData;

const latestExperience = experiences[0];
const currentYear = new Date().getFullYear();

const profileInitials =
  profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((namePart) => namePart[0]?.toUpperCase() ?? "")
    .join("") || "NN";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "email" as const,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: "phone" as const,
  },
  {
    label: "Location",
    value: profile.location,
    icon: "location" as const,
  },
];

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: Readonly<SectionIntroProps>) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-(--accent) text-xs uppercase tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-(--muted) text-sm leading-6 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function ContactIcon({ name }: Readonly<{ name: ContactIconName }>) {
  if (name === "email") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.4 4.8c.4-.5 1-.8 1.7-.8h1.1c.5 0 .9.3 1 .7l1.1 4.3c.1.4 0 .8-.3 1.1L10.4 12a14.4 14.4 0 0 0 1.8 2.5 14.5 14.5 0 0 0 2.4 2l1.9-1.6c.3-.3.8-.4 1.2-.3l4.2 1.1c.5.1.8.5.8 1v1.1c0 .7-.3 1.3-.8 1.7l-1 .8c-.7.5-1.5.8-2.4.7-2.2-.2-4.6-1.6-7.3-4.2C8.5 14.3 7.1 11.8 6.9 9.7c-.1-.9.2-1.8.7-2.4l.8-1Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20s6-4.6 6-10a6 6 0 1 0-12 0c0 5.4 6 10 6 10Z" />
      <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="float-orb left-[4%] top-24 h-40 w-40 bg-[#f4a261]/35" />
        <div className="float-orb right-[8%] top-32 h-56 w-56 bg-[#2a9d8f]/25 [animation-delay:-4s]" />
        <div className="float-orb bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 bg-[#e9c46a]/20 [animation-delay:-8s]" />
      </div>

      <HeaderNav
        navItems={navItems}
        cvHref="/nalinthip_cv.pdf"
        downloadFileName="nalinthip_cv.pdf"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-3 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pt-28">
        <section
          id="top"
          className="reveal reveal-delay-1 scroll-mt-32 sm:scroll-mt-28"
        >
          <div className="glass-panel rounded-4xl px-4 py-6 sm:px-10 sm:py-10 lg:px-12">
            <div className="grid gap-7 sm:gap-8 lg:grid-cols-[minmax(0,1.08fr)_340px] lg:items-start xl:gap-10">
              <div>
                <span className="pill">Resume</span>
                <p className="mt-6 font-mono text-(--muted) text-xs uppercase tracking-[0.28em] sm:mt-8 sm:text-sm">
                  {profile.location}
                </p>
                <h1 className="mt-4 text-[2.2rem] font-semibold leading-[0.96] tracking-tight text-foreground sm:mt-5 sm:text-6xl lg:text-7xl">
                  {profile.name}
                  <span className="mt-2 block text-(--accent) sm:mt-3">
                    {profile.role}
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-(--muted) text-[0.95rem] leading-6 sm:mt-6 sm:text-xl sm:leading-8">
                  {profile.summary}
                </p>

                <div className="mt-7 flex flex-col items-center gap-2.5 sm:mt-8 sm:flex-row sm:items-start sm:gap-3">
                  <a
                    href="#experience"
                    className="inline-flex w-44 max-w-full items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-[#19313a] px-5 py-2.5 text-sm font-medium text-white! shadow-[0_14px_28px_rgba(23,42,52,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#112029] hover:text-white hover:shadow-[0_18px_32px_rgba(23,42,52,0.24)] sm:px-6 sm:py-3 sm:text-base"
                  >
                    View Experience
                  </a>
                  <a
                    href="#skills"
                    className="inline-flex w-44 max-w-full items-center justify-center whitespace-nowrap rounded-full border border-(--border) bg-white/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-white sm:px-6 sm:py-3 sm:text-base"
                  >
                    View Skills
                  </a>
                </div>
              </div>

              <aside className="lg:pt-2">
                <div className="hover-card rounded-4xl border border-[rgba(22,50,67,0.12)] bg-[rgba(255,251,245,0.9)] p-3 shadow-[0_24px_50px_rgba(22,50,67,0.09)] sm:rounded-3xl sm:p-5">
                  <div className="rounded-[1.6rem] border border-[rgba(22,115,107,0.16)] bg-white/74 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.1rem] bg-(--accent) text-xl font-semibold text-white shadow-[0_18px_30px_rgba(22,115,107,0.24)] sm:h-16 sm:w-16 sm:rounded-[1.25rem] sm:text-2xl">
                        {profileInitials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <p className="font-mono text-(--accent) text-xs uppercase tracking-[0.24em]">
                            Availability
                          </p>
                          <span className="inline-flex items-center rounded-full bg-(--accent-soft) px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-(--accent)">
                            Open now
                          </span>
                        </div>
                        <p className="mt-3 text-foreground text-[0.95rem] font-medium leading-7 sm:text-base">
                          {profile.availability}
                        </p>
                      </div>
                    </div>
                  </div>

                  {latestExperience ? (
                    <div className="mt-3 rounded-[1.6rem] border border-[rgba(22,50,67,0.08)] bg-white/62 p-4 shadow-[0_16px_32px_rgba(22,50,67,0.06)] sm:p-5">
                      <p className="font-mono text-(--accent) text-xs uppercase tracking-[0.24em]">
                        Current Role
                      </p>
                      <h2 className="mt-3 text-foreground text-[1.12rem] font-semibold leading-[1.15] sm:text-lg">
                        {latestExperience.title}
                      </h2>
                      <p className="mt-2 text-(--muted) text-[0.95rem] font-medium leading-6 sm:text-base">
                        {latestExperience.company}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[rgba(22,115,107,0.12)] bg-[rgba(239,247,244,0.9)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-(--muted)">
                        <span className="h-2 w-2 rounded-full bg-(--accent)" />
                        <span>{latestExperience.period}</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-8">
          <article className="reveal reveal-delay-3 glass-panel rounded-4xl px-4 py-6 sm:px-10 sm:py-10">
            <SectionIntro
              eyebrow="Experience"
              title="Work experience focused on full-stack, frontend, backend, and enterprise systems"
              description="A focused view of real roles and project work directly related to professional experience."
            />

            <div className="timeline-list mt-8 sm:mt-10">
              {experiences.map((experience) => (
                <article
                  key={`${experience.period}-${experience.title}`}
                  className="timeline-entry"
                >
                  <div className="timeline-marker" aria-hidden="true" />

                  <div className="timeline-card">
                    <div className="timeline-heading">
                      <div className="timeline-title-group">
                        <h3 className="timeline-title">{experience.title}</h3>
                        <p className="timeline-company">{experience.company}</p>
                      </div>
                      <p className="timeline-date">{experience.period}</p>
                    </div>

                    <p className="mt-5 text-(--muted) text-sm leading-7 sm:text-[0.96rem]">
                      {experience.description}
                    </p>

                    {experience.highlights?.length ? (
                      <ul className="mt-5 space-y-3.5">
                        {experience.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-2 h-2 w-2 rounded-full bg-[#16add6]" />
                            <span className="text-(--muted) text-sm leading-7">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {experience.projects?.length ? (
                      <div className="timeline-project-list">
                        {experience.projects.map((project) => (
                          <section
                            key={project.name}
                            className="timeline-project"
                          >
                            <h4 className="text-[0.95rem] font-semibold text-foreground sm:text-[1.08rem]">
                              {project.name}
                            </h4>
                            <ul className="mt-4 space-y-3.5">
                              {project.highlights.map((highlight) => (
                                <li
                                  key={highlight}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-2 h-2 w-2 rounded-full bg-[#16add6]" />
                                  <span className="text-(--muted) text-sm leading-7">
                                    {highlight}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 space-y-5 sm:space-y-6">
          <article
            id="skills"
            className="reveal reveal-delay-4 glass-panel rounded-4xl px-4 py-6 sm:px-8 sm:py-8"
          >
            <SectionIntro
              eyebrow="Skills"
              title="Core technologies used in real projects"
              description="A curated set of technologies and tools used across real production work."
            />

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-foreground text-base font-medium sm:text-lg">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="hover-chip rounded-full bg-(--accent-soft) px-4 py-2 font-mono text-[0.7rem] text-foreground uppercase tracking-[0.12em] sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article
            id="education"
            className="reveal reveal-delay-4 glass-panel rounded-4xl px-4 py-6 sm:px-8 sm:py-8"
          >
            <p className="font-mono text-(--accent) text-xs uppercase tracking-[0.28em]">
              Education
            </p>
            <div className="mt-6 grid gap-4">
              {educations.map((education) => (
                <div
                  key={`${education.institution}-${education.degree}`}
                  className="hover-card rounded-[1.4rem] border border-(--border) bg-white/65 p-3.5 sm:p-5"
                >
                  <p className="font-mono text-(--accent) text-xs uppercase tracking-[0.24em]">
                    {education.period}
                  </p>
                  <h3 className="mt-3 text-foreground text-base font-medium sm:text-lg">
                    {education.degree}
                  </h3>
                  <p className="mt-2 text-(--muted) text-sm leading-7">
                    {education.institution}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="contact" className="mt-8">
          <div className="reveal reveal-delay-4 glass-panel rounded-4xl px-4 py-6 sm:px-10 sm:py-10">
            <SectionIntro eyebrow="Contact" />

            <div className="mt-3">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2 px-1 py-3 transition-colors duration-300"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--accent-soft) text-(--accent)">
                    <ContactIcon name={item.icon} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-mono text-(--accent) text-xs uppercase tracking-[0.24em]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block wrap-break-word text-foreground text-sm font-medium leading-6 transition-colors hover:text-(--accent) sm:text-base sm:leading-7"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="wrap-break-word text-foreground text-sm font-medium leading-6 sm:text-base sm:leading-7">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="reveal reveal-delay-4 mt-6 px-2 pb-2 text-center text-sm text-(--muted)">
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </footer>
      </div>

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#19313a] text-white! shadow-[0_16px_32px_rgba(23,42,52,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#112029] hover:shadow-[0_20px_36px_rgba(23,42,52,0.26)] sm:bottom-6 sm:right-6"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="m6.75 10.25 5.25-5.25 5.25 5.25" />
        </svg>
      </a>
    </main>
  );
}

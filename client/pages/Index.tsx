import {
  Award,
  Mail,
  Linkedin,
  Phone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FocusTrackerMockup, RevSlackMockup } from "@/components/ProjectMockups";

export default function Index() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-project-index"));
            setVisibleProjects((current) =>
              current.includes(index) ? current : [...current, index],
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Color Match AI",
      category: "AI Product",
      description:
        "AI-powered color analysis tool that helps users instantly check if online products match their personal color palette while shopping.",
      impact: [
        "Achieved 2K+ downloads and 40% MoM user engagement growth in 1 Month (Post Launch).",
        "Removed uncertainty in online shopping",
        "Integrated with e-commerce platforms",
        "Delivered real-time AI color matching",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa39d6d852ed54f8dacf14dd22c20bb40%2F1a74e62e97b24ff2808f58db375cb641?format=webp&width=800&height=1200",
    },
    {
      title: "MessProof AI",
      category: "AI Product",
      description:
        "AI platform that automates the entire workflow from market research to ad creative generation (images & videos) and Meta Ads campaign deployment from a single dashboard.",
      impact: [
        "Increased 30% team project onboarding capacity",
        "Reduced manual effort significantly",
        "Unified research + creative + ads process",
        "Built for a US-based digital agency",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa39d6d852ed54f8dacf14dd22c20bb40%2F43488a6f015f48a99945f2c43440394a?format=webp&width=800&height=1200",
    },
    {
      title: "RevSlack AI",
      category: "AI Product",
      description:
        "AI-powered Slack integration that allows CEOs and team leads to manage tasks, send updates, and create Jira tickets using voice or text commands.",
      impact: [
        "Eliminated context switching",
        "Automated task creation & follow-ups",
        "Improved team productivity",
      ],
      component: RevSlackMockup,
    },
    {
      title: "Swag Print - Proof of QA",
      category: "SaaS",
      description:
        "Built an automated Proof of QA system for a leading US-based custom promotional products company, reducing manual designer effort and improving order verification accuracy.",
      impact: [
        "Reduced the workforce from 40 Designers to 23 Designers in the 1st Quarter by automating the QA process",
        "Minimized manual design reviews",
        "Improved order accuracy",
        "Streamlined production workflow",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa39d6d852ed54f8dacf14dd22c20bb40%2Ff4b33c8dc3694286b89035fb5e5b5efa?format=webp&width=800&height=1200",
    },
    {
      title: "Focus Tracker",
      category: "SaaS",
      description:
        "AI-based employee activity tracking SaaS that monitors productive vs unproductive time and integrates with payroll systems for HR and finance teams.",
      impact: [
        "Improved workforce visibility",
        "Automated payroll integration",
        "Built for internal operational use",
      ],
      component: FocusTrackerMockup,
    },
  ];

  const certificates = [
    {
      title: "AI Fundamentals",
      verificationUrl: "https://coursera.org/verify/XHYGKZK0XJUQ",
    },
    {
      title: "AI for Brainstorming and Planning",
      verificationUrl: "https://coursera.org/verify/FNIT9S1LXP58",
    },
    {
      title: "AI for Research and Insights",
      verificationUrl: "https://coursera.org/verify/TRE9T94UJ4AX",
    },
    {
      title: "AI for Writing and Communicating",
      verificationUrl: "https://coursera.org/verify/QSGRBSF3OLJS",
    },
    {
      title: "AI for Content Creation",
      verificationUrl: "https://coursera.org/verify/EUDJ2SJT5TH9",
    },
    {
      title: "AI for Data Analysis",
      verificationUrl: "https://coursera.org/verify/7W5DUNA0UPN7",
    },
    {
      title: "AI for App Building",
      verificationUrl: "https://coursera.org/verify/D4CBN5GJAMJL",
    },
    {
      title: "AI for App Deployment",
      verificationUrl: "https://coursera.org/verify/59X0RFTVKA07",
    },
  ];

  const experiences = [
    {
      title: "Product Manager",
      company: "BK Online UK",
      period: "June 2023 - Present",
      description:
        "Collaborated closely with the CTO to optimize delivery processes, resulting in 35% faster feature delivery and a 25% reduction in time-to-market. Embedded behavioral analytics into design workflows, improving user adoption and engagement by over 20%, while conducting more than 150 customer interviews annually to uncover pain points and drive data-informed product improvements.",
      highlights: [
        "35% faster feature delivery",
        "25% reduction in time-to-market",
        "20% improvement in user adoption",
      ],
    },
    {
      title: "Technical Product Manager",
      company: "Rev9 Solutions",
      period: "May 2025 – May 2026",
      description:
        "Directed the product vision and roadmap for multiple B2B/B2C SaaS platforms. Led the end-to-end product lifecycle from strategy to execution, managing 4 cross-functional development teams of 9–10 members each (including AI/ML, Backend, Frontend, DevOps, UI/UX, and QA). Successfully delivered high-impact features that increased platform capabilities by 40% in one quarter, boosted user engagement by 25%, and improved customer retention by 30%.",
      highlights: [
        "40% platform capability increase in Q1",
        "25% boost in user engagement",
        "30% improvement in retention",
      ],
    },
    {
      title: "Digital Growth Strategist | Project Lead",
      company: "Goflare Digital Solutions",
      period: "Mar 2022 – May 2025",
      description:
        "Led a 20-member team to deliver 10+ successful digital growth initiatives. Successfully scaled creative design projects from 2 to 20+ within two years for a major US client, while managing up to $300K USD monthly advertising budgets with full accountability for Go-to-Market execution and ROI optimization.",
      highlights: [
        "Led 20-member team",
        "Scaled projects from 2 to 20+ in 2 years",
        "Managed $300K+ monthly budgets",
      ],
    },
  ];

  return (
    <div className="portfolio-shell page-motion min-h-screen bg-white text-foreground">

      {/* Hero Section */}
      <section className="hero-section relative max-w-6xl mx-auto overflow-hidden px-6 py-20 md:py-32">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="hero-kicker mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="hero-signal" />
              Product leadership / AI systems
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Arbab Sikandar Khan
            </h1>
            <p className="text-base md:text-lg text-primary mb-2 font-semibold leading-6">
              Product Manager | Technical Product Owner | AI, SaaS & Digital Products
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-base text-foreground leading-7">
                Results-driven Product Manager & Technical Product Owner with over <strong className="font-bold text-foreground">4 Years</strong> of experience
                building and scaling AI-powered SaaS and e-commerce products
                across the UK, US, Canada, and Middle East. I have a proven
                track record of leading full product lifecycles from discovery
                and strategy to execution and iteration while driving AI
                adoption and delivering measurable business impact.
              </p>
              <p className="text-base text-foreground leading-7">
                I specialize in turning complex problems into simple, scalable
                solutions by combining strong product strategy, cross-functional
                leadership, and data-driven decision-making. With hands-on
                experience working with engineering, design, and AI/ML teams, I
                bring both technical fluency and a deep understanding of user
                needs to build products that create real value.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:arbabsikandar411@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold leading-5 hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/arbab-sikandar-khan-6aa251215/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-sm font-semibold leading-5 hover:bg-secondary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="hero-image-shell relative w-64 h-80 md:w-72 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa39d6d852ed54f8dacf14dd22c20bb40%2F0f5cc08f52cd4b448754c3c06348f2b8?format=webp&width=800&height=1200"
                alt="Arbab Sikandar Khan"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section relative overflow-hidden bg-secondary/20 py-20">
        <div className="section-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-kicker mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">02 / Selected work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Featured Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div
                key={idx}
                ref={(element) => {
                  projectRefs.current[idx] = element;
                }}
                data-project-index={idx}
                className={`project-card ${
                  visibleProjects.includes(idx) ? "is-visible" : ""
                } flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Image Section */}
                {project.image ? (
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="project-visual relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ) : project.component ? (
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="project-visual relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6">
                      <project.component />
                    </div>
                  </div>
                ) : (
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 aspect-video flex items-center justify-center">
                      <div className="text-center text-slate-600">
                        <p className="font-semibold">{project.title}</p>
                        <p className="text-sm">Project Visualization</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="project-copy w-full md:w-1/2">
                  <div className="project-category inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold leading-7 text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-base text-foreground mb-6 leading-7">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                      Key Impact
                    </p>
                    {project.impact.map((item, iidx) => (
                      <div key={iidx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                        </div>
                        <span className="text-sm leading-6 text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications-section relative overflow-hidden bg-white px-6 py-20 md:py-24">
        <div className="section-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <p className="section-kicker mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            03 / Certifications
          </p>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Certifications</h2>

          <article className="certification-card rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-white to-blue-50/70 p-6 shadow-sm md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Award aria-hidden="true" className="h-7 w-7" />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Google · Coursera
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
                    Google AI Professional Certificate
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                    Completed an eight-course program applying AI to brainstorming, research, communication, content creation, data analysis, and coding.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2 md:items-end">
                <span className="w-fit rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Completed and verified certificate.
                </span>
                <a
                  href="https://coursera.org/verify/professional-cert/KNU3RQO7HA6X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Verify Certificate
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <Accordion type="single" collapsible className="certifications-accordion mt-8 border-t border-primary/15">
              <AccordionItem value="courses" className="border-b-0">
                <AccordionTrigger className="rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-4 text-left text-base font-bold text-primary shadow-sm hover:border-primary/50 hover:bg-primary/10 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  <span>
                    <span className="block">View all 8 course certificates</span>
                    <span className="mt-1 block text-xs font-medium text-muted-foreground">
                      All eight certificates are listed below
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="certifications-content">
                  <ol className="grid gap-3 pb-2 md:grid-cols-2">
                    {certificates.map((certificate, index) => (
                      <li
                        key={certificate.title}
                        className="flex flex-col items-start gap-3 rounded-xl border border-border bg-white/80 p-4 transition-colors hover:border-primary/40 hover:bg-primary/[0.03] sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-medium leading-5 text-foreground">{certificate.title}</span>
                        </span>
                        <a
                          href={certificate.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/25 bg-white px-3 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          Verify Certificate
                          <ExternalLink aria-hidden="true" className="h-3 w-3" />
                        </a>
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section relative overflow-hidden bg-white px-6 py-16 text-foreground md:py-24">
        <div className="section-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="flex flex-col justify-center lg:col-start-2 lg:row-start-1">
            <p className="section-kicker mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              04 / About Me
            </p>
            <h2 className="max-w-xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
              I don’t just manage <em className="font-serif font-normal text-primary">feature requests.</em>
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              I am a Product Manager working at the intersection of business, users, and technology. My work focuses on understanding complex problems, defining product opportunities, creating structured requirements, aligning stakeholders, and working with design and engineering teams to turn ideas into usable digital products.
            </p>

            <div className="mt-8 border-t border-border pt-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Particularly interested in
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "SaaS products",
                  "AI-powered products",
                  "Web & mobile",
                  "B2B platforms",
                  "Enterprise systems",
                  "E-commerce",
                  "Data-driven experiences",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="interest-chip rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-[11px] text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-1 lg:contents">
            <div className="about-portrait relative min-h-[420px] overflow-hidden rounded-2xl border border-border bg-secondary/20 shadow-xl md:min-h-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa39d6d852ed54f8dacf14dd22c20bb40%2Fe93d4a10339e40b4b72269655b93a377?format=webp&width=1200&height=1800"
                alt="Arbab Sikandar Khan speaking at an event"
                className="h-full w-full object-cover object-[center_28%] brightness-105 contrast-105 saturate-90"
              />
            </div>
            <div className="lifecycle-card rounded-2xl border border-border bg-secondary/20 p-6 shadow-sm md:p-8 lg:col-start-2 lg:row-start-2">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  The Product Lifecycle
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  How I move from a question to an outcome
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">↘</span>
            </div>

            <div className="space-y-2">
              {[
                "Problem",
                "Discovery",
                "Strategy",
                "Requirements",
                "Design & Engineering",
                "Launch",
                "Iteration",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-medium ${index === 6 ? "bg-primary text-primary-foreground" : "border border-border bg-white text-muted-foreground"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium leading-6 ${index === 6 ? "bg-primary text-primary-foreground" : "bg-white text-foreground"}`}>
                    {step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-5">
              {[
                ["Why", "Understand the root problem"],
                ["Who", "Design for real people"],
                ["Success", "Measure the right outcome"],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section relative overflow-hidden bg-secondary/30 py-20">
        <div className="section-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="section-kicker mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">05 / Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

          <div className="experience-list space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="experience-card bg-white rounded-xl p-8 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm leading-6 text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hidx) => (
                    <span
                      key={hidx}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills & Tools */}
      <section className="skills-section relative overflow-hidden px-6 py-20 md:py-24">
        <div className="skills-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 border-b border-border/80 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="skills-live-dot" />
                06 / Technical Skills & Tools
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                The toolkit behind <em className="font-serif font-normal text-primary">effective products.</em>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                A practical mix of product strategy, delivery, analytics, design, and technical fluency used to move ideas from discovery to measurable outcomes.
              </p>
            </div>
            <div className="skills-command-bar flex shrink-0 items-center gap-3 rounded-full border border-primary/20 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
              <span>Strategy</span>
              <span className="text-primary">→</span>
              <span>Execution</span>
              <span className="text-primary">→</span>
              <span>Impact</span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="skills-console relative overflow-hidden rounded-3xl border border-primary/20 p-6 shadow-xl md:p-8">
              <div className="skills-console-scan pointer-events-none absolute inset-0" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  <span>Product operating system</span>
                  <span className="rounded-full border border-primary/20 px-2 py-1 text-muted-foreground">Live map</span>
                </div>

                <div className="skills-orbit-stage my-8 flex min-h-[260px] flex-1 items-center justify-center">
                  <div className="skills-orbit skills-orbit-one" />
                  <div className="skills-orbit skills-orbit-two" />
                  <div className="skills-orbit skills-orbit-three" />
                  <div className="skills-core relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-primary/40 bg-white/90 text-center shadow-[0_0_45px_hsl(var(--primary)/0.2)]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Build</span>
                    <strong className="text-2xl font-extrabold tracking-tight text-foreground">PM</strong>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Better</span>
                  </div>
                  <span className="skills-orbit-chip skills-orbit-chip-one">AI / ML</span>
                  <span className="skills-orbit-chip skills-orbit-chip-two">SaaS</span>
                  <span className="skills-orbit-chip skills-orbit-chip-three">E-commerce</span>
                  <span className="skills-orbit-chip skills-orbit-chip-four">REST APIs</span>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-border/70 pt-5 text-center">
                  <div>
                    <p className="text-lg font-bold text-foreground">06</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Modules</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">360°</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Product view</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">∞</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Iterations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Product Strategy & Discovery",
                  skills: "Product Vision, Product Strategy, Roadmapping, Customer Discovery, User Research, Competitive Analysis, MVP Definition, Product Positioning, Go-to-Market Strategy",
                },
                {
                  number: "02",
                  title: "Product Delivery & Execution",
                  skills: "Agile/Scrum, Backlog Management, Prioritization, RICE, MoSCoW, PRDs, User Stories, Acceptance Criteria, Release Planning, Sprint Planning, Dependency Management, Stakeholder Management",
                },
                {
                  number: "03",
                  title: "Analytics & Experimentation",
                  skills: "Product Analytics, KPI Definition, OKRs, Funnel Analysis, A/B Testing, Conversion Rate Optimization, Google Analytics, Microsoft Clarity, Hotjar, Google Search Console, Meta Ads, Google Ads",
                },
                {
                  number: "04",
                  title: "Design & Prototyping",
                  skills: "Lovable, Builder.io, Banani.io, FigJam, Balsamiq, Claude Code",
                },
                {
                  number: "05",
                  title: "Tools",
                  skills: "Jira, Confluence, Notion, FigJam, Miro, Balsamiq, Asana",
                },
                {
                  number: "06",
                  title: "Technical & Product Domains",
                  skills: "AI/ML Products, SaaS, B2B/B2C Platforms, E-commerce, REST APIs, Laravel, PHP, Git, GitHub, Vercel",
                },
              ].map((skillGroup, groupIndex) => (
                <article
                  key={skillGroup.title}
                  className="skills-module group rounded-2xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:p-6"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-[10px] font-bold text-primary-foreground shadow-[0_0_18px_hsl(var(--primary)/0.25)]">
                        {skillGroup.number}
                      </span>
                      <h3 className="text-base font-bold leading-5 text-foreground">
                        {skillGroup.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold text-primary/60">/ /</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.split(", ").map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skills-chip rounded-full border border-primary/15 bg-secondary/30 px-2.5 py-1 text-[11px] font-medium leading-4 text-muted-foreground transition-colors group-hover:border-primary/25 group-hover:text-foreground"
                        style={{ animationDelay: `${(skillIndex % 6) * 0.18 + groupIndex * 0.08}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="contact-section relative overflow-hidden py-20 bg-secondary/30">
        <div className="section-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="section-kicker mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary">07 / Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <a
              href="mailto:arbabsikandar411@gmail.com"
              className="contact-card flex flex-col items-center p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <Mail className="w-8 h-8 text-primary mb-3" />
              <span className="font-semibold text-foreground mb-1">Email</span>
              <span className="text-sm leading-5 text-muted-foreground text-center">
                arbabsikandar411@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/arbab-sikandar-khan-6aa251215/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card flex flex-col items-center p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <Linkedin className="w-8 h-8 text-primary mb-3" />
              <span className="font-semibold text-foreground mb-1">LinkedIn</span>
              <span className="text-sm leading-5 text-muted-foreground text-center">
                LinkedIn Profile
              </span>
            </a>

            <a
              href="tel:+923355616593"
              className="contact-card flex flex-col items-center p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <Phone className="w-8 h-8 text-primary mb-3" />
              <span className="font-semibold text-foreground mb-1">Phone</span>
              <span className="text-sm leading-5 text-muted-foreground text-center">
                +92 335 5616593
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer border-t border-border py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Arbab Sikandar Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

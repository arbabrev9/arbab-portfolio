import {
  Mail,
  Linkedin,
  Phone,
  ArrowRight,
  ExternalLink,
  Target,
  Search,
  Rocket,
  Layers3,
  WandSparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

  const experiences = [
    {
      title: "Product Manager",
      company: "Opulent Home Interiors",
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
      title: "Associate Product Manager",
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
    <div className="page-motion min-h-screen bg-white text-foreground">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Arbab Sikandar Khan
            </h1>
            <p className="text-lg text-muted-foreground mb-2 font-semibold">
              Product Manager | AI, SaaS & Ecommerce
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Building AI-powered products that solve real problems.
              <br />
              3+ years helping teams ship better products.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-foreground leading-relaxed">
                Results-driven Product Manager with over 3 years of experience
                building and scaling AI-powered SaaS and e-commerce products
                across the Middle East, UK, US, and Canada. I have a proven
                track record of leading full product lifecycles from discovery
                and strategy to execution and iteration while driving AI
                adoption and delivering measurable business impact.
              </p>
              <p className="text-foreground leading-relaxed">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/arbab-sikandar-khan-6aa251215/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96">
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

      {/* Product Manager Snapshot */}
      <section className="snapshot-section bg-[#121c1b] px-6 py-16 text-[#f3f7f4] md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 border-b border-[#31403d] pb-12 md:grid-cols-[0.8fr_2fr] md:items-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c4ff50]">
              01 / Product Manager Snapshot
            </p>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                The capabilities behind <em className="font-serif font-normal text-[#c4ff50]">better products.</em>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b8c5c0] md:text-base">
                I bring a structured, human-centered approach to product work — balancing strategic intent with the real details that make an experience useful.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Product Strategy",
                description: "Turning business objectives and user problems into clear product direction and actionable strategies.",
                Icon: Target,
              },
              {
                number: "02",
                title: "Product Discovery",
                description: "Understanding users, stakeholders, markets, and problems before deciding what to build.",
                Icon: Search,
              },
              {
                number: "03",
                title: "Product Execution",
                description: "Translating ideas into clear requirements and working closely with design, engineering, and QA teams to deliver products.",
                Icon: Rocket,
              },
              {
                number: "04",
                title: "Technical Product Management",
                description: "Bridging business needs with technical possibilities across web, mobile, SaaS, APIs, databases, and AI systems.",
                Icon: Layers3,
              },
              {
                number: "05",
                title: "AI Product Thinking",
                description: "Identifying meaningful opportunities to use AI, designing intelligent workflows, and balancing automation with user control.",
                Icon: WandSparkles,
              },
            ].map(({ number, title, description, Icon }) => (
              <article
                key={number}
                className="group rounded-lg border border-[#30403c] bg-[#1b2826] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c4ff50]/70 hover:bg-[#202f2c]"
              >
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-[#c4ff50]">{number}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#c4ff50] text-[#17201e]">
                    <Icon size={15} strokeWidth={2.5} />
                  </span>
                </div>
                <h3 className="mb-3 text-sm font-semibold text-white md:text-base">{title}</h3>
                <p className="text-xs leading-5 text-[#aebbb6]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
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
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ) : project.component ? (
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6">
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
                <div className="w-full md:w-1/2">
                  <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-foreground text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                      Key Impact
                    </p>
                    {project.impact.map((item, iidx) => (
                      <div key={iidx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                        </div>
                        <span className="text-muted-foreground text-sm">
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

      {/* About Me Section */}
      <section className="bg-[#f4f4ef] px-6 py-16 text-[#17201e] md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#69736e]">
              02 / About Me
            </p>
            <h2 className="max-w-xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
              I don’t just manage <em className="font-serif font-normal text-[#52755e]">feature requests.</em>
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-6 text-[#5d6862] md:text-base md:leading-7">
              I am a Product Manager working at the intersection of business, users, and technology. My work focuses on understanding complex problems, defining product opportunities, creating structured requirements, aligning stakeholders, and working with design and engineering teams to turn ideas into usable digital products.
            </p>

            <div className="mt-8 border-t border-[#d8d9d1] pt-5">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#69736e]">
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
                    className="rounded-full border border-[#d8d9d1] bg-white/70 px-3 py-1.5 text-[11px] text-[#68736d]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-[#e8eee7] p-6 md:p-8">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#69736e]">
                  The Product Lifecycle
                </p>
                <p className="mt-2 text-xs text-[#7c8780]">
                  How I move from a question to an outcome
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17201e] text-[#c4ff50]">↘</span>
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
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-medium ${index === 6 ? "bg-[#17201e] text-[#c4ff50]" : "border border-[#cdd7ce] bg-white/80 text-[#78847c]"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={`flex-1 rounded-md px-4 py-2.5 text-xs font-medium ${index === 6 ? "bg-[#17201e] text-white" : "bg-white/75 text-[#526058]"}`}>
                    {step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[#d2dcd2] pt-5">
              {[
                ["Why", "Understand the root problem"],
                ["Who", "Design for real people"],
                ["Success", "Measure the right outcome"],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#7a867e]">{label}</p>
                  <p className="mt-2 text-[10px] leading-4 text-[#647169]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm whitespace-nowrap">
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


      {/* Contact Section */}
      <section id="connect" className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <a
              href="mailto:arbabsikandar411@gmail.com"
              className="flex flex-col items-center p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <Mail className="w-8 h-8 text-primary mb-3" />
              <span className="font-semibold text-foreground mb-1">Email</span>
              <span className="text-sm text-muted-foreground text-center">
                arbabsikandar411@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/arbab-sikandar-khan-6aa251215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <Linkedin className="w-8 h-8 text-primary mb-3" />
              <span className="font-semibold text-foreground mb-1">LinkedIn</span>
              <span className="text-sm text-muted-foreground text-center">
                LinkedIn Profile
              </span>
            </a>

            <a
              href="tel:+923355616593"
              className="flex flex-col items-center p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <Phone className="w-8 h-8 text-primary mb-3" />
              <span className="font-semibold text-foreground mb-1">Phone</span>
              <span className="text-sm text-muted-foreground text-center">
                +92 335 5616593
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Arbab Sikandar Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

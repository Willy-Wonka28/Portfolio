import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      logo: "/logos/affinetsales_logo.png",
      name: "Affinetsales",
      link: "https://www.affinetsales.com/",
      description:
        "Built a full-stack e-learning platform with 50+ users and a 2-tier affiliate system to boost growth. Improved load time through lazy loading and added RBAC for better security. Integrated Paystack and real-time notifications for smooth onboarding.",
      techStack: ["React", "Typescript", "Supabase", "Tailwind"]
    },
    {
      id: 2,
      logo: "/logos/uninav-logo.svg",
      name: "Uninav",
      link: "https://uninav.live",
      description:
       "Leading a 6-person team to build a student platform with structured course materials. Launched v1 with 50+ signups; currently working on v2",
      techStack: ["React", "TypeScript", "NestJs", "Supabase"]
    },
    {
      id: 3,
      logo: "/logos/direct_logo.png",
      name: "Direct",
      description:
        "Led a 2-person team to launch a crypto payment app, ranked Top 10 in a national hackathon. Enabled users to pay anywhere using crypto with Web3 integrations.",
      techStack: ["Helius Labs SDK", "Privy", "React", "Socket.io", "Solana Web3js"]
    },
    {
      id: 4,
      logo: "/logos/vaav_logo.png",
      name: "VaaV",
      link: "https://vaav-n.vercel.app/",
      description:
        "Developed a product website with full e-commerce flow, allowing users to place and pay for orders online.",
      techStack: ["ReactJs", "Typescript"]
    }

  ];

  return (
    <div className="space-y-6">
      {/* Box 1: What have I built? */}
      <motion.div 
        className="bg-content-box border border-content-border rounded-lg p-6 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">What have I built?</h2>
      </motion.div>

      {/* Box 2: Projects List */}
      <motion.div 
        className="bg-content-box border border-content-border rounded-lg p-6 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              {/* Project Header */}
              <div className="flex items-center gap-4 mb-3">
                <img 
                src = {project.logo}
                className="w-20 h-20" />
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-200">
                 <a href={project.link} target="_blank"><h3 className="text-lg font-semibold text-foreground border-b border-transparent group-hover:border-current">
                    {project.name}
                  </h3></a>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>

              {/* Project Description */}
              <p className="text-text-subtle leading-relaxed mb-4 ml-16">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="ml-16">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-secondary-foreground text-sm rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider - except for last item */}
              {index < projects.length - 1 && (
                <div className="border-b border-content-border mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
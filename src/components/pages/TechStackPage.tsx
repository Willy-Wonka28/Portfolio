import { motion } from "framer-motion";

const TechStackPage = () => {
  const proficientTechs = [
    { name: "Reactjs", link: "/lang_icons/react.png" },
    { name: "TypeScript", link: "/lang_icons/typescript.png" },
    { name: "Tailwind", link: "/lang_icons/tailwind.svg" },
    { name: "JavaScript", link: "/lang_icons/js.png" },
    { name: "Python(FastAPI)", link: "/lang_icons/fastapi.png" },
    { name: "Nextjs", link: "/lang_icons/next.png" },
    { name: "Supabase", link: "/lang_icons/supabase.png" },
    { name: "Git", link: "/lang_icons/git.png" },
  ];

  const familiarTechs = [
    { name: "Java", link: "/lang_icons/java.png" },
    { name: "ExpressJs", link: "/lang_icons/express.png" },
  ];

  const TechGrid = ({ techs, delay = 0 }: { techs: typeof proficientTechs; delay?: number }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-hover-accent transition-colors duration-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: delay + index * 0.1, 
            ease: "easeOut" 
          }}
        >
          <img 
                src = {tech.link}
                className="w-6 h-6 " />
          <span className="text-secondary-foreground font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Box 1: What tools do I use? */}
      <motion.div 
        className="bg-content-box border border-content-border rounded-lg p-6 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">What tools do I use?</h2>
      </motion.div>

      {/* Box 2: Tech Stack Categories */}
      <motion.div 
        className="bg-content-box border border-content-border rounded-lg p-6 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <div className="space-y-8">
          {/* Proficient Section */}
          <div>
            <motion.h3 
              className="text-xl font-semibold text-foreground mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Proficient
            </motion.h3>
            <TechGrid techs={proficientTechs} delay={0.3} />
          </div>

          {/* Divider */}
          <div className="border-b border-content-border" />

          {/* Familiar Section */}
          <div>
            <motion.h3 
              className="text-xl font-semibold text-foreground mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            >
              Familiar
            </motion.h3>
            <TechGrid techs={familiarTechs} delay={0.9} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackPage;
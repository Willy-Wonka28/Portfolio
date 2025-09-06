import { motion } from "framer-motion";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Box 1: Who am I? */}
      <motion.div 
        className="bg-content-box border border-content-border rounded-lg p-6 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">Who am I?</h2>
      </motion.div>

      {/* Box 2: Bio */}
      <motion.div 
        className="bg-content-box border border-content-border rounded-lg p-6 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <div className="space-y-4">

          <ul className="text-foreground leading-relaxed list-disc list-inside">
          <li>Full-stack developer</li>
          <li>Lover of modern designs</li>
          <li><b>5+</b> years of programming</li>
          <li>Real Madrid Fan</li>
        </ul>

        <p className="text-foreground leading-relaxed mt-2">
          Most importantly, I'm Batman
        </p>

        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
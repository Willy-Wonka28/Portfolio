import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, FolderOpen, Code, Sun, Moon, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Layout = ({ children, activeTab, onTabChange }: LayoutProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "tech", label: "Tech Stack", icon: Code },
  ];

  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    onTabChange(tabs[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    onTabChange(tabs[nextIndex].id);
  };

  return (
    <div className="h-[100vh] bg-background flex">
      {/* Sidebar - Hidden on mobile */}
      <motion.aside 
        className="hidden md:flex w-64 bg-sidebar border-r border-sidebar-border flex-col"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className="w-full justify-start gap-3 h-11 text-left"
                  onClick={() => onTabChange(tab.id)}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </nav>

        {/* Socials */}
          <div className="p-6 border-t border-sidebar-border flex justify-center items-center gap-6">
            <div className="bg-white w-full rounded-lg p-4 flex justify-center items-center gap-6">
            <a
              href="https://www.linkedin.com/in/david-adole-887057304/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img src="/socials/linkedin.png" alt="linkedin" className="h-6 w-6" />
            </a>

            <a
              href="https://x.com/willy_wonka_28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img src="/socials/twitter.png" alt="twitter" className="h-6 w-6" />
            </a>

            <a
              href="https://github.com/Willy-Wonka28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img src="/socials/github.png" alt="github" className="h-6 w-6" />
            </a>
          </div>
        </div>


        {/* Controls */}
        <div className="p-6 border-t border-sidebar-border space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-11"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
          
         
         {/* <a href="#" onClick={() => history.back()}> */}
           <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-11 text-destructive hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Exit
          </Button>
          {/* </a> */}
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header Box */}
        <motion.header 
          className="p-6 md:p-8 border-b border-content-border bg-content-box"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
            <div className="playfair-display">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground ">Adole David</h1>
              <p className="text-3xl md:text-5xl font-bold text-foreground ">Enencheje</p>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          {isMobile && (
            <motion.div
              className="fixed bottom-0 left-0 w-full z-30 bg-content-box border-t border-sidebar-border flex flex-col justify-center gap-2 p-3 md:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Socials */}
              <div className="border-b border-sidebar-border flex justify-center items-center gap-6 pb-2">
                <div className="bg-white border border-content-border rounded-lg p-2 flex justify-center items-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/david-adole-887057304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img src="/socials/linkedin.png" alt="linkedin" className="h-6 w-6" />
                  </a>
                  <a
                    href="https://x.com/willy_wonka_28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img src="/socials/twitter.png" alt="twitter" className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/Willy-Wonka28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img src="/socials/github.png" alt="github" className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="flex justify-between gap-4 pt-2">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="flex-1 gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button
                  variant="outline"
                  onClick={handleNext}
                  className="flex-1 gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;
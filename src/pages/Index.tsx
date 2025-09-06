import { useState } from "react";
import Layout from "@/components/Layout";
import ProfilePage from "@/components/pages/ProfilePage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import TechStackPage from "@/components/pages/TechStackPage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfilePage />;
      case "projects":
        return <ProjectsPage />;
      case "tech":
        return <TechStackPage />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default Index;

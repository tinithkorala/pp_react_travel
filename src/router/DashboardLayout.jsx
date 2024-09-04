import { Outlet } from "react-router-dom";
import SidebarNav from "../components/page_components/dashboard/SidebarNav";
import ContentCard from "../components/page_components/dashboard/ContentCard";

const DashboardLayout = () => {
  return (
    <main className="main">
      <div className="user-view">
        <SidebarNav />
        <ContentCard>
          <Outlet />
        </ContentCard>
      </div>
    </main>
  );
};

export default DashboardLayout;

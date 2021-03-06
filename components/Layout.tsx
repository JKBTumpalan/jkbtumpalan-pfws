import { Sidebar } from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Sidebar />
      <main className="bg-gray-800 h-100%">{children}</main>
    </div>
  );
};

export default Layout;

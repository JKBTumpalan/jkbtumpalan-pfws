import { Sidebar } from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-700">
      <Sidebar />
      <main className="container pl-20 w-screen h-screen">{children}</main>
    </div>
  );
};

export default Layout;

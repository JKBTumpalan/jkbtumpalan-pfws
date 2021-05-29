import { Sidebar } from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-700">
      <Sidebar />
      <main className="container p-10 pl-20 w-screen h-screen bg-gray-700">
        {children}
      </main>
    </div>
  );
};

export default Layout;

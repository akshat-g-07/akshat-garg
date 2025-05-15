import Sidebar from "./sidebar";

export default function SettingSetup({ children }) {
  return (
    <section className="flex h-svh">
      <Sidebar />
      <div className="w-2/3 px-4 md:px-8 lg:px-20 py-10 overflow-y-auto">
        {children}
      </div>
    </section>
  );
}

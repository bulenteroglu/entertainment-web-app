import Sidebar from "./Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen w-screen bg-dark-blue">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

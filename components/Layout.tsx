import Sidebar from "./Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-screen w-screen bg-dark-blue">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}

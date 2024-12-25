import Navbar from "@/components/shared/navbar/Navbar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-full mx-auto ">
      <Navbar />
      {children}
    </div>
  );
}

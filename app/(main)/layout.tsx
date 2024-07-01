import { Navbar } from "./navbar";

export default function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

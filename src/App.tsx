import SideBar from "@/components/sections/sidebar";
import Header from "@/components/sections/header";
import Main from "@/pages/main";
import { initWeb3Modal } from "./utils";
import { TransactionProvider } from "./components/context/transaction";

initWeb3Modal();

export default function App() {
  return (
    <TransactionProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] bg-[#FAFAFA] lg:grid-cols-[240px_1fr] ">
        <SideBar />
        <div className="flex flex-col w-full">
          <Header />
          <Main />
        </div>
      </div>
    </TransactionProvider>
  );
}

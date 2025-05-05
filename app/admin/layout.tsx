import { AppSidebar } from "../componenets/app-sidebar";
import { Separator } from "../componenets/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../componenets/ui/sidebar";

function Layout({ children }: { children: React.ReactNode }) {



 return (
   <SidebarProvider className="bg-primaryblack text-text">
   <AppSidebar className="bg-secondaryblack" />
   <SidebarInset className="bg-primaryblack">
     <header className="flex bg-secondaryblack sticky top-0  h-18 shrink-0 items-center gap-2 border-b px-4">
       <SidebarTrigger className="-ml-1 bg-primaryblack" />
       <Separator orientation="vertical" className="mr-2 h-4" />
     </header>
     <div className="flex bg-secondaryblack rounded-3xl p-10 m-10 flex-1 flex-col gap-4 ">
     {children}
     </div>
   </SidebarInset>
 </SidebarProvider>
 );
}
export default Layout
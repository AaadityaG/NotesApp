import { ReactNode } from "react";
import Dashboard from "./page";
import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({children} : {children : ReactNode}){
    return(
        <div>
        {children}
        <Sidebar />
        </div>
    )
}
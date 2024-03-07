import React from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const NewDetailPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="mt-6 max-lg:mt-0">
            <div className="container mx-auto ">
                <div className="flex gap-4">
                    <Sidebar />
                    {children}
                </div>
            </div>
        </section>
    );
};

export default NewDetailPage;

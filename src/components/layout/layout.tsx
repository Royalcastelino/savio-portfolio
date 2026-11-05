import Navbar from "../navbar/navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <main className="pt-28">
                {children}
            </main>
        </div>
    );
}

"use client"
import { routes } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

function Header() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme()

    const links = [
        {
            title: "صفحه اصلی",
            route: routes.home
        },
        {
            title: "اضافه کردن محصول",
            route: routes.addProduct
        }
    ]

    return (
        <>
            <header className="shadow bg-gray-50">
                <div className="p-5 flex gap-6 font-bold font-sans">
                    {links.map((link) => (
                        <Link key={link.route} href={link.route} className={`${pathname === link.route ? "text-blue-400" : "text-black"} hover:shadow-xl shadow-gray-200`}>{link.title}</Link>
                    ))}
                    {theme === "light" ? (
                        <Sun color="yellow" onClick={toggleTheme} className="cursor-pointer" />
                    ) : (
                        <Moon color="gray" onClick={toggleTheme} className="cursor-pointer" />
                    )}
                </div>
            </header>
        </>
    )
}

export default Header;

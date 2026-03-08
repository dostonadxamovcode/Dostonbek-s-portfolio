import { Link, Outlet } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "../components/theme-provider";
import { CgDarkMode } from "react-icons/cg";
import { FcAbout, FcHome } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineContacts } from "react-icons/md";

export default function MainLoyauts() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className=" grid grid-cols-2 md:grid-cols-3 items-center h-14 sm:h-16">

            {/* Left */}
            <div data-aos="fade-right" className="flex items-center">
              <Link to="/" className="flex-shrink-0 no-underline">
                <span
                  className="text-lg sm:text-xl font-bold tracking-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Dostonbek
                  <span className="inline-block w-1.5 h-1.5 sm:w-1.75 sm:h-1.75 bg-amber-500 rounded-full ml-1 relative -top-0.5"></span>
                </span>
              </Link>
            </div>

            {/* Center */}
            <div data-aos="flip-up" className="hidden md:flex justify-center">
              <div className="flex items-center gap-1">
                {[
                  { to: "/", label: "Home" },
                  { to: "/projects", label: "Projects" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="
                      relative px-4 py-2 text-sm font-medium no-underline
                      transition-colors duration-200
                      hover:text-amber-500 focus:text-amber-500
                      focus:outline-none
                      group whitespace-nowrap
                    "
                  >
                    {item.label}
                    <span
                      className="
                        absolute bottom-0 left-1/2 -translate-x-1/2
                        h-0.5 w-0 bg-amber-500 rounded-full
                        transition-all duration-300
                        group-hover:w-4/5 group-focus:w-4/5
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right */}
            <div data-aos="fade-left" className="flex items-center justify-end gap-2">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="shrink-0"
              >
                <CgDarkMode size={24} />
              </button>

              <div className="md:hidden">
                <Menubar className="border rounded-lg">
                  <MenubarMenu>
                    <MenubarTrigger className="text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 font-medium flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <rect y="2" width="16" height="1.5" rx="1" fill="currentColor" />
                        <rect y="7" width="16" height="1.5" rx="1" fill="currentColor" />
                        <rect y="12" width="16" height="1.5" rx="1" fill="currentColor" />
                      </svg>
                      <span>Menu</span>
                    </MenubarTrigger>

                    <MenubarContent
                      align="end"
                      className="w-48 border shadow-xl rounded-xl mt-1 p-1.5"
                    >
                      {[
                        { to: "/", label: "Home", icon: <FcHome /> },
                        { to: "/about", label: "About", icon: <FcAbout /> },
                        { to: "/projects", label: "Projects", icon: <GoProjectSymlink /> },
                      ].map((item) => (
                        <MenubarItem key={item.to} className="cursor-pointer rounded-lg">
                          <Link
                            to={item.to}
                            className="w-full flex items-center gap-2.5 px-1 py-1.5 font-medium text-sm no-underline"
                          >
                            <span className="text-base">{item.icon}</span>
                            {item.label}
                          </Link>
                        </MenubarItem>
                      ))}

                      <MenubarSeparator className="my-1" />

                      <MenubarItem className="cursor-pointer rounded-lg">
                        <Link
                          to="/contact"
                          className="w-full flex items-center gap-2.5 px-1 py-1.5 font-medium text-sm no-underline"
                        >
                          <span className="text-base"><MdOutlineContacts /></span>
                          Contact
                        </Link>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2 sm:py-4">
          <Outlet />
        </div>
      </main>

      <footer className="w-full border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2 sm:py-3">
          <p className="text-xs font-medium text-center opacity-60">
            © 2026 Dostonbek. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
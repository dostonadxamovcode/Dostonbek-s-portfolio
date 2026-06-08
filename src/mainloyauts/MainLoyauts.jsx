import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "../components/mode-toggle";
import { LanguageSwitcher } from "../components/language-switcher";
import { FcAbout, FcHome } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineContacts } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";

export default function MainLoyauts() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const menuItems = [
    { to: "/", label: t("nav.home"), icon: <FcHome /> },
    { to: "/about", label: t("nav.about"), icon: <FcAbout /> },
    { to: "/projects", label: t("nav.projects"), icon: <GoProjectSymlink /> },
    { to: "/blog", label: t("nav.blog"), icon: <FaRegNewspaper /> },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="sticky top-3 sm:top-4 z-50 w-full backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className=" grid grid-cols-2 md:grid-cols-3 items-center h-14 sm:h-16">

            {/* Left */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 no-underline">
                <span
                  className="text-lg sm:text-xl font-bold tracking-tight font-display"
                >
                  Dostonbek
                  <span className="inline-block w-1.5 h-1.5 sm:w-1.75 sm:h-1.75 bg-amber-500 rounded-full ml-1 relative -top-0.5"></span>
                </span>
              </Link>
            </div>

            {/* Center */}
            <div className="hidden md:flex justify-center">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
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
            <div className="flex items-center justify-end gap-2">
              <LanguageSwitcher />
              <ModeToggle />

              <div className="md:hidden">
                <Menubar className="border rounded-lg">
                  <MenubarMenu>
                    <MenubarTrigger className="text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 font-medium flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <rect y="2" width="16" height="1.5" rx="1" fill="currentColor" />
                        <rect y="7" width="16" height="1.5" rx="1" fill="currentColor" />
                        <rect y="12" width="16" height="1.5" rx="1" fill="currentColor" />
                      </svg>
                      <span>{t("nav.menu")}</span>
                    </MenubarTrigger>

                    <MenubarContent
                      align="end"
                      className="w-48 border shadow-xl rounded-xl mt-1 p-1.5"
                    >
                      {menuItems.map((item) => (
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
                          {t("nav.contact")}
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
            {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}

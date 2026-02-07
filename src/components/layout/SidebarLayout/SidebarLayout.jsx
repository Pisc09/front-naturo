import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Mes Suivis", to: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "Recherche",
    to: "/dashboard/recherche",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Mes Favoris",
    to: "/dashboard/favoris",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Mes Rendez-vous",
    to: "/dashboard/rdv",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Mes Pro de Santé",
    to: "/dashboard/pro-sante",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Mon Compte",
    to: "/dashboard/profil",
    icon: ChartPieIcon,
    current: false,
  },
];

const preferences = [
  {
    id: 1,
    name: "Abonnement",
    to: "/dashboard/abonnement",
    initial: "A",
    current: false,
  },
  {
    id: 2,
    name: "Paramètres",
    to: "/dashboard/parametres",
    initial: "P",
    current: false,
  },
];

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SidebarLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Sidebar mobile */}
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform bg-white px-6 pb-4">
            <TransitionChild>
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-0 left-full -m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="size-6 text-white" />
              </button>
            </TransitionChild>
            <nav className="flex flex-col gap-y-5">
              <ul>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-50 text-indigo-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold",
                        )
                      }
                    >
                      <item.icon className="size-6 shrink-0" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                {preferences.map((preference) => (
                  <NavLink
                    key={preference.id}
                    to={preference.to}
                    className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium">
                      {preference.initial}
                    </span>
                    {preference.name}
                  </NavLink>
                ))}
              </div>
            </nav>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Sidebar desktop */}
      <div className="hidden border-r border-gray-200 bg-white lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col gap-y-5 p-6">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
            alt="Logo"
          />
          <nav className="flex flex-col gap-y-7">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-gray-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold",
                  )
                }
              >
                <item.icon className="size-6 shrink-0" />
                {item.name}
              </NavLink>
            ))}
            <div className="mt-auto">
              {preferences.map((preference) => (
                <NavLink
                  key={preference.id}
                  to={preference.to}
                  className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium">
                    {preference.initial}
                  </span>
                  {preference.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <main className="px-4 py-10 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SidebarLayout;

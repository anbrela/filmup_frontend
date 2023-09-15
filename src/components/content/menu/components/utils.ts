import {
  UserIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

export const menuRoutes = ({ lang }: { lang: string }) => [
  {
    id: 1,
    label: "menu.profile",
    icon: UserIcon,
    path: `/${lang}`,
  },
  {
    id: 2,
    label: "menu.popular",
    icon: FilmIcon,
    path: `/${lang}/movies/popular`,
  },
  {
    id: 3,
    label: "menu.discover",
    icon: PlusIcon,
    path: `/${lang}/discover`,
  },
  {
    id: 4,
    label: "menu.search",
    icon: MagnifyingGlassIcon,
    path: `/${lang}/search`,
  },
];

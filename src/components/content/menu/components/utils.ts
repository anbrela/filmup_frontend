import {
  HomeIcon,
  ClipboardDocumentIcon,
  PlusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const menuRoutes = ({ lang }: { lang: string }) => [
  {
    id: 0,
    label: 'menu.home',
    icon: HomeIcon,
    path: `/${lang}`,
  },
  {
    id: 1,
    label: 'menu.requests.list',
    icon: ClipboardDocumentIcon,
    path: `/${lang}/requests`,
    children: [
      {
        id: 1,
        label: 'menu.requests.new',
        icon: PlusIcon,
        path: `/${lang}/requests/new`,
      },
    ],
  },
  {
    id: 2,
    label: 'menu.candidates.list',
    icon: UsersIcon,
    path: `/${lang}/candidates`,
    children: [
      {
        id: 1,
        label: 'menu.candidates.new',
        icon: PlusIcon,
        path: `/${lang}/candidates/new`,
      },
    ],
  },
]

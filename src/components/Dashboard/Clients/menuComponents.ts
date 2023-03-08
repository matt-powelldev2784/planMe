import { DateInput } from '@/components/ui/DateInput'
import { MenuButton } from '@/components/ui/MenuButton'

export const menuComponents = [
  {
    menuTitle: 'Add Client',
    component: MenuButton,
    onClick: () => {
      window.location.href = `/clients/addclient`
    },
    image: '../add_client.svg',
  },
  {
    menuTitle: 'Single Client Detail',
    component: MenuButton,
    onClick: () => {
      window.location.href = `/clients/singleclient`
    },
    image: '../single_client.svg',
  },
  {
    menuTitle: 'Client List',
    component: MenuButton,
    onClick: () => {
      window.location.href = `/clients/list`
    },
    image: '../client_list.svg',
  },
]

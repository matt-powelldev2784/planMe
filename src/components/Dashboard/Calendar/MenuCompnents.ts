import { DateInput } from '@/components/ui/DateInput'
import { MenuButton } from '@/components/ui/MenuButton'

export const menuComponents = [
  {
    menuTitle: 'Date Input',
    component: DateInput,
    onClick: () => {
      console.log('clicked')
    },
  },
  {
    menuTitle: 'Date Input',
    component: DateInput,
    onClick: () => {
      console.log('clicked')
    },
  },
  {
    menuTitle: 'Date Input',
    component: DateInput,
    onClick: () => {
      console.log('clicked')
    },
  },
  {
    menuTitle: 'Menu Button',
    component: MenuButton,
    onClick: () => {
      console.log('clicked')
    },
    image: './clock.svg',
  },
]

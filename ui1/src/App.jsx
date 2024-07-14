import React from 'react'
import { BriefcaseIcon, EnvelopeIcon, CreditCardIcon,BellAlertIcon } from "@heroicons/react/24/outline";
import { Menu, MenuItem, MenuItems ,MenuButton } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from "./images/image.jpg"
import acc from "./images/acc.jpg"

const App = () => {
  
  const navigation1 = [
    { name: 'Jobs', href: '#', current: true, icon: BriefcaseIcon },
    { name: 'Messages', href: '#', current: false, icon: EnvelopeIcon },
    { name: 'Payments', href: '#', current: false, icon: CreditCardIcon },
  ]

  const navigation2 = [
    { name: 'Job Preview', href: '#', current: true},
    { name: 'Application', href: '#', current: false},
    { name: 'Match', href: '#', current: false},
    { name: 'Messages', href: '#', current: false},
  ]

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ')
  // }
  
  return (
    <>
    <div className="border-b-2 border-gray-200 py-7">
    <img className="position: absolute left-7 top-6 h-10 w-20" src={logo} />
    <div className="hidden sm:mb-8 sm:flex justify-center">
    <div className="flex flex-row space-x-7 ... top-6 absolute rounded-full px-7 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
    {navigation1.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={`rounded-full px-7 py-2 text-sm font-medium flex items-center space-x-2 ${
                      item.current ? 'bg-oranges text-white' : 'text-gray-300 hover:bg-oranges hover:text-white'
                    }`}
                  >
                     <item.icon className="h-5 w-5" aria-hidden="true" />
                     <span>{item.name}</span>
                  </a>
                ))}
      </div>
      </div>
      <button className="absolute top-7 right-14 mr-5 mb-1 flex items-center space-x-6">
      <BellAlertIcon className=" h-6 w-6 text-black-500" />
      </button>
      <Menu as="div" className="absolute top-6 right-2">
      <div>
        <MenuButton className="inline-flex items-center">
          <img className="h-8 w-8 rounded-full"src={acc} />
          <ChevronDownIcon aria-hidden="true" className="mr-1 h-5 w-5 text-black-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-orange-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-orange-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-orange-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-orange-100 data-[focus]:text-gray-900"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
    </div>
    <div className="border-b-2 border-gray-200 py-5">
    <div className=" absolute -mt-4 left-20 hidden sm:mb-8 sm:flex ">
    {navigation2.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={`px-7 py-2 text-sm font-medium flex items-center space-x-2 ${
                      item.current ? 'text-oranges' : 'text-gray-400 hover:text-oranges hover:text-white hover:underline'
                    }`}
                  >
                     {item.name}
                  </a>
                ))}
                </div>
                </div>
    </>
  )
}

export default App
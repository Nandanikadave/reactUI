import {React, useState,useEffect} from 'react'
import { BriefcaseIcon, EnvelopeIcon, CreditCardIcon,BellAlertIcon,TrashIcon, PencilSquareIcon,UsersIcon,UserPlusIcon,ChatBubbleLeftIcon,EyeIcon,MapPinIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { Menu, MenuItem, MenuItems ,MenuButton } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from "./images/image.jpg"
import acc from "./images/acc.jpg"

const App = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch('/detail.json')
      .then((response) => response.json())
      .then((data) => setJobData(data));
  }, []);

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
    <div className=" absolute -mt-4 left-16 hidden sm:mb-8 sm:flex ">
    {navigation2.map((item) => (
  <a
    key={item.name}
    href={item.href}
    aria-current={item.current ? 'page' : undefined}
    className={`px-7 py-2 text-sm font-medium flex items-center space-x-2 relative ${
      item.current
        ? 'text-oranges after:bg-oranges after:scale-x-100'
        : 'text-gray-400 hover:text-oranges hover:text-white'
    } after:absolute after:bottom-0 after:left-10 after:h-0.5 after:w-14`}
  >
    {item.name}
  </a>
))}
</div>
  </div>
  <div className="flex flex-col">
  <div className=" absolute -right-1 w-72 h-full max-h-full border-l-2 border-gray-200 bg-white">
    <div className="flex flex-row space-x-12">
  <button className="text-sm leading-6 top-5 hover:text-white relative left-5 bg-orange-200 -ring-1 rounded-md h-8 w-28 ring-1 ring-orange-500 hover:bg-oranges text-oranges flex items-center justify-center space-x-2">
  <TrashIcon className="h-4 w-4 " />
  <span>Delete Job</span>
</button>

    <button className="text-sm leading-6 top-5 hover:text-white relative bg-orange-200 -ring-1 rounded-md h-8 w-28 ring-1 ring-orange-500 hover:bg-oranges text-oranges flex items-center justify-center space-x-2">
    <PencilSquareIcon class="h-4 w-4" />
    <span>Edit Job</span></button>
  </div>
  <div className="pt-12 flex flex-col space-y-2 p-4">
  <div className="w-full border-b-2 border-gray-100 h-12 flex items-center">
  <dl className="w-full divide-y divide-gray-100">
    <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0 ">
      <dt className="flex items-center text-sm font-medium leading-6 text-gray-700">
        <UsersIcon className="h-5 w-5 mr-2" /> Applicant
      </dt>
      <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-32">400</dd>
    </div>
  </dl>
</div>

  <div className="w-full border-b-2 border-gray-100 h-12 flex items-center">
    <dl className="w-full divide-y divide-gray-100">
      <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0">
        <dt className="flex items-center text-sm font-medium leading-6 text-gray-700"> <UserPlusIcon className="h-5 w-5 mr-2" /> Matches</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-32">100</dd>
      </div>
    </dl>
  </div>
  <div className="w-full border-b-2 border-gray-100 h-12 flex items-center">
    <dl className="w-full divide-y divide-gray-100">
      <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0">
        <dt className="flex items-center text-sm font-medium leading-6 text-gray-700"><ChatBubbleLeftIcon className="h-5 w-5 mr-2" />Messages</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0  sm:ml-32">147</dd>
      </div>
    </dl>
  </div>
  <div className="w-full h-12 flex items-center">
    <dl className="w-full divide-y divide-gray-100">
      <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0">
        <dt className="flex items-center text-sm font-medium leading-6 text-gray-700"><EyeIcon className="h-5 w-5 mr-2" />Views</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0  sm:ml-32">800</dd>
      </div>
    </dl>
  </div>
  
</div>
  </div>
  
  {jobData.map((detail) => (
    <>
  <div className="h-32 w-full border-b-2 border-gray-200">
    <p className=" relative top-5 left-20 text-3xl font-bold text-gray-700">{detail.post}</p>
    <p className="absolute text-xs font-medium text-gray-400 left-1/3 top-40">{detail.time}</p>
    <p className=" inline-flex relative text-lg top-10 left-20 font-medium	text-gray-500">
    <MapPinIcon class="h-5 w-5 text-gray-500 mr-3 mt-1" />
      {detail.location}</p>
      <p className="inline-flex relative text-lg top-10 left-32 font-medium	text-gray-500">
      <BanknotesIcon class="h-5 w-5 text-gray-500 mr-3 mt-1" />
        {detail.earning}
      </p>
  </div>
  <div className="h-32 w-full border-b-2 border-gray-200 grid lg:grid-cols-4">
    <div className="  p-4 ml-16">
      <p className="text-sm font-medium text-gray-400">Skills required</p>
    </div>
    <div className="p-4 -ml-9">
    <p className="text-sm font-medium text-gray-400">Preferred languages</p>
    </div>
    <div className="p-4 -ml-24">
    <p className="text-sm font-medium text-gray-400">Type</p>
    </div>
    <div className="p-4 -ml-60">
    <p className="text-sm font-medium text-gray-400">Years of experience</p>
    </div>
  </div>
  </>
  )
  )
}
</div>

    </>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import LogoUSM from '../assets/Logo-usm.svg';

const navigation = [
  { name: 'Inicio', href: '/Inicio' },
  { name: 'Cursos', href: '/Cursos' },
  { name: 'Projects', href: '#' },
  { name: 'Calendar', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  if (currentPage === '/') {
    return null;
  }

  return (
    <Disclosure as="nav" className="bg-white shadow-lg border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center">
          {/* Logo alineado a la izquierda */}
          <div className="flex items-center mr-8"> 
            <img src={LogoUSM} alt="Logo USM" className="h-12 w-auto ml-0" />
          </div>

          {/* Menú de navegación más alineado a la izquierda */}
          <div className="hidden sm:flex sm:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setCurrentPage(item.href)}
                className={classNames(
                  currentPage === item.href
                    ? 'bg-blue-200 text-blue-800 shadow-lg'
                    : 'text-gray-600 hover:bg-blue-100 hover:text-blue-700',
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out'
                )}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem 1rem',
                  boxShadow: currentPage === item.href ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : '',
                  transition: 'background-color 0.3s ease',
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icono de campana y menú de usuario a la derecha */}
          <div className="ml-auto flex items-center pr-2">
            <button
              type="button"
              className="rounded-full bg-gray-200 p-1 text-gray-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <Menu as="div" className="relative ml-3">
              <MenuButton className="flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700">
                    Tu perfil
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700">
                    Configuración
                  </Link>
                </MenuItem>
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700">
                    Cerrar sesión
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              to={item.href}
              onClick={() => setCurrentPage(item.href)}
              className={classNames(
                currentPage === item.href ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700',
                'block rounded-full px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}

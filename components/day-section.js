import * as React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import cx from 'classnames'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { AuthProvider } from '@/context/auth'
import mdxComponents from './mdx'
import WorkoutBlock from './workout-block'

function DaySection({ activeRecovery = false, content, title }, index) {
  const mdxContent = content
    ? hydrate(content.mdx, {
        components: mdxComponents,
        provider: { component: AuthProvider }
      })
    : null

  return (
    <Disclosure key={index} as="div">
      {({ open }) => (
        <React.Fragment>
          <dt className="px-4 py-4 text-lg leading-7 sm:py-5 sm:px-6">
            <Disclosure.Button className="text-left w-full flex justify-between items-center text-gray-400 focus:outline-none focus:text-gray-900">
              <span className="font-medium text-gray-900">{title}</span>

              <span className="ml-6 h-7 flex items-center">
                <ChevronDownIcon
                  className={cx(
                    'h-6 w-6 transform transition-transform duration-100',
                    open ? '-rotate-180' : 'rotate-0'
                  )}
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              static
              as="dd"
              className="border-b border-t border-gray-200 bg-gray-50 px-4 py-6 sm:border-b-0 sm:px-6 sm:py-8"
            >
              <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6">
                {activeRecovery ? (
                  <WorkoutBlock title="Active Recovery" type="recovery">
                    {mdxContent}
                  </WorkoutBlock>
                ) : (
                  mdxContent
                )}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </React.Fragment>
      )}
    </Disclosure>
  )
}

export default DaySection

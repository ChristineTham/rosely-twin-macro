import 'twin.macro'
import tw, { css } from 'twin.macro'

const Header3: React.FC = () => (
  <header>
    <nav tw="bg-white dark:bg-gray-800 shadow">
      <div tw="container mx-auto px-6 py-3 ">
        <div tw="md:flex md:items-center md:justify-between">
          <div tw="flex justify-between items-center">
            <div tw="text-xl font-semibold text-gray-700">
              <a
                tw="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                Brand
              </a>
            </div>

            {/* Mobile menu button */}
            <div tw="flex md:hidden">
              <button
                type="button"
                tw="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" tw="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div tw="hidden -mx-4 md:flex md:items-center">
            <a
              href="#"
              tw="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 dark:text-gray-200 capitalize hover:text-blue-600 dark:hover:text-indigo-400"
            >
              Web developers
            </a>
            <a
              href="#"
              tw="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 dark:text-gray-200 capitalize hover:text-blue-600 dark:hover:text-indigo-400"
            >
              Web Designers
            </a>
            <a
              href="#"
              tw="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 dark:text-gray-200 capitalize hover:text-blue-600 dark:hover:text-indigo-400"
            >
              UI/UX Designers
            </a>
            <a
              href="#"
              tw="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 dark:text-gray-200 capitalize hover:text-blue-600 dark:hover:text-indigo-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div
      css={[
        tw`h-128 w-full bg-cover bg-center`,
        css`
          background-image: url(/images/design-components.svg);
        `,
      ]}
    >
      <div tw="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div tw="text-center">
          <h1 tw="text-white text-2xl font-semibold uppercase md:text-3xl">
            Build Your new <span tw="underline text-blue-400">Saas</span>
          </h1>
          <button tw="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Start project
          </button>
        </div>
      </div>
    </div>
  </header>
)
export default Header3

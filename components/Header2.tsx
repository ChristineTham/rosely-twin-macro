import 'twin.macro'
import tw, { css } from 'twin.macro'

const Header2: React.FC = () => (
  <header tw="bg-white dark:bg-gray-800">
    <nav tw="px-6 py-3 shadow">
      <div tw="md:flex items-center justify-between">
        <div tw="flex justify-between items-center">
          <div>
            <a
              tw="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Brand
            </a>
          </div>

          {/* Mobile menu button */}
          <div tw="md:hidden">
            <button
              type="button"
              tw="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" tw="h-6 w-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div tw="flex flex-col -mx-2 mt-2 md:mt-0 md:flex-row md:block">
          <a
            href="#"
            tw="py-2 px-2 text-sm text-gray-800 dark:text-gray-200 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          >
            Home
          </a>
          <a
            href="#"
            tw="py-2 px-2 text-sm text-gray-800 dark:text-gray-200 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          >
            About
          </a>
          <a
            href="#"
            tw="py-2 px-2 text-sm text-gray-800 dark:text-gray-200 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>

    <div tw="md:flex">
      <div tw="flex items-center justify-center px-6 py-8 md:h-128 w-full md:w-1/2">
        <div tw="max-w-xl">
          <h2 tw="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Build Your New <span tw="text-indigo-600 dark:text-indigo-400">Idea</span>
          </h2>

          <p tw="mt-2 text-sm text-gray-500 dark:text-gray-400 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum
            cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora
            voluptates.
          </p>

          <div tw="flex mt-6">
            <a
              href="#"
              tw="px-3 py-2 block bg-gray-900 text-white text-xs font-semibold rounded hover:bg-gray-700"
            >
              Get Started
            </a>
            <a
              href="#"
              tw="mx-4 px-3 py-2 block bg-gray-200 text-gray-700 text-xs font-semibold rounded hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div tw="w-full h-64 md:w-1/2 md:h-auto">
        <div
          css={[
            tw`h-full w-full bg-cover`,
            css`
              background-image: url(/images/design-components.svg);
            `,
          ]}
        >
          <div tw="h-full w-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  </header>
)
export default Header2

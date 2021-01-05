import 'twin.macro'

const Header1: React.FC = () => {
  return (
    <>
      <header tw="bg-white dark:bg-gray-800">
        <nav tw="shadow">
          <div tw="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
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
            <div tw="md:flex items-center">
              <div tw="flex flex-col md:flex-row md:mx-6">
                <a
                  tw="my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  tw="my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Shop
                </a>
                <a
                  tw="my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Contact
                </a>
                <a
                  tw="my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  About
                </a>
              </div>

              <div tw="flex justify-center md:block">
                <a
                  tw="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                  href="#"
                >
                  <svg
                    tw="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span tw="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div tw="container mx-auto px-6 py-16">
          <div tw="md:flex items-center">
            <div tw="w-full md:w-1/2">
              <div tw="max-w-lg">
                <h1 tw="text-gray-800 dark:text-white text-2xl font-semibold uppercase md:text-3xl">
                  Best Place To Choose Your Clothes
                </h1>
                <p tw="mt-2 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error
                  laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
                </p>
                <button tw="mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                  Shop Now
                </button>
              </div>
            </div>

            <div tw="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
              <img tw="max-w-2xl w-full h-full" src="/images/design-components.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header1

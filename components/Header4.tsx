import 'twin.macro'

const Header4: React.FC = () => (
  <header tw="bg-gray-900">
    <div tw="container mx-auto px-6">
      <nav tw="flex flex-col py-2 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <a href="#" tw="text-2xl font-semibold text-white hover:text-gray-300">
            Brand
          </a>
        </div>

        <div tw="flex items-center -mx-2 mt-2 sm:mt-0">
          <a
            href="#"
            tw="px-3 py-1 border-2 font-semibold rounded text-sm text-white hover:bg-gray-700"
          >
            Sign In
          </a>
          <a
            href="#"
            tw="mx-2 px-3 py-2 font-semibold bg-black rounded text-sm text-white hover:bg-gray-800"
          >
            Sign Up
          </a>
        </div>
      </nav>

      <div tw="flex items-center flex-col py-6 md:h-128 md:flex-row">
        <div tw="md:w-1/2">
          <h2 tw="text-4xl font-semibold text-gray-100">Brand</h2>

          <h3 tw="text-2xl font-semibold text-gray-100">
            Hello <span tw="text-indigo-400">Guest</span>
          </h3>

          <p tw="text-gray-100 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>

        <div tw="md:w-1/2 flex md:justify-end mt-8 md:mt-0">
          <div tw="max-w-sm bg-white dark:bg-gray-800 rounded-lg">
            <div tw="p-5 text-center">
              <h2 tw="text-2xl font-semibold text-gray-700 dark:text-white">Sign In</h2>

              <form action="#">
                <div tw="mt-4">
                  <input
                    tw="w-full py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                  <input
                    tw="mt-4 w-full py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>

                <div tw="mt-4 flex items-center justify-between">
                  <a href="#" tw="text-gray-600 dark:text-gray-200 text-sm hover:underline">
                    Forget Password?
                  </a>

                  <button tw="px-4 py-2 font-semibold bg-gray-900 rounded text-white hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)
export default Header4

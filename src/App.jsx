import Navbar from './components/Navbar';

import '@fontsource-variable/oxanium';
import '@fontsource-variable/nunito-sans';

function App() {
    return (
        <div>
            <Navbar />
        

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
}

export default App;

/*

            <div>

            </div>
            <div class="p-10 mt-20 sm:mt-40">
                <div class="flex flex-wrap gap-x-20 gap-y-10 md:gap-x-32 justify-center">
                    <div class="self-center p-4 shrink-0 text-white display-header-font text-6xl">
                        <h1>Make your</h1>
                        <h1>life more</h1>
                        <h1>secure</h1>
                    </div>

                    <div class="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[313px] w-[164px]">
                        <div class="h-[32px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -start-[18px] top-[55px] rounded-s-lg"></div>
                        <div class="h-[32px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -start-[18px] top-[92px] rounded-s-lg"></div>
                        <div class="h-[48px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -end-[18px] top-[70px] rounded-e-lg"></div>
                        <div class="place-content-center bg-gray-700 rounded-[2rem] w-[136px] h-[286px] bg-white dark:bg-gray-700">
                            <svg class="self-center" width="136" height="136" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.5 36.75V44.625M23.625 28.875V18.375C23.625 16.2864 24.4547 14.2834 25.9315 12.8065C27.4084 11.3297 29.4114 10.5 31.5 10.5C33.5886 10.5 35.5916 11.3297 37.0685 12.8065C38.5453 14.2834 39.375 16.2864 39.375 18.375V28.875M18.375 28.875H44.625C45.3212 28.875 45.9889 29.1516 46.4812 29.6438C46.9734 30.1361 47.25 30.8038 47.25 31.5V49.875C47.25 50.5712 46.9734 51.2389 46.4812 51.7312C45.9889 52.2234 45.3212 52.5 44.625 52.5H18.375C17.6788 52.5 17.0111 52.2234 16.5188 51.7312C16.0266 51.2389 15.75 50.5712 15.75 49.875V31.5C15.75 30.8038 16.0266 30.1361 16.5188 29.6438C17.0111 29.1516 17.6788 28.875 18.375 28.875Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="p-4 pt-15 place-content-center">
                    <a class="cursor-pointer mx-auto max-w-48 min-w-30 block text-white font-extrabold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</a>
                </div>
            </div>
    */

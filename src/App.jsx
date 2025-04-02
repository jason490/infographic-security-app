import Navbar from './components/Navbar';

import '@fontsource-variable/oxanium';
import '@fontsource-variable/nunito-sans';
import { A } from '@solidjs/router';

function App() {
    return (
        <div>
            <Navbar />
            <div class="p-10 mt-10 sm:mt-40">
                <div class="flex flex-wrap gap-x-20 gap-y-10 md:gap-x-45 xl:gap-x-90 justify-center">
                    <div class="self-center p-4 shrink-0 text-black dark:text-white display-header-font text-6xl font-bold">
                        <h1>Make your</h1>
                        <h1>life more</h1>
                        <h1>secure</h1>
                    </div>

                    <div class="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2rem] h-[313px] w-[164px]">
                        <div class="h-[32px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -start-[18px] top-[55px] rounded-s-lg"></div>
                        <div class="h-[32px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -start-[18px] top-[92px] rounded-s-lg"></div>
                        <div class="h-[48px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -end-[18px] top-[70px] rounded-e-lg"></div>
                        <div class="place-content-center bg-gray-700 rounded-[1.5rem] w-[136px] h-[286px] bg-white dark:bg-gray-700">
                            <svg class="self-center" width="136" height="136" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.125 77.625L74.25 87.75L101.25 64.125M81 135C66.5893 124.862 54.8059 111.431 46.629 95.823C38.3991 80.1289 33.9866 62.715 33.75 44.9955L81 27L128.25 45.0022C128.012 62.7194 123.6 80.1308 115.371 95.823C107.194 111.43 95.4106 124.861 81 135Z" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="p-4 pt-15 place-content-center">
                    <A href="/data" class="cursor-pointer mx-auto max-w-48 min-w-35 block text-white font-extrabold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</A>
                </div>
            </div>
        </div>
    );
}

export default App;

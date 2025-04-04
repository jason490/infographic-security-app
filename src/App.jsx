import Navbar from './components/Navbar';

import '@fontsource-variable/oxanium';
import '@fontsource-variable/nunito-sans';
import { A } from '@solidjs/router';

function App() {
    return (
        <div class="">
            <Navbar />
            <div class="p-10">
                <div class="mt-15 md:mt-40 flex flex-wrap gap-x-50 gap-y-10 md:gap-x-30 lg:gap-x-55 xl:gap-x-65 justify-center">
                    <div class="self-center">
                        <div class="p-4 shrink-0 text-black dark:text-white display-header-font text-5xl sm:text-6xl lg:text-7xl font-bold">
                            <h1>Make your</h1>
                            <h1>life more</h1>
                            <div class="flex gap-x-1 sm:gap-x-3 shrink-0">
                                <h1>secure</h1>
                                <svg class="self-center max-lg:hidden text-gray-700 dark:text-blue-100" width="55" height="55" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5 36.75V44.625M23.625 28.875V18.375C23.625 16.2864 24.4547 14.2834 25.9315 12.8065C27.4084 11.3297 29.4114 10.5 31.5 10.5C33.5886 10.5 35.5916 11.3297 37.0685 12.8065C38.5453 14.2834 39.375 16.2864 39.375 18.375V28.875M18.375 28.875H44.625C45.3212 28.875 45.9889 29.1516 46.4812 29.6438C46.9734 30.1361 47.25 30.8038 47.25 31.5V49.875C47.25 50.5712 46.9734 51.2389 46.4812 51.7312C45.9889 52.2234 45.3212 52.5 44.625 52.5H18.375C17.6788 52.5 17.0111 52.2234 16.5188 51.7312C16.0266 51.2389 15.75 50.5712 15.75 49.875V31.5C15.75 30.8038 16.0266 30.1361 16.5188 29.6438C17.0111 29.1516 17.6788 28.875 18.375 28.875Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg class="self-center max-sm:hidden lg:hidden text-gray-700 dark:text-blue-100" width="50" height="50" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5 36.75V44.625M23.625 28.875V18.375C23.625 16.2864 24.4547 14.2834 25.9315 12.8065C27.4084 11.3297 29.4114 10.5 31.5 10.5C33.5886 10.5 35.5916 11.3297 37.0685 12.8065C38.5453 14.2834 39.375 16.2864 39.375 18.375V28.875M18.375 28.875H44.625C45.3212 28.875 45.9889 29.1516 46.4812 29.6438C46.9734 30.1361 47.25 30.8038 47.25 31.5V49.875C47.25 50.5712 46.9734 51.2389 46.4812 51.7312C45.9889 52.2234 45.3212 52.5 44.625 52.5H18.375C17.6788 52.5 17.0111 52.2234 16.5188 51.7312C16.0266 51.2389 15.75 50.5712 15.75 49.875V31.5C15.75 30.8038 16.0266 30.1361 16.5188 29.6438C17.0111 29.1516 17.6788 28.875 18.375 28.875Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg class="self-center min-sm:hidden text-gray-700 dark:text-blue-100" width="35" height="35" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5 36.75V44.625M23.625 28.875V18.375C23.625 16.2864 24.4547 14.2834 25.9315 12.8065C27.4084 11.3297 29.4114 10.5 31.5 10.5C33.5886 10.5 35.5916 11.3297 37.0685 12.8065C38.5453 14.2834 39.375 16.2864 39.375 18.375V28.875M18.375 28.875H44.625C45.3212 28.875 45.9889 29.1516 46.4812 29.6438C46.9734 30.1361 47.25 30.8038 47.25 31.5V49.875C47.25 50.5712 46.9734 51.2389 46.4812 51.7312C45.9889 52.2234 45.3212 52.5 44.625 52.5H18.375C17.6788 52.5 17.0111 52.2234 16.5188 51.7312C16.0266 51.2389 15.75 50.5712 15.75 49.875V31.5C15.75 30.8038 16.0266 30.1361 16.5188 29.6438C17.0111 29.1516 17.6788 28.875 18.375 28.875Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div class="max-md:hidden p-4 pt-15">
                            <A href="/data" class="cursor-pointer mx-auto max-w-48 min-w-35 block text-white font-extrabold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</A>
                        </div>
                    </div>
                    <div class="shadow-md relative place-content-center justify-center border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2rem] h-[313px] w-[164px] md:h-[450px] md:w-[235px] lg:h-[626px] lg:w-[328px]">
                        <div class="h-[32px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -start-[18px] top-[55px] md:-start-[18px] md:top-[55px] lg:-start-[18px] lg:top-[55px] rounded-s-lg"></div>
                        <div class="h-[32px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -start-[18px] top-[92px] md:-start-[18px] md:top-[92px] lg:-start-[18px] lg:top-[92px]rounded-s-lg"></div>
                        <div class="h-[48px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -end-[18px] top-[70px] md:-end-[18px] md:top-[70px] lg:-end-[18px] lg:top-[70px]rounded-e-lg"></div>
                        <div class="m-auto place-content-center bg-gray-700 rounded-[0.8rem] md:rounded-[1.1rem] lg:rounded-[1.5rem] w-[136px] h-[286px] md:w-[200px] md:h-[420px] lg:w-[290px] lg:h-[587px] bg-white dark:bg-gray-700">
                            <svg class="max-lg:hidden text-gray-700 dark:text-blue-100" width="290" height="290" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.125 77.625L74.25 87.75L101.25 64.125M81 135C66.5893 124.862 54.8059 111.431 46.629 95.823C38.3991 80.1289 33.9866 62.715 33.75 44.9955L81 27L128.25 45.0022C128.012 62.7194 123.6 80.1308 115.371 95.823C107.194 111.43 95.4106 124.861 81 135Z" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg class="max-md:hidden lg:hidden text-gray-700 dark:text-blue-100" width="200" height="200" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.125 77.625L74.25 87.75L101.25 64.125M81 135C66.5893 124.862 54.8059 111.431 46.629 95.823C38.3991 80.1289 33.9866 62.715 33.75 44.9955L81 27L128.25 45.0022C128.012 62.7194 123.6 80.1308 115.371 95.823C107.194 111.43 95.4106 124.861 81 135Z" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg class="min-md:hidden text-gray-700 dark:text-blue-100" width="136" height="136" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.125 77.625L74.25 87.75L101.25 64.125M81 135C66.5893 124.862 54.8059 111.431 46.629 95.823C38.3991 80.1289 33.9866 62.715 33.75 44.9955L81 27L128.25 45.0022C128.012 62.7194 123.6 80.1308 115.371 95.823C107.194 111.43 95.4106 124.861 81 135Z" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="min-md:hidden p-4 pt-15">
                    <A href="/data" class="cursor-pointer mx-auto max-w-48 min-w-35 block text-white font-extrabold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-lg">Get Started</A>
                </div>
            </div>
        </div>
    );
}

export default App;

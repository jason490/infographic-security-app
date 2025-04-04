import { A } from "@solidjs/router";
import { onMount } from 'solid-js';
import { initFlowbite } from 'flowbite';

function Navbar() {
    onMount(() => {
        initFlowbite();
    });
    const activelink = "cursor-not-allowed block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
    const inactivelink = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-800 fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap items-center max-md:justify-between mx-auto p-4">
                <a href="/" class="pl-5 md:pr-10 flex items-center place-items-center justify-center space-x-2 rtl:space-x-reverse">
                    <svg class="self-center text-gray-700 dark:text-blue-100" width="30" height="30" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.5 36.75V44.625M23.625 28.875V18.375C23.625 16.2864 24.4547 14.2834 25.9315 12.8065C27.4084 11.3297 29.4114 10.5 31.5 10.5C33.5886 10.5 35.5916 11.3297 37.0685 12.8065C38.5453 14.2834 39.375 16.2864 39.375 18.375V28.875M18.375 28.875H44.625C45.3212 28.875 45.9889 29.1516 46.4812 29.6438C46.9734 30.1361 47.25 30.8038 47.25 31.5V49.875C47.25 50.5712 46.9734 51.2389 46.4812 51.7312C45.9889 52.2234 45.3212 52.5 44.625 52.5H18.375C17.6788 52.5 17.0111 52.2234 16.5188 51.7312C16.0266 51.2389 15.75 50.5712 15.75 49.875V31.5C15.75 30.8038 16.0266 30.1361 16.5188 29.6438C17.0111 29.1516 17.6788 28.875 18.375 28.875Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white display-header-font">Cyber Security</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="cursor-pointer inline-flex items-center p-2 pr-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <A href="/" end={true} activeClass={activelink} inactiveClass={inactivelink} aria-current="page">Home</A>
                        </li>
                        <li>
                            <A href="/data" end={true} activeClass={activelink} inactiveClass={inactivelink}>Data</A>
                        </li>
                        <li>
                            <A href="/learn" end={true} activeClass={activelink} inactiveClass={inactivelink}>Learn</A>
                        </li>
                        <li>
                            <A href="/protect" end={true} activeClass={activelink} inactiveClass={inactivelink}>Protect</A>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
export default Navbar;

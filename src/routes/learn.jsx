import Navbar from "../components/Navbar";

function LearnPage() {
    const secondHeaderClass = "pb-3 text-2xl sm:text-3xl min-w-25 text-black dark:text-white font-bold display-header-font";
    return (
        <div>
            <Navbar />
            <div class="pt-30 mx-auto">
                <h1 class="m-3 sm:mb-8 text-center min-w-40 text-black text-4xl sm:text-5xl font-bold dark:text-white display-header-font">Types of Security</h1>
                <div class="flex flex-wrap flex-row gap-x-30 gap-y-10 justify-center p-9 pt-7 lg:p-15 lg:pt-15 xl:pt-25">
                    <div>
                        <div class="h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#physical">
                                <div class="flex sm:gap-x-2">
                                    <h2 class={secondHeaderClass}>Physical</h2>
                                    <svg class="text-gray-800 dark:text-blue-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 25">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                                    </svg>
                                </div>
                            </a>
                            <div class="flex flex-col gap-y-6 place-content-between ">
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Physical security is the blocking of unauthorized individuals from access
                                    to a place or object. For example, a security guard in the front desk asking
                                    for ids or putting your passport in a safe.
                                </p>
                                <a href="#physical" class="self-start place-self-start inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Learn more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="h-full flex flex-col place-content-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#technical">
                                <div class="flex gap-x-3">
                                    <h2 class={secondHeaderClass}>Technical</h2>
                                    <svg class="text-gray-800 dark:text-blue-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 25">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
                                    </svg>
                                </div>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Technical security is generally a software or software configuration
                                security system. For example, windows defender is a anti-malware software that detects and trys to remove
                                threats or a firewall that is configured to prevent any outside users from having access.
                            </p>
                            <a href="#technical" class="self-start inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Learn more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="">
                        <div class="h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#admin">
                                <div class="flex gap-x-3">
                                    <h2 class={secondHeaderClass}>Administrative</h2>
                                    <svg class="self-center text-gray-800 dark:text-blue-100" width="25" height="50" viewBox="0 0 197 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M147.75 60.25H49.25M147.75 100.417H49.25M147.75 140.583H49.25M147.75 180.75H49.25" stroke="currentColor" stroke-width="19" stroke-linecap="round" stroke-linejoin="round" />
                                        <rect x="25.6173" y="19.7143" width="145.765" height="201.571" rx="17.5" stroke="currentColor" stroke-width="20" />
                                    </svg>
                                </div>
                            </a>
                            <div class="flex flex-col gap-y-11 place-content-between">
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Administrative security is policies, procedures, and practices set by an organization.
                                    For example, it is rpi's policy is to wait for the door to
                                    close and have the next person scan in.
                                </p>
                                <a href="#admin" class="self-start inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Learn more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ml-15 mr-15 lg:ml-100 lg:mr-100">
                    <div class="mt-10 lg:mt-22">
                        <h1 id="physical" class="dark:text-white text-4xl font-bold display-header-font">
                            Physical Security
                        </h1>
                        <p class="dark:text-white text-lg mt-3">
                            Physical Security it the implementation of security measures in a defined structure used to deter or prevent unauthorized access.
                            This usually comes in the form of physical barriers or visible cameras to block or deter people with unauthorized access.
                        </p>
                        <h2 class="dark:text-white text-2xl font-bold display-header-font mt-4">
                            Examples:
                        </h2>
                        <ul class="dark:text-white list-disc text-lg mt-3 ml-5">
                            <li>
                                Security guards
                            </li>
                            <li>
                                Motion or thermal alarm systems
                            </li>
                            <li>
                                Biometrics (fingerprints, voice, face, iris, etc)
                            </li>
                        </ul>
                    </div>
                    <div class="mt-20 lg:mt-30">
                        <h1 id="technical" class="dark:text-white text-4xl font-bold display-header-font">
                            Technical Security Controls
                        </h1>
                        <p class="dark:text-white text-lg mt-3">
                            The most basic level of technical security, which is also known as logical controls, use technology
                            to reduce/remove threats in both hardware and software. Its usually automated tools to detect these
                            vulnerabilites or it can just both configuration of the the software.
                        </p>
                        <h2 class="dark:text-white text-2xl font-bold display-header-font mt-4">
                            Examples:
                        </h2>
                        <ul class="dark:text-white list-disc text-lg mt-3 ml-5">
                            <li>
                                Antivirus and anti-malware software (windows defender, bitwarden, etc)
                            </li>
                            <li>
                                Firewalls (set specific rules to block external access of the firewall)
                            </li>
                            <li>
                                Encryption (makes sure no one is able to see your message)
                            </li>
                        </ul>
                    </div>
                    <div class="mt-20 mb-10 lg:mt-30">
                        <h1 id="admin" class="dark:text-white text-4xl font-bold display-header-font">
                            Administrative Security/Controls
                        </h1>
                        <p class="dark:text-white text-lg mt-3">
                            Administrative controls usually refers policies, procedures, or guidelines that defines personnel
                            or business practices that align with the organizations security goals. This can come in the form of
                            laws, where there is a punshiment for not following it.
                        </p>
                        <h2 class="dark:text-white text-2xl font-bold display-header-font mt-4">
                            Examples:
                        </h2>
                        <ul class="dark:text-white list-disc text-lg mt-3 ml-5">
                            <li>
                                GDPR (General data protection right)
                            </li>
                            <li>
                                Acceptable use policy (making sure that companies devices are only used for work activities)
                            </li>
                            <li>
                                RPI Policy stating that students, facualty, and staff cannot open the door for others and have to ensure the door closes before the next person comes in
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnPage;

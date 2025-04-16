import Navbar from "../components/Navbar";
import PeopleStatsIcons from "../assets/svg/stats";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal, onMount } from "solid-js";
import { Carousel } from "flowbite";

function DataPage() {
    var donutoptions = {
        title: {
            text: "Known Expolited Vulnerabilities",
            style: {
                color: 'var(--color-white)'
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                    }
                }
            }
        },
        tooltip: {
            enabled: false
        },
        labels: ['Other', 'Microsoft', 'Apple', 'Cisco', 'Adobe', 'Google', 'Oracle', 'VMware'],
        theme: {
            palette: 'palette2'
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }],
        stroke: {
            colors: ['var(--color-grey-300)'],
        },
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    };
    const options = {
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        title: {
            text: "Number of Data Leaks by Severity",
            style: {
                color: 'var(--color-white)'
            }
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    colors: ['var(--color-gray-400)'],
                    fontSize: '13px'
                }
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: ['var(--color-gray-400)'],
                    fontSize: '13px'
                }
            }
        },
    };
    const [series, setSeries] = createSignal([
        {
            name: 'Num of Data-leaks',
            data: [
                { x: 'Emails', y: 141, fillColor: 'var(--color-red-500)' },
                { x: 'SSN', y: 168, fillColor: 'var(--color-red-600)' },
                { x: 'Credit Card', y: 78, fillColor: 'var(--color-red-700)' },
                { x: 'Personal Records', y: 73, fillColor: 'var(--color-red-800)' },
                { x: 'Full Details', y: 27, fillColor: 'var(--color-red-900)' }
            ]
        },
    ]);
    const donutSeries = [635, 328, 80, 76, 74, 61, 39, 26];
    return (
        <>
            <Navbar />
            <div class="pt-30 mx-auto">
                <h1 class="m-3 sm:mb-8 text-center min-w-40 text-black text-4xl sm:text-5xl font-bold dark:text-white display-header-font">Statistics</h1>
                <div id="indicators-carousel" class="relative lg:m-10 lg:ml-20 lg:mr-20 xl:ml-40 xl:mr-40" data-carousel="static">
                    <div class="relative overflow-hidden rounded-lg h-115 min-lg:h-130 xl:h-110 md:h-130">
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <div class="pt-2 m-3 md:m-10 md:mt-15 flex flex-wrap gap-x-9 sm:gap-y-10 flex-row place-content-center">
                                <PeopleStatsIcons class="max-sm:w-50 max-sm:h-50" />
                                <div class="self-center p-5 m-4 sm:m-0">
                                    <h1 class="text-black dark:text-red-700 display-header-font text-5xl sm:text-7xl font-bold">74%</h1>
                                    <h2 class="text-black dark:text-white text-2xl sm:text-3xl font-bold">of security breachs involve of human error</h2>
                                </div>
                            </div>
                        </div>
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
                            <div class="pt-2 m-3 md:m-10 md:mt-15 flex flex-wrap gap-x-9 sm:gap-y-10 flex-row place-content-center">
                                <div class="m-3 md:m-7 md:mt-3 flex flex-wrap gap-x-500 sm:gap-y-10 flex-row place-content-center">
                                    <div class="self-center m-2 sm:m-0">
                                        <h2 class="text-black dark:text-white text-2xl sm:text-3xl font-bold">Businesses lose <span class="text-red-700 font-bold text-3xl sm:text-4xl">$17,700</span> per minute due to phishing attacks </h2>
                                    </div>
                                    <div class="w-50 h-50">
                                        <svg class="w-50 h-50" width="500" height="500" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_65_12)">
                                                <path d="M30 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V8H2C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 0 9.46957 0 10L0 26C0 26.5304 0.210714 27.0391 0.585786 27.4142C0.960859 27.7893 1.46957 28 2 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V24H30C30.5304 24 31.0391 23.7893 31.4142 23.4142C31.7893 23.0391 32 22.5304 32 22V6C32 5.46957 31.7893 4.96086 31.4142 4.58579C31.0391 4.21071 30.5304 4 30 4ZM26 26H2V10H26V26ZM30 22H28V10C28 9.46957 27.7893 8.96086 27.4142 8.58579C27.0391 8.21071 26.5304 8 26 8H6V6H30V22Z" fill="white" />
                                                <path d="M14 24C15.1867 24 16.3467 23.6481 17.3334 22.9888C18.3201 22.3295 19.0892 21.3925 19.5433 20.2961C19.9974 19.1997 20.1162 17.9933 19.8847 16.8295C19.6532 15.6656 19.0818 14.5965 18.2426 13.7574C17.4035 12.9182 16.3344 12.3468 15.1705 12.1153C14.0067 11.8838 12.8003 12.0026 11.7039 12.4567C10.6075 12.9109 9.67047 13.6799 9.01118 14.6666C8.35189 15.6533 8 16.8133 8 18C8 19.5913 8.63214 21.1174 9.75736 22.2426C10.8826 23.3679 12.4087 24 14 24ZM14 14C14.7911 14 15.5645 14.2346 16.2223 14.6741C16.8801 15.1136 17.3928 15.7384 17.6955 16.4693C17.9983 17.2002 18.0775 18.0044 17.9231 18.7804C17.7688 19.5563 17.3878 20.269 16.8284 20.8284C16.269 21.3878 15.5563 21.7688 14.7804 21.9231C14.0044 22.0775 13.2002 21.9983 12.4693 21.6955C11.7384 21.3928 11.1136 20.8801 10.6741 20.2223C10.2346 19.5645 10 18.7911 10 18C10 16.9391 10.4214 15.9217 11.1716 15.1716C11.9217 14.4214 12.9391 14 14 14Z" fill="white" />
                                                <path d="M24 17H22V19H24V17Z" fill="white" />
                                                <path d="M6 17H4V19H6V17Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_65_12">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden duration-700 ease-in-out place-content-center" data-carousel-item>
                            <div class="max-sm:mt-30 h-80 w-80 sm:h-100 sm:w-140 md:h-100 md:w-150 m-auto">
                                <SolidApexCharts class="z-1" type="bar" options={options} series={series()} />
                            </div>
                        </div>
                        <div class="hidden duration-700 ease-in-out place-content-center ml-18 sm:ml-0" data-carousel-item>
                            <div class="max-sm:mt-40 h-80 w-80 sm:h-100 sm:w-110 md:h-100 md:w-120 mx-auto">
                                <SolidApexCharts class="self-center z-1" type="donut" options={donutoptions} series={donutSeries} />
                            </div>
                        </div>
                    </div>
                    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                        <button type="button" id="carousel-indicator" class="cursor-pointer w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" id="carousel-indicator" class="cursor-pointer w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" id="carousel-indicator" class="cursor-pointer w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" id="carousel-indicator" class="cursor-pointer w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    </div>
                    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-600/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-600 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-600/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-600 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default DataPage;

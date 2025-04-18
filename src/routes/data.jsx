import Navbar from "../components/Navbar";
import PeopleStatsIcons from "../assets/svg/stats";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal, onMount } from "solid-js";

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
            palette: 'palette2',
            monochrome: {
                enabled: true,
                color: 'rgb(127, 29, 29)',
                shadeTo: 'light',
                shageIntensity: 0.65
            }
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
            markers: {
                strokeWidth: 0
            }
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
                                <div class="m-3 md:m-7 md:mt-3 flex flex-wrap gap-x-500 sm:gap-y-9 flex-row place-content-center">
                                    <div class="self-center m-2 sm:m-0">
                                        <h2 class="text-black dark:text-white text-2xl sm:text-3xl font-bold">Businesses lose <span class="text-red-700 font-bold text-3xl sm:text-4xl">$17,700</span> per minute due to phishing attacks </h2>
                                    </div>
                                    <div class="w-50 h-50">
                                        <svg class="w-50 h-50" width="360" height="206" viewBox="0 0 360 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_68_13)">
                                                <path d="M329.62 5H29.42C15.9332 5 5 15.9332 5 29.42V175.92C5 189.407 15.9332 200.34 29.42 200.34H329.62C343.107 200.34 354.04 189.407 354.04 175.92V29.42C354.04 15.9332 343.107 5 329.62 5Z" stroke="white" stroke-width="15" stroke-miterlimit="10" />
                                                <path d="M182.44 155.48C213.175 155.48 238.09 130.565 238.09 99.83C238.09 69.0953 213.175 44.18 182.44 44.18C151.705 44.18 126.79 69.0953 126.79 99.83C126.79 130.565 151.705 155.48 182.44 155.48Z" stroke="white" stroke-width="15" stroke-miterlimit="10" />
                                                <path d="M76.21 91.79H60.13V107.87H76.21V91.79Z" fill="white" />
                                                <path d="M300.91 91.79H284.83V107.87H300.91V91.79Z" fill="white" />
                                            </g>
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
                        <div class="hidden duration-700 ease-in-out place-content-center ml-23 sm:ml-0" data-carousel-item>
                            <div class="max-sm:mt-40 h-80 w-80 sm:h-100 sm:w-110 md:h-100 md:w-120 sm:m-auto">
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

import Navbar from "../components/Navbar";
import PeopleStatsIcons from "../assets/svg/stats";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal, onMount } from "solid-js";
import { Carousel } from "flowbite";

function DataPage() {
    var donutoptions = {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
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
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    };
    const options = {
        title: {
            text: "Number of Data Leaks by Severity",
            style: {
                color: 'var(--color-white)'
            }
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        colors: ['var(--color-blue-500)', 'var(--color-red-500'],
    };
    const [series, setSeries] = createSignal([
        {
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
    ]);
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
                                <h2 class="text-black dark:text-white text-2xl sm:text-3xl font-bold">Businesses lose $17,700 per minute due to phishing attacks </h2>
                            </div>
                        </div>
                        <div class="hidden duration-700 ease-in-out place-content-center" data-carousel-item>
                            <div class="max-sm:mt-30 h-80 w-80 sm:h-100 sm:w-140 md:h-100 md:w-150 m-auto">
                                <SolidApexCharts class="" type="bar" options={options} series={series()} />
                            </div>
                        </div>
                        <div class="hidden duration-700 ease-in-out place-content-center" data-carousel-item>
                            <div class="max-sm:mt-30 h-80 w-80 sm:h-100 sm:w-140 md:h-100 md:w-150 m-auto">
                                <SolidApexCharts class="" type="donut" options={donutoptions} series={[44, 55, 13, 33]} />
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

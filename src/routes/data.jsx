import Navbar from "../components/Navbar";
import PeopleStatsIcons from "../assets/svg/stats";

function DataPage() {
    return (
        <>
            <Navbar />
            <div class="pt-30 mx-auto">
                <h1 class="m-3 sm:mb-8 text-center min-w-40 text-black text-4xl sm:text-5xl font-bold dark:text-white display-header-font">Statistics</h1>
                <div class="pt-5 flex flex-wrap gap-x-8 gap-y-9 flex-row place-content-center">
                    <PeopleStatsIcons class="order-2 lg:order-1 m-4" />
                    <div class="self-center order-1 lg:order-2 p-4">
                        <h1 class="self-center text-black dark:text-red-700 display-header-font text-7xl font-bold">74%</h1>
                        <h2 class="self-center text-black dark:text-white text-3xl font-bold">of security breachs involve of human error</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataPage;

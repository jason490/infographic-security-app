import { A } from "@solidjs/router";
import Navbar from "../components/Navbar";

function LearnPage() {
    return (
        <div>
            <Navbar />
            <div class="mt-30 mx-auto">
                <h1 class="mb-4 md:mb-8 text-center min-w-40 text-black text-3xl sm:text-4xl font-bold dark:text-white display-header-font">3 Types of Security</h1>
                <div class="flex flex-wrap gap-x-30 justify-center p-5">
                    <div class="">
                        <h2 class="text-center text-2xl sm:text-3xl min-w-30 text-black dark:text-white font-bold display-header-font">Physical</h2>
                    </div>
                    <div class="">
                        <h2 class="text-center text-2xl sm:text-3xl min-w-30 text-black dark:text-white font-bold display-header-font">Technical</h2>
                    </div>
                    <div class="">
                        <h2 class="text-center text-2xl sm:text-3xl min-w-30 text-black dark:text-white font-bold display-header-font">Administrative</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnPage;

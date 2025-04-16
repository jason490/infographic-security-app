import Navbar from "../components/Navbar";

function ProtectPage() {
    return (
        <>
            <Navbar />
            <div class="pt-30 mx-auto">
                <h1 class="m-3 sm:mb-8 text-center min-w-40 text-black text-4xl sm:text-5xl font-bold dark:text-white display-header-font">How to protect yourself</h1>
                <h2 class="text-black dark:text-white text-center">Protecting yourself helps protect the people around you</h2>
                <div class="grid grid-cols-2 gap-1 sm:gap-4 m-10 ml-3 mr-3 sm:ml-8 sm:mr-8 md:ml-15 md:mr-15 lg:ml-30 lg:mr-30 xl:ml-45 xl:mr-45">
                    <div class="place-content-center m-auto">
                        <svg class="h-30 w-30 sm:h-50 sm:w-50 text-blue-200" fill="currentColor" enable-background="new 0 0 128 128" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path fill="currentColor" d="M18.233,81.666l-0.016,0.003c0.006,0.012,0.01,0.022,0.016,0.036c0.008,0.101,0.026,0.195,0.04,0.293   c0.002,0.017,0,0.029,0.002,0.045l3.929,25.514c0.476,3.098,3.374,5.221,6.47,4.743c3.098-0.476,5.222-3.372,4.746-6.471   l-0.611-3.965c0.712,0.587,1.43,1.169,2.175,1.714c10.106,7.42,23.111,10.987,36.486,8.926c13.372-2.056,24.702-9.37,32.109-19.487   c3.662-4.988,6.353-10.695,7.922-16.793l-15.479-4.262c-1.044,4.191-2.882,8.109-5.405,11.552   c-5.012,6.824-12.566,11.713-21.593,13.105c-9.027,1.388-17.705-1.002-24.536-6.004c-0.841-0.616-1.645-1.282-2.424-1.976   l4.488,0.435c2.872,0.276,5.445-2.025,5.748-5.144c0.3-3.12-1.783-5.873-4.655-6.15l-23.659-2.291   c-2.568-0.248-4.884,1.572-5.564,4.188c-0.05,0.185-0.076,0.374-0.109,0.565c-0.021,0.132-0.061,0.255-0.074,0.39   c-0.004,0.041,0.002,0.077-0.001,0.114c-0.013,0.174-0.004,0.351-0.002,0.528C18.235,81.406,18.224,81.539,18.233,81.666z"/>
                                <path fill="currentColor" d="M109.767,46.334l0.015-0.002c-0.006-0.013-0.01-0.024-0.016-0.037c-0.008-0.1-0.027-0.195-0.04-0.293   c-0.002-0.015,0-0.029-0.002-0.044l-3.928-25.513c-0.477-3.097-3.373-5.221-6.472-4.744c-3.097,0.477-5.221,3.373-4.744,6.47   l0.612,3.967c-0.715-0.587-1.433-1.169-2.177-1.715c-10.106-7.419-23.112-10.989-36.484-8.926   c-13.374,2.055-24.703,9.371-32.109,19.487c-3.664,4.989-6.355,10.696-7.922,16.794l15.479,4.26   c1.042-4.19,2.882-8.108,5.403-11.551c5.012-6.824,12.569-11.712,21.595-13.105c9.027-1.386,17.703,1.002,24.536,6.002   c0.841,0.618,1.645,1.284,2.423,1.976l-4.487-0.434c-2.872-0.278-5.445,2.026-5.747,5.144c-0.303,3.119,1.782,5.873,4.653,6.15   l23.659,2.291c2.568,0.248,4.884-1.572,5.564-4.188c0.05-0.184,0.076-0.374,0.107-0.565c0.022-0.132,0.063-0.255,0.075-0.391   c0.006-0.038-0.003-0.075,0-0.112c0.014-0.175,0.007-0.353,0.003-0.53C109.764,46.595,109.774,46.462,109.767,46.334z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="place-content-center">
                        <h3 class="text-black dark:text-white font-bold text-md sm:text-2xl">1. Make sure to keep your software updated</h3>
                    </div>
                    <div class="place-content-center">
                        <h3 class="text-black dark:text-white font-bold text-md sm:text-2xl">2. Turn on Multifactor</h3>
                    </div>
                    <div class="place-content-center">
                        <h3 class="text-black dark:text-white font-bold text-md sm:text-2xl">3. Don't click on sus links</h3>
                    </div>
                    <div class="place-content-center">
                        <h3 class="text-black dark:text-white font-bold text-md sm:text-2xl">4. Change passwords regularly</h3>
                    </div>
                </div>
                <p class="text-black dark:text-white text-center">
                    Find out how much information you can google about yourself i.e. [Name] [current location]<br />
                    It is alot easier to find out about a person then you think
                    End to end encrypted vpn
                    Signal as your messaging app (unless your the government talking about military operations)
                    Control what you expose to the internet these include
                    <br />- controling permissions on your social media<br />
                    - Be careful of what you post
                    Make sure to not lose your stuff
                </p>
            </div>

        </>
    );
}

export default ProtectPage;

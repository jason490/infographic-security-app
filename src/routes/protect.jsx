import Navbar from "../components/Navbar";

function ProtectPage() {
    return (
        <>
            <Navbar />
            <div class="pt-30 mx-auto">
                <h1 class="m-3 sm:mb-8 text-center min-w-40 text-black text-4xl sm:text-5xl font-bold dark:text-white display-header-font">How to protect yourself</h1>
                <h2 class="text-black dark:text-white">Protecting yourself helps protect the people around you</h2>
                <p class="text-black dark:text-white">
                    Find out how much information you can google about yourself i.e. [Name] [current location]<br/>
                    It is alot easier to find out about a person then you think
                    End to end encrypted vpn
                    Signal as your messaging app (unless your the government talking about military operations)
                    Control what you expose to the internet these include
                        <br/>- controling permissions on your social media<br/>
                            - Be careful of what you post
                    Make sure to not lose your stuff
                </p>
            </div>

        </>
    );
}

export default ProtectPage;

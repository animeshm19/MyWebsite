// import RightIcon from '../assets/icons/rightIcon.svg'
export const Banner = () => {
    return (
        <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(0,_10,_40),rgb(0,_20,_60),rgb(0,_0,_84,_0.9),rgb(0,_20,_60),rgb(0,_10,_40))]">
            <div className = "container">
                <p className="font-medium">
                    <span className="hidden sm:inline text-white bg-gradient-to-r bg-clip-text text-transparent from-blue-200 to-blue-50">Welcome to my portfolio</span>
                    {/* <a href="#" className="underline underline-offset-4 text-white bg-gradient-to-r bg-clip-text text-transparent from-blue-50 to-blue-300">
                        Explore the demo</a> */}
                </p>

            </div>
        </div>
    );
};

import Image, { StaticImageData } from "next/image";
import Image1 from "./images/0520519f656551e208b757a2a02794eba3e3d3ee.png"
import { GoDotFill} from "react-icons/go";
export default function part3() {
    return (
        <div className="mt-28 mx-12">
            <h2 className="text-3xl font-bold text-blue-700 ml-4 mt-20">How it Works</h2>
            <div className="flex justify-center mt-20">
                <div className="w-7/12">
                    <Image
                        src={Image1}
                        alt="image1"
                        className="rounded-xl"
                    />
                </div>
                <div className="w-4/12 mx-auto my-auto">
                    <div className="my-3">
                        <h3 className="font-bold text-xl mb-2 ">Create and monetize</h3>
                        <ul className="text-neutral-600 text-md ml-4">
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Set your prices freely</span></li>
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Offer sponsorship packages</span></li>
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Turn your live streams into paid content</span></li>
                        </ul>
                    </div>
                    <div className="my-3">
                        <h3 className="font-bold text-xl my-2 ">Share according to your means</h3>
                        <ul className="text-neutral-600 text-md ml-4">
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Quality choice (SD / HD)</span></li>
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Suitable for limited connections</span></li>
                        </ul>
                    </div>
                    <div className="my-3">
                        <h3 className="font-bold text-xl my-2  ">Engage your audience</h3>
                        <ul className="text-neutral-600 text-md ml-4">
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Real-time notifications (purchases, donations)</span></li>
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Direct interaction during live streams</span></li>
                        </ul>
                    </div>
                    <div className="my-3">
                        <h3 className="font-bold text-xl my-2 ">Track your performance</h3>
                        <ul className="text-neutral-600 text-md ml-4">
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Real-time dashboard</span></li>
                            <li className="flex items-center"><GoDotFill  className="h-3" /><span>Access your audience for your next campaigns</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
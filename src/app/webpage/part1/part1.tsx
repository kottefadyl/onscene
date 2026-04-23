import Header from "../header";
import "../style/web.css"


export default function part1() {
  return (
    <div className="relative bg-[url('/images/1.png')] h-screen welcome1">
      <div className="absolute inset-0 bg-black/60">
        <Header />

        <div className="flex items-center justify-center min-h-4/5">
          <div className="text-center text-neutral-50">
            <h2 className="text-5xl font-bold my-3">
              Live from art, <br />support your artists
            </h2>
            <p>
              OnScene is a cultural platform where live performances <br/> and exceptional knowledge become accessible thanks to an engaged community.
            </p>

            <div className="mt-10">
              <button className="mx-2 rounded-3xl bg-yellow-300 text-black py-2 px-4">Explore events</button>
              <button className="mx-2 roundedpy-2 px-4 py-2 rounded-3xl bg-neutral-600">Become a creator</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

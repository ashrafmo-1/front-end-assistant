"use client"
import XMarkIcon  from './XMarkIcon.png';
import Image from "next/image";
import "./globlas.css";

export default function Banner() {
  
  const removeBanner = () => {
    const banner = document.querySelector('.banar');
    console.log('hello btn');
    if (banner) {
      banner.remove();
    }
  }

  return (
    <div className="banar relative isolate flex items-center justify-center bg-gray-50 px-6 py-2.5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900 none_media">
          <strong className="font-semibold">GitHub Folow</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          make folow in gitHub to show all updates
        </p>
        <a
          href="https://github.com/Front-End-Tools-1"
          target='_blank'
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          go now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex justify-end absolute right-10" onClick={() => removeBanner()}>
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <Image src={XMarkIcon} alt='x' width={15} />
        </button>
      </div>
    </div>
  )
}

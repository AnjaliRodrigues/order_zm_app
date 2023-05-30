import React, { useState } from "react";

function All() {
  const [statusVisible, setStatusVisible] = useState(false);
  const toggleStatus = () => {
    setStatusVisible(!statusVisible);
  };

  return (
    <div>
      <button onClick={toggleStatus}>
        <div className="text-white bg-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800   whitespace-nowrap px-6 py-4">
          All
        </div>
      </button>
      {statusVisible && (
        <div>
          <h1 class=" mb-3 mt-3 ml-2 font-bold ">
            Recent orders are shown first
          </h1>

          <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Order pending
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: vfhyetdEc43Jhfbu5jft
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Thursday,18 May 2023 at 01:44
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items: Rice bell bulk
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹240.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button
                      class=" border-t-2 border-dashed border-yellow-400 uppercase    
border-t-2 border-dashed border-yellow-400 uppercase bg-white text-sm hover:bg-orange-700 text-yellow-500 font-bold  px-4 rounded-l
shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Order Pending
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: hdigsvrb475cDUhfRKha
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Monday,1 May 2023 at 09:23
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items: Mumtaz Dry fig
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹261.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-white   text-sm hover:bg-orange-700 text-yellow-500 font-bold py-2 px-4 rounded-l     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    order pending
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: hdsjhgDt53rFesUcghyt
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Friday,28 April 2023 at 09:05
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items: Mango pickle
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹45.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-white   text-sm hover:bg-orange-700 text-yellow-500 font-bold py-2 px-4 rounded-l     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Packaging
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: fsgvfrir28hdVSgyKteshf
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Wednesday,12 April 2023 at 01:15
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items:Pringles fusion chutney
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹99.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-white   text-sm hover:bg-orange-700 text-yellow-500 font-bold py-2 px-4 rounded-l     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Packaging
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: mabgrtshufvss5jgsSif
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Tuesday,11 April 2023 at 11:54
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items: Amul cheese
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹204.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-white   text-sm hover:bg-orange-700 text-yellow-500 font-bold py-2 px-4 rounded-l     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Ready
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: lalah54hgGtunKdSghuer
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Tuesday,4 April 2023 at 12:00
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items: Amul Sundae chocolate
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹30.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-white   text-sm hover:bg-orange-700 text-yellow-500 font-bold py-2 px-4 rounded-l     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Cancelled
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: lagdstHuhFsbKfrS87es
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Thursday,30 March 2023 at 01:30
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items: Tropicana orange 200ml
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹240.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-white   text-sm hover:bg-orange-700 text-yellow-500 font-bold py-2 px-4 rounded-l     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <div class="text-xs text-yellow-400 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Delivered
                  </div>

                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ID: druijhDbh63JEmkgDogF
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Saturday,25 March 2023 at 02:00
                  </p>
                  <p class="text-xs text-gray-500 justify self-start tracking-wide text-sm text-black-500 font-semibold">
                    Items: Maggi cube veget
                  </p>
                  <p class="text-xs text-gray-500 italic justify self-start tracking-wide text-sm text-black-500 ">
                    Purchase method : Book & pickup
                  </p>
                  <p class="text-xs text-black justify self-start tracking-wide text-sm text-black-500 font-bold">
                    ₹190.0
                  </p>

                  <div class="inline-flex justify-center ">
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-white   text-sm hover:bg-orange-700 text-yellow-500 font-bold py-2 px-4 rounded-l     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      Call Merchant
                    </button>
                    <button class=" border-t-2 border-dashed border-yellow-400 uppercase bg-orange-500 text-sm  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r     shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      <svg
                        class="h-5 w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />{" "}
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                      Order Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default All;

const Checkout = () => {
  return (
    <>
      <div className="h-screen bg-gray-100 dark:bg-black pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Checkout</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">SIZE: 36EU - 4US</p>
                  <p className="mt-1 text-xs text-gray-700">SKU: 58493434532</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 dark:bg-slate-800">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border text-black bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer  rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 dark:bg-slate-800">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-black">259.000 ₭</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 text-black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-2/3">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-3 items-center">
                <div className="w-32">
                  <span className="text-gray-600 font-semibold">Contact</span>
                </div>
                <div className="flex-grow pl-3">
                  <span>Sebastián Calquín</span>
                </div>
              </div>
              <div className="w-full flex items-center">
                <div className="w-32">
                  <span className="text-gray-600 font-semibold">
                    Billing Address
                  </span>
                </div>
                <div className="flex-grow pl-3">
                  <span>123 Santiago Centro, Chile</span>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full mx-auto rounded-lg border border-gray-200 p-3 text-gray-800 font-light mb-6">
              <div className="w-full flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="checked:accent-white" />
                  <img
                    src="https://iconape.com/wp-content/files/gd/353363/png/mercadopago-logo.png"
                    width="80"
                    className="ml-3"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button className=" flex items-center justify-center w-72 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>{" "}
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

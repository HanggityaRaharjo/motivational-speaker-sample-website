export default function Home() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:h-[500px] mb-5 relative">
            {/* Kiri */}
            <div className="lg:w-1/2 lg:h-[500px] h-[420px] flex flex-col justify-center text-center lg:text-left lg:pl-10">
              <div className="mb-10">
                <p className="font-bold lg:text-2xl text-xl">
                  DISCOVER YOUR PASSION
                </p>
                <p className="lg:text-6xl text-4xl font-bold">BE UNSTOPPABLE</p>
              </div>

              <div className="flex lg:justify-start justify-center gap-5">
                <button className="bg-blue-500 text-white px-5 py-3 font-semibold rounded-md">
                  Get in Touch
                </button>
                <button className="bg-blue-50 text-blue-500 px-5 py-3 font-semibold rounded-md">
                  Start your journey
                </button>
              </div>
            </div>
            {/* End Kiri */}
            {/* Kanan */}
            <div className="lg:w-1/2 -mt-20 lg:mt-0 flex justify-center items-center h-full overflow-hidden">
              <div className="relative h-96 w-[600px]">
                {/* Shadow */}
                <div className="w-72 h-48 absolute left-72 bg-gradient-to-b from-white to-gray-300 rounded-md top-5"></div>
                <div className="w-96 h-56 absolute  bg-gradient-to-b from-white to-gray-300 right-20 rounded-md top-36"></div>
                <div className="w-32 h-48 absolute  bg-gradient-to-b from-white to-gray-300 rounded-md left-28 bottom-10"></div>
                {/* End Shadow */}
                <img
                  src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_42/2840621/190430-mark-zuckerberg-f8-ew-153p.jpg"
                  alt=""
                  className="lg:w-72 w-56 lg:h-44 absolute object-cover rounded-lg left-2 top-5"
                />

                <img
                  src="https://images.inc.com/uploaded_files/image/1920x1080/getty_962130392_2000133320009280233_380105.jpg"
                  alt=""
                  className="lg:w-96 w-72 lg:h-56 absolute object-cover rounded-lg lg:-right-5 -right-10 lg:top-36 top-44"
                />

                <img
                  src="https://s.yimg.com/uu/api/res/1.2/YPIgv49UHsWIwdr8k9fLBA--~B/aD02MzY7dz05NjA7YXBwaWQ9eXRhY2h5b24-/http://globalfinance.zenfs.com/en_us/Finance/US_AFTP_SILICONALLEY_H_LIVE/Mark_Zuckerberg_wrote_a_nearly-f86e8405fc72d47b670d6772b1f5d5c5"
                  alt=""
                  className="lg:w-40 w-32 h-52 lg:h-60 absolute object-cover object-center rounded-lg lg:left-10 left-2 shadow-lg bottom-1"
                />
              </div>
            </div>
            {/* End Kanan */}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5 ">
            {/*  */}
            <div className="flex justify-center items-center">
              <div className="lg:w-96 w-10/12 flex gap-5 shadow-md rounded-md p-2">
                <div className="w-16 h-16 bg-orange-100 rounded-md flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-orange-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-3xl font-bold">999</p>
                    <p className="text-xl font-bold">+</p>
                  </div>
                  <p className="font-semibold text-sm">SATISFIED CLIENTS</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center">
              <div className="lg:w-96 w-10/12 flex gap-5 shadow-md rounded-md p-2">
                <div className="w-16 h-16 bg-blue-100 rounded-md flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-3xl font-bold">150</p>
                    <p className="text-xl font-bold">+</p>
                  </div>
                  <p className="font-semibold text-sm">AWARDS</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center">
              <div className="lg:w-96 w-10/12 flex gap-5 shadow-md rounded-md p-2">
                <div className="w-16 h-16 bg-green-100 rounded-md flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-3xl font-bold">27</p>
                    <p className="text-xl font-bold">+</p>
                  </div>
                  <p className="font-semibold text-sm">YEARS EXPERIENCE</p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center py-5 mb-5">
        {/* Kiri */}
        <div className="lg:w-4/12  flex justify-center items-center relative">
          <div className="w-64 h-96 absolute bg-gradient-to-b from-white to-gray-100 left-0 rounded-md scale-125 hidden lg:block"></div>
          <img
            src="https://asset.kompas.com/crops/GQUver5Id7jVYzbXgJveT7OJ0qg=/65x0:650x390/1200x800/data/photo/2015/10/27/1658302Mark-Jadi780x390.jpg"
            alt=""
            className="w-64 h-96 object-cover rounded-lg shadow-md relative"
          />
        </div>
        {/* Kanan */}
        <div className="lg:w-8/12  flex flex-col justify-center items-center lg:p-10 p-2">
          <div className="p-5 shadow-md rounded-md">
            <p className="text-3xl font-bold mb-2 lg:text-left text-center">
              I AM MARK ZUCKERBERG
            </p>
            <p className="text-md lg:text-left text-center font-bold mb-2">
              ENTREPRENEUR, BEST-SELLING AUTHOR & MOTIVATIONAL SPEAKER
            </p>
            <p className="mb-5 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              cupiditate quasi repudiandae exercitationem iusto, dolorem, sequi
              enim, harum beatae sit excepturi? Officiis mollitia iste
              perferendis saepe? Blanditiis esse consectetur soluta cupiditate
              ducimus enim tempora, maiores earum facilis iste fugiat nostrum!
              Eligendi aliquid eveniet temporibus, ducimus ex perspiciatis
              consequuntur dignissimos et.
            </p>
            <button className="bg-blue-500 text-white px-5 py-3 font-semibold rounded-md">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="px-10 flex lg:flex-row flex-col py-10">
        <div className="lg:w-1/2 w-full flex items-center justify-center mb-5 lg:mb-0">
          <div className="w-full">
            <p className="lg:text-7xl text-5xl font-bold lg:text-left text-center text-blue-500">
              SUBSCRIBE
            </p>
            <p className="lg:text-3xl lg:text-left text-center text-xl font-bold">
              FOR DAILY MOTION
            </p>
            <p className="lg:text-xl lg:text-left text-center font-bold lg:mb-10 mb-5">
              GET LATEST INFORMATION
            </p>
            <div className="w-full">
              <div className="flex justify-center lg:justify-start">
                <input
                  type="text"
                  className=" bg-blue-100 h-12 rounded-l-md px-2 w-44"
                  placeholder="example@gmail.com"
                />
                <button className="bg-blue-500 text-white lg:px-5 px-2 py-3 font-semibold rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <img
            src="https://images.ctfassets.net/6nwv0fapso8r/6fHhKK91M3A1gWzMOnT2SC/938c43456c52909ac7200740b3c0417d/front-EN.png"
            alt=""
          />
        </div>
      </section>

      <section className="lg:px-20 px-5 mb-5">
        <div className="grid grid-cols-1 gap-10">
          <div className=" w-full bg-white shadow-md rounded-md p-5 ">
            <img
              src="https://cdn.britannica.com/54/187354-050-BE0530AF/Facebook-Founder-CEO-Mark-Zuckerberg-email-messaging-system-St-Regis.jpg"
              alt=""
              className="w-full h-[400px] object-cover rounded-md shadow-md mb-5"
            />
            <p className="text-2xl font-bold mb-5 text-center">
              UPCOMING EVENT
            </p>
            <p className="mb-5 lg:text-center text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptatibus tenetur modi, aliquam soluta voluptate qui voluptatum
              natus adipisci, eos tempora ut sunt quasi? Voluptates debitis iure
              reprehenderit sint totam voluptatibus similique commodi vitae. Ea,
              quibusdam perspiciatis? Voluptatum aut molestias dolorem, sed
              assumenda fuga enim aliquam sint placeat asperiores autem
              doloribus eos porro eum praesentium ipsam libero possimus, ducimus
              amet saepe dolorum. Fugiat, reiciendis aliquam. Et porro vel iste
              ut voluptates quis corporis. Eum dolores aliquid, eius sapiente
              doloribus nesciunt dolorum totam molestiae iure possimus,
              voluptatum magni dolore officia excepturi temporibus, nam iusto
              repudiandae itaque similique ducimus. At, error perspiciatis.
            </p>

            <div className="flex gap-5 flex-wrap justify-center">
              <button className="bg-blue-500 text-white px-5 py-3 font-semibold rounded-md">
                Read More
              </button>
              <button className="bg-blue-500 text-white px-5 py-3 font-semibold rounded-md">
                Join Event
              </button>
              <button className="bg-blue-500 text-white px-5 py-3 font-semibold rounded-md">
                Share this Event
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

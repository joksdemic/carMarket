import React from "react";

function InfoSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-[#eef0fc] mt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8 ">
          <div className="md:col-span-3">
            <img src="https://rb.gy/lqml1y" className="rounded" alt="" />
          </div>

          <div className="md:col-span-1 mr-12">
            <div className="max-w-lg md:max-w-none">
              <h2 className="font-semibold text-gray-900 sm:text-3xl">
                SPORTY DESIGN MEETS REFINED JAPANESE AESTHETICS IN ONE
              </h2>

              <p className="mt-4 text-gray-700">
                With elegant lines that reflect the beauty and motion of the
                surroundings, the all-new Mazda EZ-6 introduces an innovative
                approach to the award-winning Kodo design. A new front lighting
                system, an electric rear spoiler, and a dynamic side line
                emphasize its sporty spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;

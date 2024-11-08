import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import formLaporan from "../assets/form-laporan.png";

const Section4 = () => {
  return (
    <section className="flex flex-col my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="flex flex-col items-center my-32">
            <div className="max-w-[420px]">
              <div className="space-y-3">
                <h2 className="font-bold text-gray-700 text-4xl">Lapor Isu</h2>
                <p className="font-thin text-gray-500">
                  Laporkan pencemaran atau masalah lingkungan perairan secara
                  cepat dan mudah.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-gray-500">
                <li className="flex flex-row items-center gap-5">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600"
                  />
                  <p>Unggah bukti dan lokasi</p>
                </li>
                <li className="flex flex-row items-center gap-5">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600"
                  />
                  <p>Kirim laporan</p>
                </li>
                <li className="flex flex-row items-center gap-5">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600"
                  />
                  <p>Pantau status laporan</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 items-center border-2 rounded-xl w-3/4">
          <div className="py-5 my-6 flex justify-end">
            <img
              src={formLaporan}
              alt="form-laporan"
              className="scale-95 border-t-2 border-l-2 border-b-2 rounded-tl-2xl rounded-bl-2xl transform origin-right hover:shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

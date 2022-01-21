import React, { useEffect, useState } from "react";
import Main from "../layout/Main";

import { LockClosedIcon } from "@heroicons/react/solid";
import { berita } from "../../services/berita";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDataBerita();
  }, []);

  const getDataBerita = async () => {
    setLoading(true);
    const beritaTemp = await berita();

    console.log(beritaTemp.data);
    setData(beritaTemp.data);
    setLoading(false);
  };
  return (
    <Main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Berita</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {loading === true ? (
              <div>
                <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-full">
                  <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="p-4 md:p-6">
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ) : (
              data.map((item, index) => (
                <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-full">
                  <div className="p-4 md:p-6">
                    <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
                      {}
                    </p>
                    <h3 className="truncate font-semibold mb-2 text-xl leading-tight sm:leading-normal">
                      {item["title"]}
                    </h3>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </Main>
  );
}

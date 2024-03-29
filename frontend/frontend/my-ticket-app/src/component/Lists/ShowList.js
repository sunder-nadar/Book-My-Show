import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShowContext } from "../context/ShowContext/ShowContext";

const ShowList = () => {
  const { getShowDetails, show } = useContext(ShowContext);

  const param = window.location.pathname;
  const arr = param.split("/");
  var M_id = arr[arr.length - 1];
  var T_id = arr[arr.length - 2];
  M_id = parseInt(M_id, 10);
  T_id = parseInt(T_id, 10);
  useEffect(() => {
    getShowDetails(M_id, T_id);
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <>
      <section className="">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl bg-opacity-20 md:h-screen ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 p-3 md:text-4xl text-2xl text-center">
                Shows
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 mt-8">
              <div className="w-4/5">
                <div className=" md:h-20 h-15 bg-slate-700 flex flex-row justify-between rounded-2xl">
                  <p className="md:p-4 p-3 md:text-4xl text-2xl text-white">
                    Show Time
                  </p>
                  <p className="md:p-4 p-2 md:text-4xl text-2xl text-white">
                    Show Date
                  </p>
                </div>
              </div>
              {show?.length > 0 ? (
                show?.map((show) => {
                  return (
                    <div className="w-3/5" key={show?.id}>
                      <Link to={`/seats/${show?.id}`}>
                        <div className=" md:h-20 h-15 bg-purple-300 flex flex-row justify-between rounded-2xl">
                          <p className="md:p-4 p-3 md:text-4xl text-2xl text-zinc-500">
                            {show?.show_time}
                          </p>
                          <p className="md:p-4 p-2 md:text-4xl text-2xl text-zinc-500">
                            {formatDate(show?.show_date)}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <h2 className="text-2xl">No Shows Available</h2>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowList;

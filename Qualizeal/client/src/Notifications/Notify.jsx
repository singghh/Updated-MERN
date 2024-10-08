import React, { useEffect, useState } from "react";
import { MdMessage } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";

const Notify = () => {
  //   const Notifications = {
  //     email: "bamlabhavanibai@gmail.com",
  //     heading: "Are you intrestend in doing this job",
  //     matter: "Please read the data below and accept we will meet you",
  //   };

  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const response = await fetch(`http://localhost:3004/datainsert`, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(Notifications),
  //         });
  //         const data = await response.json();
  //         console.log(data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //     getData();
  //   }, []);
  const email = "vaarunsingghh@gmail.com";
  const [show, showData] = useState([]);
  useEffect(() => {
    async function display() {
      try {
        const response = await fetch(
          `http://localhost:3004/notifications/data/${email}`
        );
        const data = await response.json();
        showData(data);
        console.log(show);
      } catch (e) {
        console.log(e);
      }
    }
    display();
  }, []);
  return (
    <>
      <div className="mx-auto p-4 shadow-lg">
        <div className="flex px-10 pb-4 flex-col ">
          {show.map((data, index) => (
            <div
              className="border-b-2 pb-5 flex items-center gap-3 pt-3"
              key={index}
            >
              <div>
                <MdMessage size={35} color="#5a99fe" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-lg">{data.heading}</p>
                <p className="text-xs py-1">
                  {formatDistanceToNow(new Date(data.ontime), {
                    addSuffix: true,
                  })}
                </p>
                <p className="line-clamp-2">{data.matter}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Notify;

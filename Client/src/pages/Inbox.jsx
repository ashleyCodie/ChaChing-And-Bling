import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageList, deleteMessage } from "../redux/messageSlice";

const Inbox = () => {
  const  { messages }  = useSelector((state) => state.message);
  console.log("messages", messages)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(messageList());
  }, []);

  useEffect(() => {
    console.log("messages", messages);
  }, [messages]);

  return (
    <div>
      <h2 className="text-7xl mt-5 font-semibold tracking-tight text-center text-red-600 sm:text-7xl">
        Inbox
      </h2>
      <div>
        <ul role="list" className="divide-y divide-gray-500 pl-96 pe-96">
          {messages.map((message, index) => (
            <li key={index} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <span className="text-md font-semibold text-black">
                    <span className="text-red-600">From:</span>  {message.firstName} {message.lastName} 
                  </span>
                  <p className="mt-1 truncate text-md text-black">
                  <span className="text-red-600">Contact Number:</span> {message.phoneNumber}
                  </p>
                  <p className="mt-1 truncate text-md text-black">
                  <span className="text-red-600">Email:</span> {message.email}
                  </p>
                  <p className="mt-1 truncate text-md text-black">
                  <span className="text-red-600">Message:</span> {message.messageBody}
                  </p>
                </div>
              </div>
              <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className=" text-md text-black">
                  <span className="font-bold text-red-600">Date:</span>{" "}
                  {new Date(message.messageDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
                <button 
                onClick={() => dispatch(deleteMessage(message.id))}
                className="bg-red-600 rounded-lg p-2 mt-10">Delete</button>
              </div>
            </li>
          ))}
          {/* <hr className="text-black" /> */}
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Inbox;
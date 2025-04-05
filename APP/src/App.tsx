import { useState } from "react";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="mx-12 my-4 rounded-xl  border p-4 border-gray-300 bg-gray-200">
        <div className="bg-white py-4 rounded-xl">
          <div className="flex ">
            <div className="flex-1 border-r border-gray-300 px-12">
              <div className="font-bold text-lg text-start">Add a Task</div>
              <input
                type="text"
                required
                className="border rounded-lg p-2 w-full mt-2 border-gray-300 text-sm"
                placeholder="Title"
              />
              <input
                type="text"
                required
                className="border rounded-lg p-2 w-full mt-2 border-gray-300 text-sm"
                placeholder="Description"
              />
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white rounded-lg py-1 mt-2 px-8 text-sm hover:bg-blue-600 cursor-pointer active:bg-blue-700"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="flex-1 px-12">
              <div className="flex flex-col gap-2">
                <div className="rounded-xl bg-gray-300 p-4 drop-shadow-md">
                  <div className="text-lg font-bold">Task 1</div>
                  <div className="flex justify-between gap-2 items-center mt-2">
                    <div className="font-bold text-sm">Description</div>
                    <button className="border border-black rounded-lg px-6 py-1 text-sm hover:bg-gray-200 cursor-pointer active:bg-gray-300">
                      Done
                    </button>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-300 p-4 drop-shadow-md">
                  <div className="text-lg font-bold">Task 1</div>
                  <div className="flex justify-between gap-2 items-center mt-2">
                    <div className="font-bold text-sm">Description</div>
                    <button className="border border-black rounded-lg px-6 py-1 text-sm hover:bg-gray-200 cursor-pointer active:bg-gray-300">
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

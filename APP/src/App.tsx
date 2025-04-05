import { useState } from "react";
import { Button, Input } from "./components";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="mx-12 my-4 rounded-xl  border p-4 border-gray-300 bg-gray-200">
        <div className="bg-white py-4 rounded-xl">
          <div className="flex ">
            <div className="flex-1 border-r border-gray-300 px-12">
              <div className="font-bold text-lg text-start">Add a Task</div>
              <Input type="text" required placeholder="Title" />
              <Input type="text" required placeholder="Description" />
              <div className="flex justify-end">
                <Button varient="primary" type="submit">
                  Add
                </Button>
              </div>
            </div>
            <div className="flex-1 px-12">
              <div className="flex flex-col gap-2">
                <div className="rounded-xl bg-gray-300 p-4 drop-shadow-md">
                  <div className="text-lg font-bold">Task 1</div>
                  <div className="flex justify-between gap-2 items-center mt-2">
                    <div className="font-bold text-sm">Description</div>
                    <Button varient="outlined">Done</Button>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-300 p-4 drop-shadow-md">
                  <div className="text-lg font-bold">Task 1</div>
                  <div className="flex justify-between gap-2 items-center mt-2">
                    <div className="font-bold text-sm">Description</div>
                    <Button varient="outlined">Done</Button>
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

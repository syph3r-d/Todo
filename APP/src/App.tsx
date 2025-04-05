import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Todos } from "./Views/Todos";
import { Route, BrowserRouter as Router, Routes } from "react-router";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

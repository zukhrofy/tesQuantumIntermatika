import { Routes, Route } from "react-router-dom";

import Login from "@/features/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import { PegawaiContextProvider } from "./features/pegawai/PegawaiContext";
import PegawaiRoutes from "./routes/PegawaiRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <PegawaiContextProvider>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/pegawai/*" element={<PegawaiRoutes />} />
        </Routes>
      </PegawaiContextProvider>

      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}

export default App;

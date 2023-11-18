import { Routes, Route } from "react-router-dom";

import Pegawai from "@/features/pegawai/Pegawai";
import Dashboard from "@/pages/dashboard/Dashboard";
import EditPegawai from "@/features/pegawai/editPegawai";
import AddPegawai from "@/features/pegawai/AddPegawai";

const PegawaiRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Dashboard>
            <Pegawai />
          </Dashboard>
        }
      />
      <Route
        path="/add"
        element={
          <Dashboard>
            <AddPegawai />
          </Dashboard>
        }
      />
      <Route
        path="/:id"
        element={
          <Dashboard>
            <EditPegawai />
          </Dashboard>
        }
      />
    </Routes>
  );
};

export default PegawaiRoutes;

import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

export const PegawaiContext = createContext();

export const pegawaiReducer = (state, action) => {
  switch (action.type) {
    case "SET_PEGAWAIS":
      return action.payload;
    case "UPDATE_PEGAWAI":
      const updatedEmployee = action.payload;
      const updatedEmployees = state.rows.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      });
      return {
        ...state,
        rows: updatedEmployees,
      };
    case "ADD_PEGAWAI":
      return {
        ...state,
        rows: [...state.rows, action.payload],
      };
    case "DELETE_PEGAWAI":
      const newPegawai = state.rows.filter((w) => w.id !== action.payload);
      return {
        ...state,
        rows: newPegawai,
      };
    default:
      return state;
  }
};

export const PegawaiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pegawaiReducer, []);

  useEffect(() => {
    const fetchPegawai = async () => {
      const response = await axios("/api/Pegawai");
      dispatch({ type: "SET_PEGAWAIS", payload: response.data });
    };
    // Fetch data only if it hasn't been fetched yet
    if (state.length === 0) {
      fetchPegawai();
    }
  }, [state, dispatch]);

  return (
    <PegawaiContext.Provider value={{ pegawais: state, dispatch }}>
      {children}
    </PegawaiContext.Provider>
  );
};

export const usePegawaiContext = () => {
  const context = useContext(PegawaiContext);
  return context;
};

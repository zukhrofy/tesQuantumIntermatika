import { Link } from "react-router-dom";
import { usePegawaiContext } from "./PegawaiContext";
import { useNavigate } from "react-router-dom";

const Pegawai = () => {
  const { pegawais, dispatch } = usePegawaiContext();
  const navigate = useNavigate();
  const handleDelete = async (pegawaiId) => {
    try {
      // await axios.delete(`/api/Pegawai/${pegawaiId}`);
      dispatch({ type: "DELETE_PEGAWAI", payload: pegawaiId });
    } catch (error) {
      console.error("Error deleting pegawai:", error);
    }
  };

  return pegawais ? (
    <>
      <button
        onClick={() => navigate("/pegawai/add")}
        className="mb-5 px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded">
        Add Pegawai
      </button>
      <table className="shadow-lg bg-white border-collapse">
        <thead>
          <tr>
            {pegawais.columns &&
              pegawais.columns.map((pegawaiCol) => (
                <th
                  key={pegawaiCol.name}
                  className={`w-[${pegawaiCol.width}px] px-8 py-4 text-center bg-blue-100 border`}>
                  {pegawaiCol.name}
                </th>
              ))}
            <th className="px-8 py-4 bg-blue-100 border"></th>
            <th className="px-8 py-4 bg-blue-100 border"></th>
          </tr>
        </thead>
        <tbody>
          {pegawais.rows &&
            pegawais.rows.map((pegawaiData) => (
              <tr className="hover:bg-gray-50" key={pegawaiData.id}>
                <td className="border px-8 py-4">{pegawaiData.nama}</td>
                <td className="border px-8 py-4">{pegawaiData.nip}</td>
                <td className="border px-8 py-4">{pegawaiData.jabatan}</td>
                <td className="border px-8 py-4">
                  <Link
                    to={`/pegawai/${pegawaiData.id}`}
                    className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded">
                    Details
                  </Link>
                </td>
                <td className="border px-8 py-4">
                  <button
                    onClick={() => handleDelete(pegawaiData.id)}
                    className="px-4 py-2 text-xs font-medium text-white bg-red-600 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  ) : (
    <h1>tidak ada data</h1>
  );
};

export default Pegawai;

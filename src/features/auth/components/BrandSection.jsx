import authImage from "@/features/auth/assets/image/login-register.jpg";

const BrandSection = () => {
  return (
    <section className="lg:col-span-5 xl:col-span-6 relative lg:flex lg:items-end h-24 lg:h-full bg-gray-600">
      <img
        src={authImage}
        alt="login page background"
        className="absolute w-full h-full object-cover opacity-60"
      />
      {/* title and desc hidden at mobile */}
      <div className="hidden lg:block relative p-12 space-y-4">
        <h2 className="text-4xl font-bold text-white">
          Pengelolaan Data Pegawai
        </h2>
        <p className="text-white/90">
          Kelola informasi pegawai, melalui portal pencatatan karyawan kami.
        </p>
      </div>
    </section>
  );
};

export default BrandSection;

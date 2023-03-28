import { useSelector } from "react-redux";

const Bedroom = () => {
  const { _id, email } = useSelector((state) => state.user);

  return (
    <div className="bg-bedroom bg-cover bg-center full-screen ">
      <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt className="truncate text-sm font-medium text-gray-500">{_id}</dt>
        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {email}
        </dd>
      </div>
      <h1>BEDROOM</h1>
      <h1>{_id}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default Bedroom;

import { useSelector } from "react-redux";

const Bedroom = () => {
  const { _id, email } = useSelector((state) => state.user);

  return (
    <>
      <h1>BEDROOM</h1>
      <h1>{_id}</h1>
      <h1>{email}</h1>
    </>
  );
};

export default Bedroom;

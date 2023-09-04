import { Puff } from "react-loader-spinner";

const Reloader = () => {
  return (
    <div className="relolder">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#3b4149"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Reloader;

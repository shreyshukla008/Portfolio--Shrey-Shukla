import Error from "./Error";
import Spinner from "./Spinner";

const AsyncState = ({ loading, error, children, spinnerClassName = "p-8" }) => {
  if (loading) {
    return (
      <div className={`w-full flex justify-center items-center ${spinnerClassName}`}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[300px] w-[300px] mx-auto z-40">
        <Error />
      </div>
    );
  }

  return children;
};

export default AsyncState;

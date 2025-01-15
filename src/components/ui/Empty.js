import { DeleteIcon, EpmtyIcon } from "../icons";

function Empty({ data }) {
  return (
    <>
      {!data.length && (
        <div className="flex justify-center items-center">
          <span className="font-bold text-xl p-8 flex items-center gap-1">
            <EpmtyIcon />
            No Data
          </span>
        </div>
      )}
    </>
  );
}

export default Empty;

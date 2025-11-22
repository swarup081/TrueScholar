import { Loader2 } from "lucide-react";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-gray-900/90 rounded-[1.7rem] ${
        className || ""
      } text-base text-white shadow-xl backdrop-blur-md`}
    >
      <Loader2 className="w-5 h-5 mr-4 animate-spin text-blue-400" />
      Minting Credential...
    </div>
  );
};

export default Generating;
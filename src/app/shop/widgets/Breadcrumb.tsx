import { BiChevronRight } from "react-icons/bi";

interface BreadcrumbProps {
  label: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ label }) => {
  return (
    <div className="w-full bg-[#f3f2ee] h-[120px] capitalize">
      <nav
        className="max-w-[100%] md:max-w-[730px] lg:max-w-[900px] xl:max-w-[1170px] pl-9 md:pl-0 h-full m-auto flex flex-col justify-center"
        aria-label="breadcrumb"
      >
        <div className="text-[#111] text-[24px] font-semibold">{label}</div>
        <div className="flex items-center text-gray-600 text-[15px] mt-2">
          <div className="flex items-center">
          <span className="text-gray-800">Home</span>
              <BiChevronRight className="w-4 h-4 mx-1 text-gray-400" />
              <span className="font-medium text-gray-800">{label}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;

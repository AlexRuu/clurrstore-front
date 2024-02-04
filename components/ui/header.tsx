import Breadcrumb from "./breadcrumbs";

interface PageHeaderProps {
  second?: string;
  title?: string;
  headerTitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  second,
  title,
  headerTitle,
}) => {
  return (
    <>
      <div className="med-small:ml-[9px] ml-3 text-xs">
        <Breadcrumb second={second} title={title} />
      </div>
      <div className="w-full mb-10 flex justify-center flex-nowrap">
        <h1 className="font-medium text-2xl flex mb-4">{headerTitle}</h1>
      </div>
    </>
  );
};

export default PageHeader;

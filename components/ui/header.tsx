import Breadcrumb from "./breadcrumbs";

interface PageHeaderProps {
  second?: string;
  title?: string;
  headerTitle?: string;
  disabled?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  second,
  title,
  headerTitle,
}) => {
  return (
    <>
      <div className="med-small:ml-3 ml-3 text-xs">
        <Breadcrumb second={second} title={title} disabled />
      </div>
      <div className="w-full mb-10 flex justify-center flex-nowrap mt-7">
        <h1 className="font-medium text-3xl flex mb-4">{headerTitle}</h1>
      </div>
    </>
  );
};

export default PageHeader;

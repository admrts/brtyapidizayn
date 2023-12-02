import MainLayout from "../../../../../layouts/main";
import FireplaceDetails from "../../../../../components/FireplaceDetails";
import data from "./data.json";

const Page = () => {
  return (
    <MainLayout>
      <FireplaceDetails data={data} />
    </MainLayout>
  );
};

export default Page;

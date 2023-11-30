import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./stamford.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} />
    </MainLayout>
  );
};

export default Page;

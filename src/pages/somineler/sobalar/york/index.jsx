import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./york.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"York Serisi"} />
    </MainLayout>
  );
};

export default Page;

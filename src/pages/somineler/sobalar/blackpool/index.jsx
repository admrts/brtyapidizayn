import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./blackpool.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"BlackPool Serisi"} />
    </MainLayout>
  );
};

export default Page;

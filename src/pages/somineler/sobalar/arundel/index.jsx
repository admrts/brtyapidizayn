import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./arundel.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Arundel Serisi"} />
    </MainLayout>
  );
};

export default Page;

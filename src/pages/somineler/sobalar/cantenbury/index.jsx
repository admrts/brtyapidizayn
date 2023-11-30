import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./cantenbury.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Cantenbury"} />
    </MainLayout>
  );
};

export default Page;

import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./salford.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Salford"} />
    </MainLayout>
  );
};
export default Page;

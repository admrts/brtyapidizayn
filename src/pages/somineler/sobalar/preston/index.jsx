import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./preston.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Preston"} />
    </MainLayout>
  );
};
export default Page;

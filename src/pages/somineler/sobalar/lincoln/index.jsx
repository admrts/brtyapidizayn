import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./lincoln.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Lincoln"} />
    </MainLayout>
  );
};
export default Page;

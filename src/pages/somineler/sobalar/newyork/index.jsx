import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./newyork.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"New York Serisi"} />
    </MainLayout>
  );
};
export default Page;

import { getBuyersData } from "@/lib/data-services";
import Buyers from "@/screens/buyers";

async function BuyersPage() {
  const buyersData = await getBuyersData();

  return (
    <>
      <Buyers buyers={buyersData} />
    </>
  );
}

export default BuyersPage;

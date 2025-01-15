import { getUniqueUser } from "@/lib/data-services";
import EditUsers from "@/screens/users/edit";

async function EditUserpage({ params }) {
  const { userId } = await params;
  const userData = await getUniqueUser(userId);

  return (
    <>
      <EditUsers userData={userData} userId={userId} />
    </>
  );
}

export default EditUserpage;

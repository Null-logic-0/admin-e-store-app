import { getUsers } from "@/lib/data-services";
import Users from "@/screens/users";

async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      <Users data={users} />
    </>
  );
}

export default UsersPage;

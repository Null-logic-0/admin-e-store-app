import { createUser } from "@/actions/userActions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default async function AddUsersForm({ searchParams }) {
  const { errorMessage } = await searchParams;
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2"> Add User </h1>

      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={createUser}
      >
        {errorMessage && (
          <di className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50">
            <span className="text-md text-red-500 col-span-2 my-0 font-medium">
              {errorMessage}
            </span>
          </di>
        )}
        <div className="grid gap-2">
          <Label required={true} className="font-bold">
            Username
          </Label>
          <Input placeholder="Enter Username" name="userName" type="text" />
        </div>
        <div className="grid gap-2">
          <Label required={true}>User type</Label>
          <select
            className="custom-input bg-white cursor-pointer"
            name="userType"
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label required={true}>Password</Label>
          <Input placeholder="Example@123" name="password" type="password" />
        </div>
        <div className="grid gap-2">
          <Label required={true}>Confirm password</Label>
          <Input
            placeholder="Re-enter password"
            name="confirmPassword"
            type="password"
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

"use client";
import { UpdateUser } from "@/actions/userActions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";

function EditUsers({ userData, userId }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2"> Edit User </h1>

      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => UpdateUser(formData, userId)}
      >
        <div className="grid gap-2">
          <Label className="font-bold">Username</Label>
          <Input
            placeholder="Enter Username"
            name="userName"
            type="text"
            defaultValue={userData.userName}
          />
        </div>
        <div className="grid gap-2">
          <Label>User type</Label>
          <select
            className="custom-input bg-white cursor-pointer"
            name="userType"
            defaultValue={userData.userType}
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label>Reset Password</Label>
          <Input placeholder="Example@123" name="password" type="password" />
        </div>
        <div className="grid gap-2">
          <Label>Confirm password</Label>
          <Input
            placeholder="Re-enter password"
            name="confirmPassword"
            type="password"
          />
        </div>

        <Button type="submit">Edit</Button>
      </form>
    </div>
  );
}

export default EditUsers;

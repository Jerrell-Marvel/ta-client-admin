"use client";

import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { Button, Form, Input } from "@heroui/react";
import { FormEvent, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const toggleVisibility = () => setisPasswordVisible(!isPasswordVisible);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(username, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Form
        className="bg-slate-100 rounded-lg p-8 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h1>LOGIN</h1>
        <Input
          label="Username"
          placeholder="Masukkan username"
          value={username}
          onValueChange={setUsername}
          isRequired
          variant="bordered"
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Username harus diisi";
            }
          }}
        />

        <Input
          className="max-w-xs"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isPasswordVisible ? <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" /> : <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />}
            </button>
          }
          label="Password"
          placeholder="Enter your password"
          type={isPasswordVisible ? "text" : "password"}
          variant="bordered"
          onValueChange={setPassword}
          value={password}
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Password harus diisi";
            }
          }}
        />

        <Button
          className="w-full"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

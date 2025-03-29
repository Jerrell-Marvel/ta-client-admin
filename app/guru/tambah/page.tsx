"use client";
import { isNumeric, isValidNIK, isValidPhoneNumber } from "@/utils/validator";
import { Button, Form, Input, Radio, RadioGroup } from "@heroui/react";
import { FormEvent, useState } from "react";

type SubmitError = { name?: string };

export default function TambahGuru() {
  const [namaLengkap, setNameLengkap] = useState("");
  const [NIK, setNIK] = useState("");
  const [gender, setGender] = useState("laki-laki");
  const [alamat, setAlamat] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [submitErrors, setSubmitErrors] = useState<SubmitError>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ namaLengkap, NIK, gender, alamat, nomorTelepon });
  };

  return (
    <Form
      className=""
      onSubmit={handleSubmit}
      validationErrors={submitErrors}
    >
      <Input
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return "Please enter your name";
          }

          return submitErrors.name;
        }}
        label="Name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter your name"
      />

      <Input
        label="Nama lengkap"
        placeholder="Masukkan nama lengkap"
        value={namaLengkap}
        onValueChange={setNameLengkap}
        isRequired
        labelPlacement="outside"
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return "Nama lengkap harus diisi";
          }

          console.log("here");
          return submitErrors.name;
        }}
      />

      <Input
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return "Email harus diisi";
          }
          if (validationDetails.typeMismatch) {
            return "Email tidak valid";
          }
        }}
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />

      <Input
        label="NIK"
        placeholder="Masukkan NIK"
        value={NIK}
        onValueChange={setNIK}
        isRequired
        labelPlacement="outside"
        errorMessage={({ validationDetails, validationErrors }) => {
          if (validationDetails.valueMissing) {
            return "NIK harus diisi";
          }

          if (validationDetails.customError) {
            return validationErrors[0];
          }
        }}
        validate={(value) => {
          if (value && !isValidNIK(value)) {
            return "NIK tidak valid. Pastikan terdiri dari 16 digit angka";
          }
        }}
      />

      <RadioGroup
        label="Jenis kelamin"
        value={gender}
        onValueChange={setGender}
        orientation="horizontal"
        isRequired
      >
        <Radio value="laki-laki">Laki-laki</Radio>
        <Radio value="perempuan">Perempuan</Radio>
      </RadioGroup>

      <Input
        label="Alamat"
        placeholder="Masukkan Alamat"
        value={alamat}
        onValueChange={setAlamat}
        isRequired
        labelPlacement="outside"
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return "Alamat harus diisi";
          }
        }}
      />

      <Input
        label="Nomor telepon"
        placeholder="Masukkan nomor telepon"
        value={nomorTelepon}
        onValueChange={setNomorTelepon}
        isRequired
        labelPlacement="outside"
        errorMessage={({ validationDetails, validationErrors }) => {
          if (validationDetails.valueMissing) {
            return "Nomor telepon harus diisi";
          }

          if (validationDetails.customError) {
            return validationErrors[0];
          }

          return;
        }}
        validate={(value) => {
          if (value && !isValidPhoneNumber(value)) {
            return "Nomor telepon tidak valid. Pastikan diawali dengan 0 dan berisi 9-13 digit angka.";
          }
        }}
      />

      <Input
        label="Foto profil"
        isRequired
        labelPlacement="outside"
        type="file"
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return "Foto profil harus diisi";
          }
        }}
        accept="image/png, image/jpg, image/jpeg"
      />

      <Button
        className="w-full"
        type="submit"
      >
        Tambah
      </Button>
    </Form>
  );
}

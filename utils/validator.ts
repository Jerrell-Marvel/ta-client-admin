const phoneRegex = /^0[2-9][0-9]{7,11}$/;
export function isValidPhoneNumber(phone: string) {
  return phoneRegex.test(phone);
}

const nikRegex = /^[1-9][0-9]{15}$/;
export function isValidNIK(nik: string): boolean {
  return nikRegex.test(nik);
}

export function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

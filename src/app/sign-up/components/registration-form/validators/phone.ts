import { AbstractControl } from '@angular/forms';

const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export const phoneValidator = ({ value }: AbstractControl) =>
  value && !regex.test(value) ? { phoneValidator: true } : null;

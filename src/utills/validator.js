
export const required_gb = value =>
  value || typeof value === 'number' ? undefined : 'Required';

export const number_gb = value =>
  value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined;


export const email_gb = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const tooYoung_gb = value =>
  value && value < 18
    ? `Vous ne remplissez pas l'âge minimum requis!`
    : undefined;

export const correctDateNum_gb = value =>
  value && value > 31 ? 'enter the correct date' : undefined;

  export const correctMonthNum_gb = value =>
  value && value > 12 ? 'enter the correct month' : undefined;

export const correctYearNum_gb = value =>
  value && value < 1900 ? `enter the correct year` : undefined;

  export const confirm_pass_gb = (confirm_password, values)  => confirm_password !== values.password
      ? 'Password mismatched'
      : undefined;
   

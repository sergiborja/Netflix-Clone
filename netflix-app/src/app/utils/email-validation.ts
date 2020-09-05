export default function validateEmail(email) {
  console.log('ENTRA');
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validation = re.test(String(email).toLowerCase());
  if (!validation) return false;
  const [, domain] = email.split('.');
  const posibleDomains = ['com', 'es', 'org', 'net', 'edu', 'mil'];
  for (var i = 0; i < posibleDomains.length; i++) {
    if (posibleDomains[i] !== domain) {
      validation = false;
    } else {
      validation = true;
      break;
    }
  }
  return validation;
}

import * as moment from 'moment';

export function getBirthdateFromCNP(cnp) {
  let century;

  switch (cnp.charAt(0)) {
    case '1':
    case '2':
      century = '19';
      break;
    case '3':
    case '4':
      century = '18';
      break;
    case '5':
    case '6':
      century = '20';
      break;
  }

  const year = century + cnp.substring(1, 3);
  const month = cnp.substring(3, 5);
  const day = cnp.substring(5, 7);

  return `${day}.${month}.${year}`;
}

export function getAge(birthdate) {
  const age = moment(birthdate, "dd.mm.yyyy").fromNow().split(' ')[0];
  return age;
}

export function getGenderFromCNP(cnp) {
  return (Number(cnp.charAt(0)) % 2) ? 'M' : 'F';
}

export function checkCNP(cnp) {
  return cnp.length === 13 && cnp.substr(0, 1) !== '0' && Number(cnp);
}

export function checkCID(cid) {
  return cid.length === 19 && (Number(cid.substr(0, 4)) || cid.substr(0, 4) == '0000') && (Number(cid.substr(5, 4)) || cid.substr(5, 4) == '0000') && (Number(cid.substr(10, 4)) || cid.substr(10, 4) == '0000') && (Number(cid.substr(15, 4)) || cid.substr(15, 4) == '0000') && cid.substr(4, 1) == '-' && cid.substr(9, 1) == '-' && cid.substr(14, 1) == '-';
}
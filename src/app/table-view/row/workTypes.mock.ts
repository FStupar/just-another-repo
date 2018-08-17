class WorkType {
  name: string;
  code: number;
  hasDayCount: boolean;
  isSpecial: boolean;
}

const WORKTYPES: WorkType[] = [
  {
    name: 'R. Nal. kod narucioca',
    code: undefined,
    hasDayCount: true,
    isSpecial: false
  },
  { name: 'Redovan Rad', code: 6, hasDayCount: true, isSpecial: false },
  {
    name: 'Redovan Rad - Nedelja',
    code: 44,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Rad- Drzav. i Verski Praznik',
    code: 45,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Rad- Drzav. i Verski Praznik - Nedelja',
    code: 17,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Redov. Rad - Službeni put',
    code: 32,
    hasDayCount: true,
    isSpecial: false
  },
  { name: 'Produženi Rad', code: 34, hasDayCount: true, isSpecial: false },
  {
    name: 'Produženi Rad - Nedelja',
    code: 36,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Prod. Rad - Držav. i Verski Praznici',
    code: 41,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Prod. Rad - Držav. i Verski Praz-Nedelja',
    code: 49,
    hasDayCount: true,
    isSpecial: false
  },
  { name: 'Prijava Bolovanja', code: 54, hasDayCount: true, isSpecial: false },
  {
    name: 'Bolovanje preko FOND-a',
    code: 50,
    hasDayCount: true,
    isSpecial: false
  },
  { name: 'Bolovanje 65%', code: 58, hasDayCount: true, isSpecial: false },
  {
    name: 'Specijal. Bolovanja 100%',
    code: 60,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Povreda Na Radu 100%',
    code: 20,
    hasDayCount: true,
    isSpecial: false
  },
  { name: 'Državni Praznik', code: 18, hasDayCount: true, isSpecial: false },
  { name: 'Godišnji Odmor', code: 66, hasDayCount: true, isSpecial: false },
  {
    name: 'Vojna Vezba - Poz. Org',
    code: 67,
    hasDayCount: true,
    isSpecial: false
  },
  { name: 'Plaćeno Odsustvo', code: 70, hasDayCount: true, isSpecial: false },
  {
    name: 'Opravdani Izostanci',
    code: 72,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Neopravdani Izostanci',
    code: 74,
    hasDayCount: true,
    isSpecial: false
  },
  { name: 'Interventni rad', code: 46, hasDayCount: true, isSpecial: false },
  {
    name: 'Interventni rad - nedelja',
    code: 47,
    hasDayCount: true,
    isSpecial: false
  },
  {
    name: 'Interventni rad - drzav. praznik',
    code: 48,
    hasDayCount: true,
    isSpecial: false
  },
  { name: undefined, code: 197, hasDayCount: false, isSpecial: true },
  { name: 'Dodatak za noćni rad', code: 9, hasDayCount: true, isSpecial: true },
  {
    name: 'Dodatak za otežane uslove rada',
    code: 90,
    hasDayCount: false,
    isSpecial: true
  },
  {
    name: 'Dodatak za kućno dežurstvo',
    code: 91,
    hasDayCount: false,
    isSpecial: true
  }
];

export default WORKTYPES;

class WorkType {
  name: string;
  code: number;
  hasDayCount: boolean;
}

const WORKTYPES: WorkType[] = [
  { name: 'R. Nal. kod narucioca', code: undefined, hasDayCount: true },
  { name: 'Redovan Rad', code: 6, hasDayCount: true },
  { name: 'Redovan Rad - Nedelja', code: 44, hasDayCount: true },
  { name: 'Rad- Drzav. i Verski Praznik', code: 45, hasDayCount: true },
  { name: 'Rad- Drzav. i Verski Praznik - Nedelja', code: 17, hasDayCount: true },
  { name: 'Redov. Rad - Službeni put', code: 32, hasDayCount: true },
  { name: 'Produženi Rad', code: 34, hasDayCount: true },
  { name: 'Produženi Rad - Nedelja', code: 36, hasDayCount: true },
  { name: 'Prod. Rad - Držav. i Verski Praznici', code: 41, hasDayCount: true },
  { name: 'Prod. Rad - Držav. i Verski Praz-Nedelja', code: 49, hasDayCount: true },
  { name: 'Prijava Bolovanja', code: 54, hasDayCount: true },
  { name: 'Bolovanje preko FOND-a', code: 50, hasDayCount: true },
  { name: 'Bolovanje 65%', code: 58, hasDayCount: true },
  { name: 'Specijal. Bolovanja 100%', code: 60, hasDayCount: true },
  { name: 'Povreda Na Radu 100%', code: 20, hasDayCount: true },
  { name: 'Državni Praznik', code: 18, hasDayCount: true },
  { name: 'Godišnji Odmor', code: 66, hasDayCount: true },
  { name: 'Vojna Vezba - Poz. Org', code: 67, hasDayCount: true },
  { name: 'Plaćeno Odsustvo', code: 70, hasDayCount: true },
  { name: 'Opravdani Izostanci', code: 72, hasDayCount: true },
  { name: 'Neopravdani Izostanci', code: 74, hasDayCount: true },
  { name: 'Interventni rad', code: 46, hasDayCount: true },
  { name: 'Interventni rad - nedelja', code: 47, hasDayCount: true },
  { name: 'Interventni rad - drzav. praznik', code: 48, hasDayCount: true },
  { name: undefined, code: 197, hasDayCount: false }
];

export default WORKTYPES;

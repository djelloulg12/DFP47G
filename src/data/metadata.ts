import { DegreeMetadata, TrainingModeMetadata, SectorMetadata, Institution, DegreeLevel, TrainingMode, SectorCategory, Municipality } from '../types';

export const DEGREES_INFO: Record<DegreeLevel, DegreeMetadata> = {
  BTS: {
    code: 'BTS',
    arabicName: 'شهادة تقني سامي',
    shortArabic: 'ش.ت.س',
    frenchCode: 'BTS',
    levelNumber: 5,
    nominalDuration: '30 شهراً (30 أشهر)',
    standardRequirement: 'الثالثة ثانوي كاملة (3AS) أو شهادة تقني BT عبر المعابر (لا يشترط البكالوريا)',
    color: 'indigo',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  BT: {
    code: 'BT',
    arabicName: 'شهادة تقني',
    shortArabic: 'ش.ت',
    frenchCode: 'BT',
    levelNumber: 4,
    nominalDuration: '24 شهراً إلى 30 شهراً',
    standardRequirement: 'الثانية ثانوي كاملة (2AS) أو الثالثة ثانوي، أو شهادة CAP عبر المعابر',
    color: 'blue',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  CAP: {
    code: 'CAP',
    arabicName: 'شهادة الكفاءة المهنية',
    shortArabic: 'ش.ك.م',
    frenchCode: 'CAP',
    levelNumber: 3,
    nominalDuration: '12 إلى 18 شهراً',
    standardRequirement: 'الرابعة متوسط كاملة (4AM) أو نهاية التعليم الأساسي',
    color: 'emerald',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  CMP: {
    code: 'CMP',
    arabicName: 'شهادة التحكم المهني',
    shortArabic: 'ش.ت.م',
    frenchCode: 'CMP',
    levelNumber: 2,
    nominalDuration: '12 إلى 18 شهراً',
    standardRequirement: 'الثانية أو الثالثة من التعليم المتوسط',
    color: 'purple',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  CQP: {
    code: 'CQP',
    arabicName: 'شهادة تأهيلية مهنية',
    shortArabic: 'ش.تأهيل.م',
    frenchCode: 'CQP',
    levelNumber: 0,
    nominalDuration: '3 إلى 6 أشهر (تكوين سريع)',
    standardRequirement: 'مفتوح لجميع المستويات / بدون اشتراط مستوى دراسي محدد',
    color: 'rose',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  BEP: {
    code: 'BEP',
    arabicName: 'شهادة التعليم المهني',
    shortArabic: 'ش.ت.م.م (تعليم مهني)',
    frenchCode: 'BEP',
    levelNumber: 4,
    nominalDuration: '36 شهراً (3 سنوات)',
    standardRequirement: 'الرابعة متوسط ناجح وموجه للتعليم المهني',
    color: 'teal',
    badgeClass: 'bg-teal-50 text-teal-700 border-teal-200'
  },
  CFPS: {
    code: 'CFPS',
    arabicName: 'شهادة نهاية الطور الأول للتخصص',
    shortArabic: 'ش.ن.ط.أ',
    frenchCode: 'CFPS',
    levelNumber: 1,
    nominalDuration: '6 إلى 12 شهراً',
    standardRequirement: 'مستوى الابتدائي أو دون الرابعة متوسط',
    color: 'slate',
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200'
  }
};

export const TRAINING_MODES_INFO: Record<TrainingMode, TrainingModeMetadata> = {
  residential: {
    id: 'residential',
    name: 'تكوين حضوري (إقامي)',
    iconName: 'Building2',
    description: 'دروس نظرية وتطبيقية تتم بالكامل داخل ورشات وقاعات المركز التكويني.',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200'
  },
  apprenticeship: {
    id: 'apprenticeship',
    name: 'تكوين عن طريق التمهين',
    iconName: 'Briefcase',
    description: 'تكوين تطبيقي عملي داخل مؤسسة أو ورشة اقتصادية مع يومين دراسيين بالمركز ومنحة شهرية.',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  evening: {
    id: 'evening',
    name: 'دروس مسائية',
    iconName: 'Moon',
    description: 'موجه للموظفين والعمال والراغبين في الدراسة في الفترة المسائية وعطلة نهاية الأسبوع.',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  qualifying_initial: {
    id: 'qualifying_initial',
    name: 'تكوين تأهيلي أولي',
    iconName: 'Zap',
    description: 'دورات تأهيلية مهنية قصيرة المدى لاكتساب مهارات عملية سريعة لسوق العمل.',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  bridging: {
    id: 'bridging',
    name: 'تكوين عن طريق المعابر',
    iconName: 'TrendingUp',
    description: 'يمكّن حاملي شهادات التكوين المهني من الارتقاء إلى مستوى أعلى (مثلاً من تقني إلى تقني سامي).',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  homemakers: {
    id: 'homemakers',
    name: 'المرأة الماكثة في البيت',
    iconName: 'Home',
    description: 'برامج وتخصصات مخصصة للنساء لاكتساب حرف ومهارات تمكنهن من العمل المنزلي وإنشاء نشاط مصغر.',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200'
  },
  rural: {
    id: 'rural',
    name: 'فرع في الوسط الريفي',
    iconName: 'Trees',
    description: 'فروع تدريبية تقترب من قاطني المناطق والقرى الريفية في ولاية غرداية.',
    badgeColor: 'bg-lime-50 text-lime-700 border-lime-200'
  },
  unemployment_grant: {
    id: 'unemployment_grant',
    name: 'تكوين طالبي منحة البطالة',
    iconName: 'UserCheck',
    description: 'تأهيل سريع لحاملي منحة البطالة لتعزيز قابليتهم للتشغيل وفق معايير الوكالة الوطنية للتشغيل.',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200'
  },
  contractual: {
    id: 'contractual',
    name: 'تكوين تعاقدي',
    iconName: 'FileCheck',
    description: 'تكوين مبني على اتفاقيات مع الشركاء الاقتصاديين والاجتماعيين لتلبية احتياجات نوعية.',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  vocational_education: {
    id: 'vocational_education',
    name: 'جهاز التعليم المهني',
    iconName: 'GraduationCap',
    description: 'مسار تعليمي تقني مدمج يمنح شهادة التعليم المهني (BEP) لطلبة الرابعة متوسط.',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
  }
};

export const SECTORS_INFO: Record<SectorCategory, SectorMetadata> = {
  informatics_telecom: {
    id: 'informatics_telecom',
    name: 'إعلام آلي، رقمنة وشبكات',
    iconName: 'Laptop',
    color: 'blue'
  },
  industry_electricity: {
    id: 'industry_electricity',
    name: 'كهرباء، صناعة وكهروميكانيك',
    iconName: 'Cpu',
    color: 'amber'
  },
  mechanics_automotive: {
    id: 'mechanics_automotive',
    name: 'ميكانيك، سيارات ودراجات',
    iconName: 'Wrench',
    color: 'slate'
  },
  construction_public_works: {
    id: 'construction_public_works',
    name: 'بناء، طوبوغرافيا وأشغال عمومية',
    iconName: 'HardHat',
    color: 'orange'
  },
  agriculture_environment: {
    id: 'agriculture_environment',
    name: 'فِلاحة، بيئة، تربية حيوانات وصناعات غذائية',
    iconName: 'Leaf',
    color: 'emerald'
  },
  crafts_textiles: {
    id: 'crafts_textiles',
    name: 'خياطة، أزياء، سجاد وحرف تقليدية',
    iconName: 'Scissors',
    color: 'rose'
  },
  tourism_hospitality: {
    id: 'tourism_hospitality',
    name: 'سياحة، فندقة، إطعام وصناعة الحلويات',
    iconName: 'Utensils',
    color: 'yellow'
  },
  administration_management: {
    id: 'administration_management',
    name: 'إدارة، أمانة، تسويق وموارد بشرية',
    iconName: 'FileSpreadsheet',
    color: 'indigo'
  },
  personal_care_services: {
    id: 'personal_care_services',
    name: 'حلاقة، تجميل، وقص وتصفيف الشعر',
    iconName: 'Sparkles',
    color: 'pink'
  },
  hygiene_security_environment: {
    id: 'hygiene_security_environment',
    name: 'نظافة وأمن وبيئة (HSE) ووقاية وأمن',
    iconName: 'ShieldAlert',
    color: 'red'
  },
  renewable_energy: {
    id: 'renewable_energy',
    name: 'طاقات متجددة، ترصيص صحي وتبريد وتكييف',
    iconName: 'SunMedium',
    color: 'cyan'
  }
};

export const MUNICIPALITIES_LIST: Municipality[] = [
  'غرداية',
  'بونورة',
  'بريان',
  'القرارة',
  'متليلي',
  'زلفانة',
  'ضاية بن ضحوة',
  'المنصورة',
  'سبسب',
  'واد نشو',
  'السوارق',
  'القمقوم'
];

export const INSTITUTIONS_LIST: Institution[] = [
  {
    id: 'insfp_bounoura',
    name: 'المعهد الوطني المتخصص في التكوين المهني (بونورة)',
    shortName: 'INSFP بونورة',
    type: 'INSFP',
    municipality: 'بونورة',
    isPrivate: false,
    description: 'معهد متخصص في التكوينات العليا بدرجة تقني سامي وتأهيل نوعي في الفلاحة والبيئة وصيانة المعدات'
  },
  {
    id: 'iep_oued_nechou',
    name: 'معهد التعليم المهني واد نشو غرداية',
    shortName: 'معهد التعليم المهني واد نشو',
    type: 'IEP',
    municipality: 'واد نشو',
    isPrivate: false,
    description: 'معهد مخصص للتعليم المهني وتقنيات السياحة والإطعام والضخ الشمسي والتبريد'
  },
  {
    id: 'cfpa_ghardaia_females',
    name: 'مركز التكوين المهني و التمهين إناث غرداية',
    shortName: 'CFPA إناث غرداية',
    type: 'CFPA',
    municipality: 'غرداية',
    isPrivate: false
  },
  {
    id: 'cfpa_ghardaia_mixed',
    name: 'مركز التكوين المهني و التمهين المختلط غرداية',
    shortName: 'CFPA المختلط غرداية',
    type: 'CFPA',
    municipality: 'غرداية',
    isPrivate: false
  },
  {
    id: 'cfpa_ghardaia_1er_nov',
    name: 'مركز التكوين المهني و التمهين أول نوفمبر بغرداية',
    shortName: 'CFPA أول نوفمبر غرداية',
    type: 'CFPA',
    municipality: 'غرداية',
    isPrivate: false
  },
  {
    id: 'cfpa_souareg',
    name: 'مركز التكوين المهني والتمهين السوارق',
    shortName: 'CFPA السوارق',
    type: 'CFPA',
    municipality: 'السوارق',
    isPrivate: false
  },
  {
    id: 'cfpa_gamgouma',
    name: 'مركز التكوين المهني و التمهين القمقومة',
    shortName: 'CFPA القمقومة',
    type: 'CFPA',
    municipality: 'القمقوم',
    isPrivate: false
  },
  {
    id: 'cfpa_dhaya',
    name: 'مركز التكوين المهني و التمهين ضاية بن ضحوة',
    shortName: 'CFPA ضاية بن ضحوة',
    type: 'CFPA',
    municipality: 'ضاية بن ضحوة',
    isPrivate: false
  },
  {
    id: 'cfpa_bounoura',
    name: 'مركز التكوين المهني و التمهين بونورة غرداية',
    shortName: 'CFPA بونورة',
    type: 'CFPA',
    municipality: 'بونورة',
    isPrivate: false
  },
  {
    id: 'cfpa_guerrara_01',
    name: 'مركز التكوين المهني و التمهين القرارة',
    shortName: 'CFPA القرارة 01',
    type: 'CFPA',
    municipality: 'القرارة',
    isPrivate: false
  },
  {
    id: 'cfpa_guerrara_02',
    name: 'مركز التكوين المهني و التمهين القرارة 02',
    shortName: 'CFPA القرارة 02',
    type: 'CFPA',
    municipality: 'القرارة',
    isPrivate: false
  },
  {
    id: 'cfpa_berriane_01',
    name: 'مركز التكوين المهني و التمهين بريان',
    shortName: 'CFPA بريان 01',
    type: 'CFPA',
    municipality: 'بريان',
    isPrivate: false
  },
  {
    id: 'cfpa_berriane_02',
    name: 'مركز التكوين المهني و التمهين بريان02',
    shortName: 'CFPA بريان 02',
    type: 'CFPA',
    municipality: 'بريان',
    isPrivate: false
  },
  {
    id: 'cfpa_berriane_03',
    name: 'مركز التكوين المهني و التمهين بريان3',
    shortName: 'CFPA بريان 03',
    type: 'CFPA',
    municipality: 'بريان',
    isPrivate: false
  },
  {
    id: 'cfpa_metlili_01',
    name: 'مركز التكوين المهني و التمهين متليلي',
    shortName: 'CFPA متليلي',
    type: 'CFPA',
    municipality: 'متليلي',
    isPrivate: false
  },
  {
    id: 'cfpa_metlili_jadida',
    name: 'مركز التكوين المهني و التمهين متليلي الجديدة',
    shortName: 'CFPA متليلي الجديدة',
    type: 'CFPA',
    municipality: 'متليلي',
    isPrivate: false
  },
  {
    id: 'cfpa_zelfana',
    name: 'مركز التكوين المهني و التمهين بزلفانة',
    shortName: 'CFPA زلفانة',
    type: 'CFPA',
    municipality: 'زلفانة',
    isPrivate: false
  },
  {
    id: 'cfpa_mansoura',
    name: 'مركز التكوين المهني و التمهين المنصورة',
    shortName: 'CFPA المنصورة',
    type: 'CFPA',
    municipality: 'المنصورة',
    isPrivate: false
  },
  {
    id: 'cfpa_sebseb',
    name: 'مركز التكوين المهني و التمهين سبسب',
    shortName: 'CFPA سبسب',
    type: 'CFPA',
    municipality: 'سبسب',
    isPrivate: false
  },
  {
    id: 'cfpa_oued_nechou',
    name: 'مركز التكوين المهني و التمهين واد نشو غرداية',
    shortName: 'CFPA واد نشو',
    type: 'CFPA',
    municipality: 'واد نشو',
    isPrivate: false
  },
  {
    id: 'private_vcs',
    name: 'المؤسسة الخاصة (في سي أس أعلام ألي - VCS)',
    shortName: 'مؤسسة VCS الخاصة',
    type: 'PRIVATE',
    municipality: 'غرداية',
    isPrivate: true,
    description: 'مؤسسة تكوينية خاصة معتمدة متخصصة في الإعلام الآلي والكهرباء والسياحة والتأمينات'
  },
  {
    id: 'private_salama',
    name: 'مركز السلامة للحلول التدريبية',
    shortName: 'مركز السلامة للتدريب',
    type: 'PRIVATE',
    municipality: 'غرداية',
    isPrivate: true,
    description: 'مركز خاص معتمد متخصص في HSE، الموارد البشرية، الطفولة الأولى وقواعد المعطيات'
  },
  {
    id: 'private_nokhbar',
    name: 'المؤسسة الخاصة نخبة الجنوب',
    shortName: 'نخبة الجنوب',
    type: 'PRIVATE',
    municipality: 'غرداية',
    isPrivate: true,
    description: 'مؤسسة خاصة معتمدة متخصصة في تربية الطفولة الأولى، السياحة، الحرف والتأهيل'
  },
  {
    id: 'private_educanov',
    name: 'المؤسسة الخاصة ايديكانوف (EDUCANOV)',
    shortName: 'EDUCANOV الخاصة',
    type: 'PRIVATE',
    municipality: 'غرداية',
    isPrivate: true,
    description: 'مؤسسة تكوين خاصة معتمدة لتعليم الإعلام الآلي والتصميم والخياطة والحلاقة'
  }
];

export type DegreeLevel = 
  | 'BTS' // شهادة تقني سامي
  | 'BT' // شهادة تقني
  | 'CAP' // شهادة الكفاءة المهنية
  | 'CMP' // شهادة التحكم المهني
  | 'CQP' // شهادة تأهيلية مهنية
  | 'BEP' // شهادة التعليم المهني
  | 'CFPS'; // شهادة نهاية الطور الأول للتخصص

export type TrainingMode =
  | 'residential' // حضوري (إقامي)
  | 'apprenticeship' // تمهين
  | 'evening' // دروس مسائية
  | 'qualifying_initial' // تكوين تأهيلي أولي
  | 'bridging' // معابر
  | 'homemakers' // المرأة الماكثة في البيت
  | 'rural' // وسط ريفي
  | 'unemployment_grant' // منحة البطالة
  | 'contractual' // تكوين تعاقدي
  | 'vocational_education'; // تعليم مهني

export type Municipality =
  | 'غرداية'
  | 'بونورة'
  | 'بريان'
  | 'القرارة'
  | 'متليلي'
  | 'زلفانة'
  | 'ضاية بن ضحوة'
  | 'المنصورة'
  | 'سبسب'
  | 'واد نشو'
  | 'السوارق'
  | 'القمقوم';

export type SectorCategory =
  | 'informatics_telecom' // إعلام آلي ورقمنة واتصالات
  | 'industry_electricity' // صناعة وكهرباء وإلكترونيك
  | 'mechanics_automotive' // ميكانيك وهياكل ومحركات
  | 'construction_public_works' // بناء وأشغال عمومية وطوبوغرافيا
  | 'agriculture_environment' // فِلاحة، بيئة، إنتاج حيواني وغذائي
  | 'crafts_textiles' // صناعة تقليدية، خياطة وطرز وأزياء
  | 'tourism_hospitality' // فندقة وسياحة وإطعام
  | 'administration_management' // إدارة، أمانة، تجارة وموارد بشرية
  | 'personal_care_services' // حلاقة وتجميل وعناية شخصية
  | 'hygiene_security_environment' // أمن ونظافة وبيئة (HSE) ووقاية
  | 'renewable_energy'; // طاقات متجددة وترصيص صحي

export type InstitutionType =
  | 'INSFP' // معهد وطني متخصص في التكوين المهني
  | 'CFPA' // مركز التكوين المهني والتمهين
  | 'IEP' // معهد التعليم المهني
  | 'PRIVATE'; // مؤسسة خاصة معتمدة

export interface Institution {
  id: string;
  name: string;
  shortName?: string;
  type: InstitutionType;
  municipality: Municipality;
  isPrivate: boolean;
  address?: string;
  description?: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  degree: DegreeLevel;
  degreeLabel: string;
  degreeLevelNum: number; // 1 to 5
  trainingMode: TrainingMode;
  trainingModeLabel: string;
  institutionId: string;
  institutionName: string;
  municipality: Municipality;
  sector: SectorCategory;
  sectorLabel: string;
  requiredLevel: string; // e.g. "3 ثانوي", "4 متوسط", "بدون مستوى"
  duration: string; // e.g. "30 شهر", "24 شهر", "6 أشهر"
  description?: string;
  keywords?: string[];
}

export interface DegreeMetadata {
  code: DegreeLevel;
  arabicName: string;
  shortArabic: string;
  frenchCode: string;
  levelNumber: number;
  nominalDuration: string;
  standardRequirement: string;
  color: string;
  badgeClass: string;
}

export interface TrainingModeMetadata {
  id: TrainingMode;
  name: string;
  iconName: string;
  description: string;
  badgeColor: string;
}

export interface SectorMetadata {
  id: SectorCategory;
  name: string;
  iconName: string;
  color: string;
}

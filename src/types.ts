export type DegreeLevel = 
  | 'BTS' // شهادة تقني سامي
  | 'BT' // شهادة تقني
  | 'CAP' // شهادة الكفاءة المهنية
  | 'CMP' // شهادة التحكم المهني
  | 'CQP' // شهادة تأهيلية مهنية
  | 'BEP' // شهادة التعليم المهني
  | 'CFPS'; // شهادة نهاية الطور الأول للتخصص

export type TrainingMode =
  | 'residential' // حضوري أولي (إقامي)
  | 'apprenticeship' // تكوين عن طريق التمهين
  | 'evening' // الدروس المسائية
  | 'qualifying_initial' // تأهيلي أولي
  | 'bridging' // التكوين عن طريق المعابر
  | 'homemakers' // تكوين المرأة الماكثة في البيت
  | 'rural' // فرع في الوسط الريفي
  | 'unemployment_grant' // تكوين المستفيدين من منحة البطالة
  | 'contractual' // التكوين التعاقدي
  | 'vocational_education' // التعليم المهني
  | 'distance' // التكوين عن بعد
  | 'free_candidate'; // المترشحين الأحرار

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
  | 'القمقوم'
  | 'المنيعة'
  | 'حاسي الفحل'
  | 'حاسي القارة';

export type SectorCategory =
  | 'informatics_telecom' // إعلام آلي، الرقمنة والإتصالات
  | 'industry_electricity' // الكهرباء - الإلكترونيك - طاقوية
  | 'mechanics_automotive' // ميكانيك المحركات والآليات
  | 'construction_public_works' // البناء والأشغال العمومية
  | 'agriculture_environment' // الفلاحة وصناعة الأغذية الزراعية ومهن المياه والبيئة
  | 'crafts_textiles' // النسيج والألبسة والحرف التقليدية
  | 'tourism_hospitality' // الفندقة، الإطعام والسياحة
  | 'administration_management' // تقنيات الإدارة والتسيير
  | 'personal_care_services' // مهن الخدمات (حلاقة، طفولة، تجميل)
  | 'hygiene_security_environment' // النظافة، الأمن والبيئة (HSE)
  | 'renewable_energy' // الطاقات المتجددة والتبريد والترصيص الصحي
  | 'metal_construction' // الإنشاءات المعدنية
  | 'wood_furniture' // الخشب والتأثيث
  | 'graphic_arts' // الفنون والصناعة المطبعية والسمعي البصري
  | 'chemical_plastics'; // الكيمياء الصناعية والبلاستيكية

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
  phone?: string;
  fax?: string;
  email?: string;
  distanceFromWilayaCenterKm?: number;
  boardingCapacity?: number; // طاقة الاستيعاب داخلي
  semiBoardingCapacity?: number; // طاقة الاستيعاب نصف داخلي
  description?: string;
  officialCode?: string;
}

export interface SpecialtyItem {
  id: string;
  offerCode?: string; // رمز العرض (e.g. 284504)
  specialtyCode?: string; // رمز التخصص (e.g. INT01Q, BTP0706)
  sectorCode?: string; // رمز الشعبة (e.g. INT, BTP, ELE)
  title: string;
  titleFr?: string;
  degree: DegreeLevel;
  degreeLabel: string;
  degreeLevelNum: number; // 1 to 5 (0 for CQP)
  trainingMode: TrainingMode;
  trainingModeLabel: string;
  institutionId: string;
  institutionName: string;
  municipality: Municipality;
  sector: SectorCategory;
  sectorLabel: string;
  sectorLabelFr?: string;
  requiredLevel: string; // e.g. "الثالثة ثانوي (3AS)", "الرابعة متوسط (4AM)"
  minAge?: number;
  maxAge?: number;
  hasBoarding?: boolean; // توفر النظام الداخلي
  startDate?: string;
  endDate?: string;
  duration: string; // e.g. "30 شهراً", "24 شهراً", "6 أشهر"
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
  nameFr?: string;
  iconName: string;
  minAge?: number;
  maxAge?: number;
  description: string;
  badgeColor: string;
}

export interface SectorMetadata {
  id: SectorCategory;
  name: string;
  nameFr?: string;
  code?: string;
  iconName: string;
  color: string;
}

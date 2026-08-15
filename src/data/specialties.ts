import { SpecialtyItem, DegreeLevel, TrainingMode, Municipality, SectorCategory } from '../types';

interface RawItem {
  t: string; // title
  d: DegreeLevel; // degree
  m: TrainingMode; // mode
  i: string; // institution name
  mun: Municipality; // municipality
  s: SectorCategory; // sector
  req?: string; // custom required level
  dur?: string; // duration
}

const rawList: RawItem[] = [
  // 1. BTS - الحضوري
  { t: "البيئة", d: "BTS", m: "residential", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "agriculture_environment" },
  { t: "زراعة الخضروات", d: "BTS", m: "residential", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "agriculture_environment" },
  { t: "مراقبة النوعية في الصناعات الغذائية", d: "BTS", m: "residential", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "agriculture_environment" },
  { t: "صيانة المُعدّات الطبية", d: "BTS", m: "residential", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "industry_electricity" },
  
  { t: "الكهرباء الصناعية", d: "BTS", m: "residential", i: "المؤسسة الخاصة (في سي أس أعلام ألي - VCS)", mun: "غرداية", s: "industry_electricity" },
  { t: "إعلام آلي / خيار: قاعدة المعطيات", d: "BTS", m: "residential", i: "المؤسسة الخاصة (في سي أس أعلام ألي - VCS)", mun: "غرداية", s: "informatics_telecom" },
  { t: "السياحة / خيار: تسيير وإنتاج الرحلات", d: "BTS", m: "residential", i: "المؤسسة الخاصة (في سي أس أعلام ألي - VCS)", mun: "غرداية", s: "tourism_hospitality" },
  { t: "السياحة / خيار: مرشد سياحي", d: "BTS", m: "residential", i: "المؤسسة الخاصة (في سي أس أعلام ألي - VCS)", mun: "غرداية", s: "tourism_hospitality" },
  { t: "مسير في التأمينات", d: "BTS", m: "residential", i: "المؤسسة الخاصة (في سي أس أعلام ألي - VCS)", mun: "غرداية", s: "administration_management" },

  { t: "تسيير الموارد البشرية", d: "BTS", m: "residential", i: "مركز السلامة للحلول التدريبية", mun: "غرداية", s: "administration_management" },
  { t: "النظافة والأمن والبيئة (HSE)", d: "BTS", m: "residential", i: "مركز السلامة للحلول التدريبية", mun: "غرداية", s: "hygiene_security_environment" },

  { t: "مُربية الطفولة الأولى", d: "BTS", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "personal_care_services" },
  { t: "السياحة / خيار: تسيير وإنتاج الرحلات", d: "BTS", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "tourism_hospitality" },
  { t: "النظافة والأمن والبيئة (HSE)", d: "BTS", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "hygiene_security_environment" },

  { t: "أمانة المديرية", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "administration_management" },
  { t: "متار مُحقق ودراسة الأسعار", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "construction_public_works" },

  { t: "تصميم الأزياء وإعداد النماذج", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين أول نوفمبر بغرداية", mun: "غرداية", s: "crafts_textiles" },
  { t: "التسويق", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "administration_management" },
  { t: "مساعد في الصحة الحيوانية", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "agriculture_environment" },
  { t: "تصميم الأزياء وإعداد النماذج", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين متليلي", mun: "متليلي", s: "crafts_textiles" },
  { t: "تصميم الأزياء وإعداد النماذج", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين بزلفانة", mun: "زلفانة", s: "crafts_textiles" },
  { t: "أمانة المديرية", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "administration_management" },
  { t: "ميكاترونيك السيارات", d: "BTS", m: "residential", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "mechanics_automotive" },

  // BTS - الدروس المسائية
  { t: "تسيير الموارد البشرية", d: "BTS", m: "evening", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "administration_management" },
  { t: "مراقبة النوعية في الصناعات الغذائية", d: "BTS", m: "evening", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "agriculture_environment" },
  { t: "تسيير الموارد البشرية", d: "BTS", m: "evening", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "administration_management" },
  { t: "مُربية الطفولة الأولى", d: "BTS", m: "evening", i: "مركز السلامة للحلول التدريبية", mun: "غرداية", s: "personal_care_services" },

  // BTS - تأهيلي أولي
  { t: "إعلام آلي / خيار: قاعدة المعطيات", d: "BTS", m: "qualifying_initial", i: "مركز السلامة للحلول التدريبية", mun: "غرداية", s: "informatics_telecom" },

  // BTS - معابر
  { t: "مسّاح طوبوغرافي", d: "BTS", m: "bridging", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "construction_public_works" },

  // 2. BT - التمهين
  { t: "مساعدة حضانة", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "personal_care_services" },
  { t: "مُستغل المعلوماتية", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "informatics_telecom" },
  { t: "مساعد مخبر كيميائي", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "agriculture_environment" },
  { t: "تركيب شبكات الاتصالات", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "informatics_telecom" },
  { t: "الكهرباء الصناعية", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "industry_electricity" },
  { t: "تقني في التعمير", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "construction_public_works" },
  { t: "الفندقة / خيار: الاستقبال", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "tourism_hospitality" },
  { t: "الفندقة / خيار: الاستقبال", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بزلفانة", mun: "زلفانة", s: "tourism_hospitality" },
  { t: "إعلام آلي التسيير", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "informatics_telecom" },
  { t: "التبريد الصناعي وتكييف الهواء", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "renewable_energy" },
  { t: "تقني في الأشغال العمومية", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "construction_public_works" },
  { t: "الكهروميكانيك", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "industry_electricity" },
  { t: "الطوبوغرافيا", d: "BT", m: "apprenticeship", i: "مركز التكوين المهني و التمهين سبسب", mun: "سبسب", s: "construction_public_works" },

  // BT - الحضوري
  { t: "التزويد بالماء الشروب", d: "BT", m: "residential", i: "المؤسسة الخاصة (في سي أس أعلام ألي - VCS)", mun: "غرداية", s: "construction_public_works" },
  { t: "مساعدة حضانة", d: "BT", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "personal_care_services" },
  { t: "السياحة / خيار: تسويق سياحي", d: "BT", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "tourism_hospitality" },
  { t: "إعلام آلي التسيير", d: "BT", m: "residential", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "informatics_telecom" },
  { t: "الكهرباء الصناعية", d: "BT", m: "residential", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "industry_electricity" },
  { t: "متابعة الإنجاز في البناء", d: "BT", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "construction_public_works" },
  { t: "خياط ألبسة السيدات", d: "BT", m: "residential", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "crafts_textiles" },
  { t: "خياط ألبسة السيدات", d: "BT", m: "residential", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "crafts_textiles" },
  { t: "مبرمج الويب", d: "BT", m: "residential", i: "مركز التكوين المهني و التمهين متليلي", mun: "متليلي", s: "informatics_telecom" },

  // BT - الدروس المسائية
  { t: "إنتاج وتصفية الزيوت الغذائية", d: "BT", m: "evening", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "agriculture_environment" },
  { t: "مُستغل المعلوماتية", d: "BT", m: "evening", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "informatics_telecom" },
  { t: "الفندقة / خيار: الاستقبال", d: "BT", m: "evening", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "tourism_hospitality" },
  { t: "إعلام آلي التسيير", d: "BT", m: "evening", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "informatics_telecom" },
  { t: "مبرمج الويب", d: "BT", m: "evening", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "informatics_telecom" },

  // 3. CAP - الحضوري
  { t: "الخياطة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "crafts_textiles" },
  { t: "الخياطة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "crafts_textiles" },
  { t: "الخياطة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "crafts_textiles" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "renewable_energy" },
  { t: "تلحيم", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "industry_electricity" },
  { t: "الخياطة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "crafts_textiles" },
  { t: "مطالة وهياكل المركبات والطلاء", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "mechanics_automotive" },
  { t: "تلحيم", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بزلفانة", mun: "زلفانة", s: "industry_electricity" },
  { t: "القولبة والتسليح", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بزلفانة", mun: "زلفانة", s: "construction_public_works" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "renewable_energy" },
  { t: "الطرز التقليدي", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "crafts_textiles" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "renewable_energy" },
  { t: "الكهرباء المعمارية", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "industry_electricity" },
  { t: "نجارة الألومنيوم والـ PVC", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "construction_public_works" },
  { t: "البلاط والخزف والفسيفساء", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "construction_public_works" },
  { t: "صناعة الحلويات", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "tourism_hospitality" },
  { t: "التجصيص", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "construction_public_works" },
  { t: "حلاقة الرجال", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "personal_care_services" },
  { t: "حلاقة النساء", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "personal_care_services" },
  { t: "الإطعام / خيار: الطبخ الجماعي", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "tourism_hospitality" },
  { t: "صناعة الحلويات", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "tourism_hospitality" },
  { t: "البستنة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين متليلي", mun: "متليلي", s: "agriculture_environment" },
  { t: "طلاء وزخرفة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "construction_public_works" },
  { t: "كهرباء السيارات", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "mechanics_automotive" },
  { t: "البستنة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "agriculture_environment" },
  { t: "حلاقة النساء", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "personal_care_services" },
  { t: "حلاقة النساء", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين أول نوفمبر بغرداية", mun: "غرداية", s: "personal_care_services" },
  { t: "التجصيص", d: "CAP", m: "residential", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "construction_public_works" },
  { t: "طلاء العمارة", d: "CAP", m: "residential", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "construction_public_works" },
  { t: "حلاقة النساء", d: "CAP", m: "residential", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "personal_care_services" },
  { t: "طلاء العمارة", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "construction_public_works" },
  { t: "صناعة الحلويات", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "tourism_hospitality" },
  { t: "عامل في زراعات الخضراوات", d: "CAP", m: "residential", i: "مركز التكوين المهني و التمهين سبسب", mun: "سبسب", s: "agriculture_environment" },
  { t: "الخياطة", d: "CAP", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "crafts_textiles" },
  { t: "صناعة الحلويات", d: "CAP", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "tourism_hospitality" },
  { t: "حلاقة النساء", d: "CAP", m: "residential", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "personal_care_services" },

  // CAP - التمهين
  { t: "أمين مخزن", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "administration_management" },
  { t: "أمين مخزن", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين أول نوفمبر بغرداية", mun: "غرداية", s: "administration_management" },
  { t: "مساعد تقني متخصص في المكتبات والتوثيق والأرشيف", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين أول نوفمبر بغرداية", mun: "غرداية", s: "administration_management" },
  { t: "الإطعام / خيار: الطبخ الجماعي", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "tourism_hospitality" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "renewable_energy" },
  { t: "كهرباء السيارات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "mechanics_automotive" },
  { t: "الإطعام / الطبخ الجماعي", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "tourism_hospitality" },
  { t: "ميكانيك تصليح آليات الورشات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "mechanics_automotive" },
  { t: "تصليح الدراجات العادية والنارية", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "mechanics_automotive" },
  { t: "حلاقة الرجال", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "personal_care_services" },
  { t: "ميكانيك تصليح الدراجات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "mechanics_automotive" },
  { t: "الكهرباء المعمارية", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "industry_electricity" },
  { t: "الطرز التقليدي", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "crafts_textiles" },
  { t: "حلاقة الرجال", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "personal_care_services" },
  { t: "الكهرباء المعمارية", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "industry_electricity" },
  { t: "تركيب الألواح الشمسية", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "renewable_energy" },
  { t: "عون إدراج المعلومات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "informatics_telecom" },
  { t: "البلاط والخزف", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "construction_public_works" },
  { t: "البستنة", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "agriculture_environment" },
  { t: "حلاقة النساء", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "personal_care_services" },
  { t: "نجارة الألومنيوم والـ PVC", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "construction_public_works" },
  { t: "كهرباء السيارات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "mechanics_automotive" },
  { t: "حلاقة الرجال", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "personal_care_services" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "renewable_energy" },
  { t: "الكهرباء المعمارية", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "industry_electricity" },
  { t: "أمين مخزن", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "administration_management" },
  { t: "حلاقة الرجال والنساء", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "personal_care_services" },
  { t: "التجصيص", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "construction_public_works" },
  { t: "عامل البلاستيك", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "industry_electricity" },
  { t: "طلاء العمارة", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "construction_public_works" },
  { t: "التجصيص", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "construction_public_works" },
  { t: "النجارة المعمارية", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بزلفانة", mun: "زلفانة", s: "construction_public_works" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "renewable_energy" },
  { t: "الإطعام / الطبخ الجماعي", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "tourism_hospitality" },
  { t: "التصوير", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "informatics_telecom" },
  { t: "ميكانيك آليات الورشات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "mechanics_automotive" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "renewable_energy" },
  { t: "صناعة الحلويات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "tourism_hospitality" },
  { t: "التركيب الصحي والغاز", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين سبسب", mun: "سبسب", s: "renewable_energy" },
  { t: "أمين مخزن", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين سبسب", mun: "سبسب", s: "administration_management" },
  { t: "ميكانيك آليات الورشات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "mechanics_automotive" },
  { t: "البستنة", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "agriculture_environment" },
  { t: "تركيب وصيانة أجهزة التبريد والتكييف", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "renewable_energy" },
  { t: "صناعة الحلويات", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "tourism_hospitality" },
  { t: "البستنة", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "agriculture_environment" },
  { t: "حلاقة الرجال", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "personal_care_services" },
  { t: "حلاقة النساء", d: "CAP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي", mun: "متليلي", s: "personal_care_services" },

  // CAP - دروس مسائية
  { t: "الإطعام / الطبخ الجماعي", d: "CAP", m: "evening", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "tourism_hospitality" },
  { t: "الكهرباء المعمارية", d: "CAP", m: "evening", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "industry_electricity" },
  { t: "حلاقة النساء", d: "CAP", m: "evening", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "personal_care_services" },
  { t: "حلاقة النساء", d: "CAP", m: "evening", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "personal_care_services" },

  // CAP - تعاقدي
  { t: "الخياطة", d: "CAP", m: "contractual", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "crafts_textiles" },

  // 4. CMP - الحضوري
  { t: "نجارة الأثاث", d: "CMP", m: "residential", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "construction_public_works" },
  { t: "خياطة الألبسة الجاهزة", d: "CMP", m: "residential", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "crafts_textiles" },
  { t: "خياطة الألبسة الجاهزة", d: "CMP", m: "residential", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "crafts_textiles" },

  // CMP - التمهين
  { t: "مساعد تقني متخصص في المكتبات والتوثيق والأرشيف", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "administration_management" },
  { t: "مساعد تقني متخصص في المكتبات والتوثيق والأرشيف", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين أول نوفمبر بغرداية", mun: "غرداية", s: "administration_management" },
  { t: "تركيب وصيانة أجهزة التبريد والتكييف", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "renewable_energy" },
  { t: "عامل في الميكرو إعلامياتية", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "informatics_telecom" },
  { t: "الأمانة", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "administration_management" },
  { t: "مساعد تقني مكتبات", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "administration_management" },
  { t: "عامل في الميكرو إعلامياتية", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "informatics_telecom" },
  { t: "الأمانة", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "administration_management" },
  { t: "الكهروتقني", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "industry_electricity" },
  { t: "تركيب وصيانة التبريد والتكييف", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "renewable_energy" },
  { t: "الأمانة", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "administration_management" },
  { t: "مساعد تقني مكتبات", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "administration_management" },
  { t: "الإصلاح الميكانيكي للمركبات الخفيفة", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "mechanics_automotive" },
  { t: "الإصلاح الميكانيكي للمركبات الخفيفة", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي", mun: "متليلي", s: "mechanics_automotive" },
  { t: "الطباعة بالشاشة الحريرية", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي", mun: "متليلي", s: "crafts_textiles" },
  { t: "الأمانة", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "administration_management" },
  { t: "تركيب وصيانة أجهزة التبريد والتكييف", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "renewable_energy" },
  { t: "الكهروميكانيك", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "industry_electricity" },
  { t: "تركيب وصيانة أجهزة التبريد والتكييف", d: "CMP", m: "apprenticeship", i: "مركز التكوين المهني و التمهين واد نشو غرداية", mun: "واد نشو", s: "renewable_energy" },

  // CMP - معابر
  { t: "إعلام آلي / خيار: قاعدة المعطيات", d: "CMP", m: "bridging", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "informatics_telecom" },
  { t: "إعلام آلي / خيار: قاعدة المعطيات", d: "CMP", m: "bridging", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "informatics_telecom" },

  // 5. CQP - تأهيلي أولي
  { t: "تركيب وصيانة أنظمة الضخ الشمسية", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين واد نشو غرداية", mun: "واد نشو", s: "renewable_energy" },
  { t: "عون الوقاية والأمن", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "hygiene_security_environment" },
  { t: "عون الوقاية والأمن", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "hygiene_security_environment" },
  { t: "تركيب الأسقف بلوحات الألومنيوم BA13", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "construction_public_works" },
  { t: "قص وتصفيف الشعر", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "personal_care_services" },
  { t: "عون الوقاية والأمن", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "hygiene_security_environment" },
  { t: "إنشاء وتشغيل البستان", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "agriculture_environment" },
  { t: "تركيب وصيانة أنظمة الإنذار", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "industry_electricity" },
  { t: "تلقين الإعلام الآلي (Word/Excel/PowerPoint)", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "informatics_telecom" },
  { t: "الشورى", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "crafts_textiles" },
  { t: "عامل على آلات خياطة وتجميع الملابس", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين القرارة 02", mun: "القرارة", s: "crafts_textiles" },
  { t: "قص وتصفيف الشعر", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "personal_care_services" },
  { t: "مساعد الكهرباء المعماري", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "industry_electricity" },
  { t: "الشورى", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "crafts_textiles" },
  { t: "صنع الحلويات", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "tourism_hospitality" },
  { t: "مساعد الدهان", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "construction_public_works" },
  { t: "عامل الكهرباء المعماري", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "industry_electricity" },
  { t: "قص وتصفيف الشعر", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "personal_care_services" },
  { t: "عامل على آلات خياطة وتجميع الملابس", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "crafts_textiles" },
  { t: "قص وتصفيف الشعر", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين أول نوفمبر بغرداية", mun: "غرداية", s: "personal_care_services" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين أول نوفمبر بغرداية", mun: "غرداية", s: "crafts_textiles" },
  { t: "صنع الحلويات", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين المختلط غرداية", mun: "غرداية", s: "tourism_hospitality" },
  { t: "صناعة السجاد التقليدي", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "crafts_textiles" },
  { t: "استخراج زيت الزيتون", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "agriculture_environment" },
  { t: "عامل في صناعة الجبن", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "agriculture_environment" },
  { t: "صنع البيتزا", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني و التمهين ضاية بن ضحوة", mun: "ضاية بن ضحوة", s: "tourism_hospitality" },
  { t: "Photoshop", d: "CQP", m: "qualifying_initial", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "informatics_telecom" },
  { t: "مربي المواشي", d: "CQP", m: "qualifying_initial", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "agriculture_environment" },
  { t: "عامل في صناعة الجبن", d: "CQP", m: "qualifying_initial", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "agriculture_environment" },
  { t: "مربي الحيوانات المجترة", d: "CQP", m: "qualifying_initial", i: "المعهد الوطني المتخصص في التكوين المهني (بونورة)", mun: "بونورة", s: "agriculture_environment" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "qualifying_initial", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "crafts_textiles" },
  { t: "صبغة وتغيير لون الشعر", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة ايديكانوف (EDUCANOV)", mun: "غرداية", s: "personal_care_services" },
  { t: "تلقين الإعلام الآلي", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة ايديكانوف (EDUCANOV)", mun: "غرداية", s: "informatics_telecom" },
  { t: "Photoshop", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة ايديكانوف (EDUCANOV)", mun: "غرداية", s: "informatics_telecom" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة ايديكانوف (EDUCANOV)", mun: "غرداية", s: "crafts_textiles" },
  { t: "تلقين الإعلام الآلي", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "informatics_telecom" },
  { t: "Photoshop", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "informatics_telecom" },
  { t: "صنع البيتزا", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "tourism_hospitality" },
  { t: "صناعة الحلويات التقليدية", d: "CQP", m: "qualifying_initial", i: "المؤسسة الخاصة نخبة الجنوب", mun: "غرداية", s: "tourism_hospitality" },

  // CQP - المرأة الماكثة في البيت
  { t: "إنجاز البرنس", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "crafts_textiles" },
  { t: "إنجاز الأعمال بالخرز", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "crafts_textiles" },
  { t: "الشورى", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "crafts_textiles" },
  { t: "صنع الحلويات", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "tourism_hospitality" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين إناث غرداية", mun: "غرداية", s: "crafts_textiles" },
  { t: "تصميم وتجميع الملابس", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "crafts_textiles" },
  { t: "صناعة الحلويات التقليدية", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "tourism_hospitality" },
  { t: "قص وتصفيف الشعر", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين المنصورة", mun: "المنصورة", s: "personal_care_services" },
  { t: "قص وتصفيف الشعر", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "personal_care_services" },
  { t: "الشورى", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "crafts_textiles" },
  { t: "صنع الحلويات", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان", mun: "بريان", s: "tourism_hospitality" },
  { t: "الشورى", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "crafts_textiles" },
  { t: "صناعة السجاد التقليدي", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "crafts_textiles" },
  { t: "صناعة الحلويات التقليدية", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "tourism_hospitality" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "crafts_textiles" },
  { t: "صنع الحلويات", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "tourism_hospitality" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين القمقومة", mun: "القمقوم", s: "crafts_textiles" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "homemakers", i: "مركز التكوين المهني والتمهين السوارق", mun: "السوارق", s: "crafts_textiles" },
  { t: "العناية بالحدائق والمنتزهات", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "agriculture_environment" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين بريان3", mun: "بريان", s: "crafts_textiles" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "homemakers", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "crafts_textiles" },

  // CQP - دروس مسائية
  { t: "تقنيات السمعي البصري: تقنيات التصوير", d: "CQP", m: "evening", i: "مركز التكوين المهني و التمهين بونورة غرداية", mun: "بونورة", s: "informatics_telecom" },
  { t: "تلقين الإعلام الآلي", d: "CQP", m: "evening", i: "المؤسسة الخاصة ايديكانوف (EDUCANOV)", mun: "غرداية", s: "informatics_telecom" },

  // CQP - وسط ريفي
  { t: "قص وتصفيف الشعر", d: "CQP", m: "rural", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "personal_care_services" },
  { t: "عامل على آلات خياطة", d: "CQP", m: "rural", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "crafts_textiles" },

  // CQP - منحة البطالة
  { t: "عامل في المزرعة", d: "CQP", m: "unemployment_grant", i: "مركز التكوين المهني و التمهين سبسب", mun: "سبسب", s: "agriculture_environment" },

  // 6. BEP - التعليم المهني
  { t: "تنشيط السياحة المحلية", d: "BEP", m: "vocational_education", i: "معهد التعليم المهني واد نشو غرداية", mun: "واد نشو", s: "tourism_hospitality" },
  { t: "خدمات الإطعام", d: "BEP", m: "vocational_education", i: "معهد التعليم المهني واد نشو غرداية", mun: "واد نشو", s: "tourism_hospitality" },

  // 7. CFPS - التمهين
  { t: "التركيب الصحي", d: "CFPS", m: "apprenticeship", i: "مركز التكوين المهني و التمهين القرارة", mun: "القرارة", s: "renewable_energy" },
  { t: "التركيب الصحي", d: "CFPS", m: "apprenticeship", i: "مركز التكوين المهني و التمهين بريان02", mun: "بريان", s: "renewable_energy" },
  { t: "التركيب الصحي", d: "CFPS", m: "apprenticeship", i: "مركز التكوين المهني و التمهين متليلي الجديدة", mun: "متليلي", s: "renewable_energy" }
];

import { DEGREES_INFO, TRAINING_MODES_INFO, SECTORS_INFO } from './metadata';

export const SPECIALTIES_DATA: SpecialtyItem[] = rawList.map((item, index) => {
  const degInfo = DEGREES_INFO[item.d];
  const modeInfo = TRAINING_MODES_INFO[item.m];
  const sectorInfo = SECTORS_INFO[item.s];

  return {
    id: `spec-${index + 1}`,
    title: item.t,
    degree: item.d,
    degreeLabel: degInfo.arabicName,
    degreeLevelNum: degInfo.levelNumber,
    trainingMode: item.m,
    trainingModeLabel: modeInfo.name,
    institutionId: `inst-${item.i.replace(/\s+/g, '_')}`,
    institutionName: item.i,
    municipality: item.mun,
    sector: item.s,
    sectorLabel: sectorInfo.name,
    requiredLevel: item.req || degInfo.standardRequirement,
    duration: item.dur || degInfo.nominalDuration,
    keywords: [item.t, item.i, item.mun, degInfo.arabicName, degInfo.shortArabic, modeInfo.name, sectorInfo.name]
  };
});

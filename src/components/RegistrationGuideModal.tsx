import React from 'react';
import { X, FileText, CheckCircle2, Calendar, HelpCircle, Shield, Award, ExternalLink } from 'lucide-react';

interface RegistrationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationGuideModal: React.FC<RegistrationGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-indigo-900 text-white p-5 sm:p-6 relative border-b border-indigo-800">
          <button
            onClick={onClose}
            className="absolute left-4 top-4 text-indigo-200 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg border border-white/15 transition"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <FileText className="w-4 h-4 text-indigo-300" />
            <h2 className="text-lg sm:text-xl font-bold">دليل ملف التسجيل وشروط الالتحاق</h2>
          </div>
          <p className="text-xs text-indigo-200/90 font-normal">
            كل ما تحتاج لمعرفته حول التسجيل في مؤسسات ومراكز التكوين المهني بولاية غرداية
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4 text-slate-800 max-h-[70vh] overflow-y-auto text-xs leading-relaxed">
          {/* Section 1: Required Documents */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>الوثائق المكونة لملف التسجيل الأولي:</span>
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                <span><strong>استمارة التسجيل الأولي:</strong> تسحب من المركز أو تطبع عبر المنصة الرقمية الوطنية (مهنتي).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                <span><strong>الشهادة المدرسية الأصلية:</strong> تثبت آخر مستوى دراسي بلغه المترشح ومصادق عليها.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                <span><strong>شهادة الميلاد:</strong> نسخة أصلية من سجل الحالة المدنية.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                <span><strong>صور شمسية:</strong> عدد 02 أو 04 صور شمسية حديثة للمترشح.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                <span><strong>أظرفة بريدية:</strong> عدد 02 أظرفة بريدية عليها طوابع وعنوان المترشح.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                <span><strong>حقوق التسجيل:</strong> وصل دفع حقوق التسجيل الرمزية المحددة قانوناً.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: National Platform Takwin.dz */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-emerald-950 text-xs sm:text-sm flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-emerald-700" />
                <span>التسجيل الرقمي المباشر عبر منصة (تكوين - Takwin.dz):</span>
              </h3>
              <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                المنصة الرسمية المعتمدة
              </span>
            </div>
            <p className="text-emerald-900 text-xs leading-relaxed">
              تتيح وزارة التكوين والتعليم المهنيين التسجيل الإلكتروني واختيار التخصص والمؤسسة التكوينية المناسبة بولاية غرداية مباشرة عبر البوابة الرقمية الوطنية:
            </p>
            <a
              href="https://takwin.dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-sm"
            >
              <span>الدخول إلى منصة تكوين (https://takwin.dz)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Section 3: Training Sessions */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>دورات الدخول التكويني السنوية:</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-800">
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <p className="font-bold text-xs text-indigo-900">1. دورة الخريف (دخول أكتوبر):</p>
                <p className="text-[11px] text-slate-600 mt-0.5">الدورة الرئيسية الكبرى التي تفتح فيها كافة التخصصات والشهادات.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <p className="font-bold text-xs text-indigo-900">2. دورة فيفري (الدخول الشتوي):</p>
                <p className="text-[11px] text-slate-600 mt-0.5">دورة تكميلية تفتح تخصصات تمهينية وتأهيلية إضافية هامة.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3.5 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition shadow-sm"
          >
            فهمت، إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

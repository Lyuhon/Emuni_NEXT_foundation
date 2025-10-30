'use client';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import style from './foundation.css';

// ВЫНЕСИТЕ ТЕКСТЫ ЗА ПРЕДЕЛЫ КОМПОНЕНТА!
const TEXTS = {
  ru: {
    badgeYear: '2024 год',
    badgeDesc: 'Лучший частный университет',
    applyButton: 'Подать заявку',
    heroTitle1: 'EMU Pre-Foundation',
    heroTitle2: 'первый шаг к подготовке в университете мечты',
    heroDesc: 'Пройдите курс Pre-foundation и поступите в EMU University на медицинские, бизнес и социальные направления без экзамена',
    moreDetails: 'Подробнее',
    studentsCount: '500+',
    studentsCountInfo: 'студентов уже выбрали программу подготовки к поступлению в ВУЗ',
    aboutProgram: 'О программе',
    strengthenBase: 'Выберите будущее, достойное вас!',
    academicBase: 'Эта программа создаёт прочную основу для поступления в университет',
    programDesc: 'Курс Pre-Foundation предназначен для учеников 10–11 классов и всех абитуриентов, предлагая 3-месячные и 6-месячные направления.',
    monthPrograms: 'Месячные программы',
    mainSubjects: 'Основных предмета',
    hoursWeek: 'Часов в неделю',
    mathTitle: 'Математика',
    mathDesc: '4,5 часа в неделю',
    mathDetails: 'Алгебра, геометрия и основы математики',
    engTitle: 'Английский язык',
    engDesc: '4,5 часа в неделю',
    engDetails: 'Грамматика, словарный запас и общение',
    bioTitle: 'Биология',
    bioDesc: '3 часа в неделю',
    bioDetails: 'Теория и практические занятия',
    chemTitle: 'Химия',
    chemDesc: '3 часа в неделю',
    chemDetails: 'С лабораторными работами',
    whyEmu: 'Почему EMU?',
    whyDesc: 'Мы предоставляем вам все инструменты и знания, необходимые для успеха в университете',
    expTeachersTitle: 'Опытные преподаватели',
    expTeachersDesc: 'Профессиональные преподаватели с многолетним опытом готовят вас к университетскому образованию',
    currTitle: 'Специальная учебная программа',
    currDesc: 'Полный и структурированный учебный план, направленный на поступление в университет EMU',
    resourcesTitle: 'Полные ресурсы',
    resourcesDesc: 'Лаборатории, библиотека и неограниченный доступ ко всем необходимым учебным материалам',
    chooseDir: 'Выберите подходящую для вас',
    direction: 'программу обучения',
    chooseProgDesc: 'Возможность учиться в удобное для вас время',
    sixMonth: '6-месячная интенсивная',
    threeMonth: '3-месячная ускоренная',
    learningDirs: 'Направления обучения',
    learningItems: ['Занятия 5 дней в неделю', 'Малые группы (макс. 15 человек)', 'Индивидуальный подход', 'Еженедельная оценка'],
    curriculum: 'Учебная программа',
    currItems: ['Математика - 4,5 часа/нед.', 'Английский язык - 4,5 часа/нед.', 'Биология - 3 часа/нед.', 'Химия - 3 часа/нед.'],
    support: 'Поддержка',
    supportItems: ['Академическое консультирование', 'Карьерное консультирование', 'Лаборатория и библиотека', 'Онлайн-ресурсы'],
    weeklySchedule: 'Недельное',
    schedule: 'расписание',
    scheduleDesc: 'Структурированный и эффективный учебный план',
    monFri: 'Понедельник - Пятница',
    fullSchedule: 'Полное расписание на все дни недели',
    day: 'День',
    subjectsHours: 'Предметы и часы',
    scheduleSubjects: [
      'Математика (4 часа), Английский язык (3 часа)',
      'Биология (3 часа), Химия (4 часа)',
      'Математика (4 часа), Английский язык (3 часа)',
      'Биология (3 часа), Химия (4 часа)',
      'Дополнительные занятия (2 часа), Консультации (1 час)'
    ],
    forWhom: 'Для кого предназначена',
    program: 'программа?',
    forWhomDesc: 'Программа направлена ​​на объединение молодых абитуриентов, стремящихся построить успешную карьеру в медицине, бизнесе и социальной сфере.',
    tenEleven: 'Учащиеся 10-11 классов',
    tenElevenDesc: 'Предварительная подготовка к университету',
    collegeGrads: 'Выпускники колледжей',
    collegeGradsDesc: 'Для перехода на университетский уровень',
    highSchoolGrads: 'Выпускники средней школы',
    highSchoolGradsDesc: 'Обновление и укрепление знаний',
    certHolders: 'Обладатели аттестата',
    certHoldersDesc: 'Подготовка к продолжению образования',
    apply: 'Подайте заявку',
    applyDesc: 'Заполните форму для регистрации в программе EMU Pre-Foundation',
    registration: 'Регистрация',
    regDesc: 'Заполните форму ниже, чтобы начать свой путь',
    fullName: 'Имя и фамилия',
    phone: 'Номер телефона',
    currEducation: 'Текущее образование',
    selectEdu: 'Выберите ваш уровень образования',
    school: 'Школа (10-11 класс)',
    lyceum: 'Лицей/Колледж',
    graduated: 'Выпускник средней школы',
    chooseProg: 'Выберите программу',
    sixMonths: '6 месяцев',
    intensive: 'Интенсивная программа',
    threeMonths: '3 месяца',
    accelerated: 'Ускоренная программа',
    submit: 'Отправить заявку',
    submitting: 'Отправка...',
    questions: 'Есть вопросы?',
    contactDesc: 'Свяжитесь с нашим куратором по всем вопросам. Он предоставит вам подробную информацию и поможет в процессе поступления на программу.',
    phoneLabel: 'Телефон',
    tgLabel: 'Telegram',
    questionsLeft: 'Остались вопросы?',
    questionsLeftDesc: 'Наш куратор предоставит вам полную информацию о программе и ответит на все ваши вопросы.',
    menuHome: 'Главная',
    menuAbout: 'О программе',
    menuPrograms: 'Направления',
    menuSchedule: 'Расписание',
    menuAudience: 'Для кого',
    menuApply: 'Подать заявку',
    menuContact: 'Контакты'
  },
  uz: {
    badgeYear: '2024 yilning',
    badgeDesc: 'eng yaxshi xususiy universiteti',
    applyButton: 'Ariza yuborish',
    heroTitle1: 'EMU Pre-Foundation Kursi',
    heroTitle2: 'Orzudagi universitetga tayyorgarlik uchun 1-qadam',
    heroDesc: 'Pre-foundation kursida o\'qib, EMU university\'da tibbiyot, biznes va ijtimoiy yo\'nalishlarda imtihonsiz talaba bo\'ling',
    moreDetails: 'Batafsil',
    studentsCount: '500+',
    studentsCountInfo: 'dan ortiq o\'quvchi allaqachon pre-foundationni tanlashdi',
    aboutProgram: 'Dastur haqida',
    strengthenBase: 'O\'zingizga munosib kelajakni tanlang!',
    academicBase: 'Ushbu dastur universitetga kirish uchun mustahkam asos yaratadi',
    programDesc: 'Pre-Foundation kursi 10-11 sinf o\'quvchilari va barcha abituriyentlar  uchun mo\'ljallangan va 3 oylik va 6 oylik yo\'nalishlarni taklif etadi.',
    monthPrograms: 'Oylik dasturlar',
    mainSubjects: 'Asosiy fanlar',
    hoursWeek: 'Haftada soat',
    mathTitle: 'Matematika',
    mathDesc: 'Haftada 4,5 soat',
    mathDetails: 'Algebra, geometriya va matematika asoslari',
    engTitle: 'Ingliz tili',
    engDesc: 'Haftada 4,5 soat',
    engDetails: 'Grammatika, lug\'at va muloqot',
    bioTitle: 'Biologiya',
    bioDesc: 'Haftada 3 soat',
    bioDetails: 'Nazariya va amaliy mashg\'ulotlar',
    chemTitle: 'Kimyo',
    chemDesc: 'Haftada 3 soat',
    chemDetails: 'Laboratoriya ishlari bilan',
    whyEmu: 'Nima uchun EMU?',
    whyDesc: 'Biz sizga universitetda muvaffaqiyat qozonish uchun zarur bo\'lgan barcha vositalar va bilimlarni taqdim etamiz',
    expTeachersTitle: 'Tajribali o\'qituvchilar',
    expTeachersDesc: 'Ko\'p yillik tajribaga ega professional o\'qituvchilar sizni universitet ta\'limiga tayyorlaydi',
    currTitle: 'Maxsus o\'quv dasturi',
    currDesc: 'EMU universitetiga kirishga qaratilgan to\'liq va tuzilgan o\'quv dasturi',
    resourcesTitle: 'To\'liq resurslar',
    resourcesDesc: 'Laboratoriyalar, kutubxona va barcha zarur o\'quv materiallariga cheksiz kirish',
    chooseDir: 'Sizga mos o\'quv',
    direction: 'dasturini tanlang',
    chooseProgDesc: 'O\'zingizga qulay usulda o\'qish imkoniyati',
    sixMonth: '6 oylik intensiv',
    threeMonth: '3 oylik tezlashtirilgan',
    learningDirs: 'O\'quv yo\'nalishlari',
    learningItems: ['Haftada 5 kun darslar', 'Kichik guruhlar (maks. 15 kishi)', 'Individual yondashuv', 'Haftalik baholash'],
    curriculum: 'O\'quv dasturi',
    currItems: ['Matematika - 4,5 soat/hafta', 'Ingliz tili - 4,5 soat/hafta', 'Biologiya - 3 soat/hafta', 'Kimyo - 3 soat/hafta'],
    support: 'Qo\'llab-quvvatlash',
    supportItems: ['Akademik maslahat', 'Karyera maslahati', 'Laboratoriya va kutubxona', 'Onlayn resurslar'],
    weeklySchedule: 'Haftalik',
    schedule: 'jadval',
    scheduleDesc: 'Tuzilgan va samarali o\'quv dasturi',
    monFri: 'Dushanba - Juma',
    fullSchedule: 'Hafta kunlari uchun to\'liq jadval',
    day: 'Kun',
    subjectsHours: 'Fanlar va soatlar',
    scheduleSubjects: [
      'Matematika (4 soat), Ingliz tili (3 soat)',
      'Biologiya (3 soat), Kimyo (4 soat)',
      'Matematika (4 soat), Ingliz tili (3 soat)',
      'Biologiya (3 soat), Kimyo (4 soat)',
      'Qo\'shimcha darslar (2 soat), Maslahatlar (1 soat)'
    ],
    forWhom: 'Dastur kimlar uchun',
    program: 'mo\'ljallangan?',
    forWhomDesc: 'Dastur tibbiyot, biznes va ijtimoiy sohalarda muvaffaqiyatli karyera qurmoqchi bo\'lgan bacha abituriyentlar birlashtirishni maqsad qilgan',
    tenEleven: '10-11 sinf o\'quvchilari',
    tenElevenDesc: 'Universitetga oldindan tayyorgarlik',
    collegeGrads: 'Kollej bitiruvchilari',
    collegeGradsDesc: 'Universitet darajasiga o\'tish uchun',
    highSchoolGrads: 'O\'rta maktab bitiruvchilari',
    highSchoolGradsDesc: 'Bilimlarni yangilash va mustahkamlash',
    certHolders: 'Attestat egalar',
    certHoldersDesc: 'Ta\'limni davom ettirishga tayyorgarlik',
    apply: 'Ariza yuboring',
    applyDesc: 'EMU Pre-Foundation dasturiga ro\'yxatdan o\'tish uchun shaklni to\'ldiring',
    registration: 'Ro\'yxatdan o\'tish',
    regDesc: 'Yo\'lingizni boshlash uchun quyidagi shaklni to\'ldiring',
    fullName: 'Ism va familiya',
    phone: 'Telefon raqami',
    currEducation: 'Hozirgi ta\'lim',
    selectEdu: 'Ta\'lim darajangizni tanlang',
    school: 'Maktab (10-11 sinf)',
    lyceum: 'Litsey/Kollej',
    graduated: 'O\'rta maktab bitiruvchisi',
    chooseProg: 'Dasturni tanlang',
    sixMonths: '6 oy',
    intensive: 'Intensiv dastur',
    threeMonths: '3 oy',
    accelerated: 'Tezlashtirilgan dastur',
    submit: 'Ariza yuborish',
    submitting: 'Yuborilmoqda...',
    questions: 'Savollaringiz bormi?',
    contactDesc: 'Barcha savollar uchun kuratorimiz bilan bog\'laning. U sizga batafsil ma\'lumot beradi va dasturga kirish jarayonida yordam beradi.',
    phoneLabel: 'Telefon',
    tgLabel: 'Telegram',
    questionsLeft: 'Qo\'shimcha savollar?',
    questionsLeftDesc: 'Kuratorimiz sizga dastur haqida to\'liq ma\'lumot beradi va barcha savollaringizga javob beradi.',
    menuHome: 'Bosh sahifa',
    menuAbout: 'Dastur haqida',
    menuPrograms: 'Yo\'nalishlar',
    menuSchedule: 'Jadval',
    menuAudience: 'Kim uchun',
    menuApply: 'Ariza yuborish',
    menuContact: 'Kontaktlar'
  }
};

export default function PreFoundationPage() {
  const [activeProgram, setActiveProgram] = useState('6month');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    education: '',
    program: '6month'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState('uz');
  const [menuOpen, setMenuOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);

  const formRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Мемоизация текстов
  const currentTexts = useMemo(() => TEXTS[language], [language]);

  // Мемоизация опций образования
  const educationOptions = useMemo(() => [
    { value: 'school', label: currentTexts.school },
    { value: 'lyceum', label: currentTexts.lyceum },
    { value: 'graduated', label: currentTexts.graduated }
  ], [currentTexts]);

  // Мемоизация данных расписания
  const scheduleData = useMemo(() =>
    currentTexts.scheduleSubjects.map(subjects => ({ day: '', subjects })),
    [currentTexts.scheduleSubjects]
  );

  // useCallback для функций
  const scrollToForm = useCallback(() => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  const handleSelectEducation = useCallback((value) => {
    setFormData(prev => ({ ...prev, education: value }));
    setEducationDropdownOpen(false);
  }, []);

  // Оптимизированный handleSubmit
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
          url: window.location.href,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(language === 'uz'
          ? 'Sizning arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.'
          : 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
        );
        setTimeout(() => {
          if (messageRef.current) {
            const messageRect = messageRef.current.getBoundingClientRect();
            const isVisible = messageRect.bottom <= window.innerHeight;

            if (!isVisible) {
              messageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
              });
              // Дополнительный скролл на 20px вниз
              setTimeout(() => {
                window.scrollBy({ top: 20, behavior: 'smooth' });
              }, 300);
            }
          }
        }, 100);
        setFormData({ name: '', phone: '', education: '', program: '6month' });
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage(language === 'uz'
        ? 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.'
        : 'Произошла ошибка. Пожалуйста, попробуйте снова.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, language]);

  // Оптимизированные обработчики изменений формы
  const handleNameChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, name: e.target.value }));
  }, []);

  const handlePhoneChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, phone: e.target.value }));
  }, []);

  const handleProgramChange = useCallback((program) => {
    setActiveProgram(program);
    setFormData(prev => ({ ...prev, program }));
    scrollToForm();
  }, [scrollToForm]);

  const handleProgramButtonChange = useCallback((program) => {
    setFormData(prev => ({ ...prev, program }));
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-50 backdrop-blur-xl bg-[#920259] border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/emu-logo.jpg"
              alt="EMU"
              width={140}
              height={32}
              className="h-auto"
            />
          </div>
          <nav className="flex items-center gap-8 text-white font-semibold">
            <a href="#hero" className="hover:opacity-80 transition">{currentTexts.menuHome}</a>
            <a href="#details" className="hover:opacity-80 transition">{currentTexts.menuAbout}</a>
            <a href="#audience" className="hover:opacity-80 transition">{currentTexts.menuAudience}</a>
            <a href="#apply" className="hover:opacity-80 transition">{currentTexts.menuApply}</a>
            <a href="#contact" className="hover:opacity-80 transition">{currentTexts.menuContact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-white/20 px-2 py-1 rounded-full">
              <button onClick={() => setLanguage('ru')} className={`px-3 py-1 rounded-full ${language === 'ru' ? 'bg-white text-[#920259] font-bold' : 'text-white'}`}>RU</button>
              <button onClick={() => setLanguage('uz')} className={`px-3 py-1 rounded-full ${language === 'uz' ? 'bg-white text-[#920259] font-bold' : 'text-white'}`}>UZ</button>
            </div>
            <button
              onClick={scrollToForm}
              className="px-6 py-2.5 bg-white text-[#920259] rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {currentTexts.applyButton}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="block md:hidden sticky top-0 z-50 bg-[#920259] border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4-">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/emu-logo.webp"
                alt="EMU"
                width={120}
                height={32}
                className="h-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 bg-white/20 px-2 py-1 rounded-full text-sm">
                <button onClick={() => setLanguage('ru')} className={`px-2 py-0.5 rounded-full ${language === 'ru' ? 'bg-white text-[#920259] font-bold' : 'text-white'}`}>RU</button>
                <button onClick={() => setLanguage('uz')} className={`px-2 py-0.5 rounded-full ${language === 'uz' ? 'bg-white text-[#920259] font-bold' : 'text-white'}`}>UZ</button>
              </div>
              <button onClick={() => setMenuOpen(true)} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#920259] to-[#7a004a] z-50 flex flex-col items-center justify-center text-white font-bold text-xl">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col gap-8 text-center">
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>{currentTexts.menuHome}</a></li>
            <li><a href="#details" onClick={() => setMenuOpen(false)}>{currentTexts.menuAbout}</a></li>
            <li><a href="#programs" onClick={() => setMenuOpen(false)}>{currentTexts.menuPrograms}</a></li>
            <li><a href="#audience" onClick={() => setMenuOpen(false)}>{currentTexts.menuAudience}</a></li>
            <li><a href="#apply" onClick={() => setMenuOpen(false)}>{currentTexts.menuApply}</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>{currentTexts.menuContact}</a></li>
          </ul>
          <button
            onClick={() => { scrollToForm(); setMenuOpen(false); }}
            className="mt-8 px-8 py-3 bg-white text-[#920259] rounded-xl font-semibold shadow-lg"
          >
            {currentTexts.applyButton}
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#920259] via-[#7a004a] to-[#5a0038] pt-20 md:pt-32 pb-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Badge (оставил твой анимированный бейдж) */}
          <div className="absolute md:-top-18 -top-5 md:right-0 right-10 z-20">
            <div
              className="relative transform-gpu -translate-y-2 rotate-[6deg] scale-[0.95] sm:scale-100 pointer-events-none"
              aria-hidden="true"
            >
              {/* Мягкое свечение */}
              <div className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-25" style={{
                background: 'radial-gradient(closest-side, rgba(255,215,100,0.4), rgba(255,200,80,0.15), transparent)'
              }} />

              {/* main badge */}
              <div className="relative z-10 p-4 sm:p-5 rounded-2xl sm:pb-0 pb-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,245,200,0.98), rgba(255,230,120,0.95) 35%, rgba(255,200,80,0.85) 60%)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 15px 40px rgba(146,2,89,0.15), 0 8px 16px rgba(0,0,0,0.12)'
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    {/* star icon circle */}
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,240,200,0.95))',
                        border: '1px solid rgba(255,255,255,0.6)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)'
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 sm:w-8 h-7 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="#9b2b6b" strokeWidth="1.6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#4b0028] uppercase">
                      Emu University
                    </div>
                    <div className="mt-1 text-sm sm:text-base md:text-lg font-extrabold text-[#3b0022] leading-tight">
                      {currentTexts.badgeYear}
                      <span className="block text-base sm:text-lg md:text-xl text-[#7a003f]">{currentTexts.badgeDesc}</span>
                    </div>
                  </div>
                </div>

                {/* ribbon lower */}
                <div className="mt-3 sm:mt-4 relative overflow-hidden">
                  <div className="absolute -bottom-3 left-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#ffd980]"></div>
                  <div className="absolute -bottom-3 right-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#ffd980]"></div>
                </div>
              </div>

              {/* animated badge wrapper: плавное парение и лёгкая ротация */}
              <style>{`
        @keyframes floatBadge {
          0% { transform: translateY(0px) rotate(-3deg) }
          50% { transform: translateY(-10px) rotate(2deg) }
          100% { transform: translateY(0px) rotate(-3deg) }
        }
        @keyframes slowPulse {
          0% { box-shadow: 0 20px 50px rgba(128,0,64,0.26) }
          50% { box-shadow: 0 30px 80px rgba(128,0,64,0.20) }
          100% { box-shadow: 0 20px 50px rgba(128,0,64,0.26) }
        }
      `}</style>

              <div style={{
                position: 'absolute',
                inset: '-10px',
                zIndex: 5,
                borderRadius: '14px',
                animation: 'floatBadge 4.8s ease-in-out infinite',
                willChange: 'transform'
              }} />

              <div style={{
                position: 'absolute',
                inset: '-18px',
                zIndex: 1,
                borderRadius: '18px',
                animation: 'slowPulse 4.8s ease-in-out infinite',
                willChange: 'box-shadow',
                pointerEvents: 'none'
              }} />
            </div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-6 pt-24 sm:pt-24 md:pt-12">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                {currentTexts.heroTitle1}
                <br />
                <span className="relative inline-block mt-2">
                  <span className="mt-[-5px] block bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
                    {currentTexts.heroTitle2}
                  </span>
                  <div className="md:block hidden absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-200 via-yellow-100 to-white rounded-full w-[70%]"></div>
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                {currentTexts.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:mb-32 mb-10">
                <button
                  onClick={scrollToForm}
                  className="group px-10 py-5 bg-white text-[#920259] rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>{currentTexts.applyButton}</span>
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                <a href="#details"
                  className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>{currentTexts.moreDetails}</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                <div className="sm:flex z-30">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 md:px-5 md:py-4 border border-white/20 shadow-lg">
                    {/* аватарки (перекрывающиеся фото) */}
                    <div className="flex -space-x-3 items-center">
                      <img
                        src="https://www.emuni.uz/_next/image?url=https%3A%2F%2Fnext.emu.web-perfomance.uz%2Fwp-content%2Fuploads%2F2025%2F04%2Ftestimonial_image_item-2.webp&w=828&q=75"
                        alt="Student 1"
                        className="bg-gray w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-white object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src="https://www.emuni.uz/_next/image?url=https%3A%2F%2Fnext.emu.web-perfomance.uz%2Fwp-content%2Fuploads%2F2025%2F04%2Ftestimonial_image_item-10.webp&w=828&q=75"
                        alt="Student 2"
                        className="bg-gray w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-white object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src="https://www.emuni.uz/_next/image?url=https%3A%2F%2Fnext.emu.web-perfomance.uz%2Fwp-content%2Fuploads%2F2025%2F04%2Ftestimonial_image_item-8.webp&w=828&q=75"
                        alt="Student 3"
                        className="bg-gray w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-white object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="pl-2">
                      <div className="text-[18px] md:text-xl font-extrabold text-white leading-none">{currentTexts.studentsCount}</div>
                      <div className="text-sm md:text-sm text-white/80">{currentTexts.studentsCountInfo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute left-0 right-0" style={{ bottom: '-1px' }}>
          <svg className="w-full h-20 md:h-32 block" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>


      {/* About Program Section with Split Layout */}
      <section
        id="details"
        className="bg-white py-24"
        style={{
          zIndex: 99999,
          position: 'relative',
          marginTop: '-3px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-center mb-24">
            <div className="space-y-6 md:col-span-3">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#920259]/10 to-[#7a004a]/10 rounded-full border border-[#920259]/20">
                <svg className="w-5 h-5 text-[#920259]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-sm font-bold text-[#920259] uppercase tracking-wide">{currentTexts.aboutProgram}</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-5xl font-black text-gray-900 leading-tight">
                {currentTexts.strengthenBase}
                <span className="block mt-2 bg-gradient-to-r from-[#920259] to-[#7a004a] bg-clip-text text-transparent">
                  {currentTexts.academicBase}
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {currentTexts.programDesc}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '3-6', label: currentTexts.monthPrograms },
                  { value: '4', label: currentTexts.mainSubjects },
                  { value: '15+', label: currentTexts.hoursWeek }
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border-2 border-gray-100">
                    <p className="text-3xl sm:text-4xl font-black text-[#920259] mb-1">{stat.value}</p>
                    <p className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block relative h-[500px] md:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                alt="University preparation"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: 'photo-1635070041078-e363dbe005cb',
                title: currentTexts.mathTitle,
                desc: currentTexts.mathDesc,
                details: currentTexts.mathDetails
              },
              {
                img: 'photo-1546410531-bb4caa6b424d',
                title: currentTexts.engTitle,
                desc: currentTexts.engDesc,
                details: currentTexts.engDetails
              },
              {
                img: 'photo-1532094349884-543bc11b234d',
                title: currentTexts.bioTitle,
                desc: currentTexts.bioDesc,
                details: currentTexts.bioDetails
              },
              {
                img: 'photo-1603126857599-f6e157fa2fe6',
                title: currentTexts.chemTitle,
                desc: currentTexts.chemDesc,
                details: currentTexts.chemDetails
              }
            ].map((subject, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={`https://images.unsplash.com/${subject.img}?w=600&q=80`}
                    alt={subject.title}
                    width={600}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center font-black text-[#920259] text-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2">{subject.title}</h3>
                  <p className="text-[#920259] font-bold text-sm mb-2">{subject.desc}</p>
                  <p className="text-gray-600 text-sm">{subject.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EMU Section - Full Width with Images */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              {currentTexts.whyEmu}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentTexts.whyDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: 'photo-1524178232363-1fb2b075b655',
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                title: currentTexts.expTeachersTitle,
                desc: currentTexts.expTeachersDesc
              },
              {
                img: 'photo-1456513080510-7bf3a84b82f8',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                title: currentTexts.currTitle,
                desc: currentTexts.currDesc
              },
              {
                img: 'photo-1481627834876-b7833e8f5570',
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                title: currentTexts.resourcesTitle,
                desc: currentTexts.resourcesDesc
              },
              // {
              //     img: 'photo-1523050854058-8df90110c9f1',
              //     icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              //     title: 'Гарантированное поступление',
              //     desc: 'Успешно завершившие программу напрямую зачисляются на программы бакалавриата EMU'
              // }
            ].map((item, index) => (
              <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={`https://images.unsplash.com/${item.img}?w=800&q=80`}
                    alt={item.title}
                    width={800}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-[#920259]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {currentTexts.chooseDir} <span className="bg-gradient-to-r from-[#920259] to-[#7a004a] bg-clip-text text-transparent">{currentTexts.direction}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentTexts.chooseProgDesc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          {['6month', '3month'].map((program) => (
            <button
              key={program}
              onClick={() => {
                setActiveProgram(program);
                setFormData({ ...formData, program });
                scrollToForm();
              }}
              className={`px-10 py-5 font-bold rounded-2xl transition-all duration-300 ${activeProgram === program
                ? 'bg-gradient-to-r from-[#920259] to-[#7a004a] text-white shadow-2xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-[#920259]/30 hover:scale-105'
                }`}
            >
              {program === '6month' ? currentTexts.sixMonth : currentTexts.threeMonth}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              title: currentTexts.learningDirs,
              items: currentTexts.learningItems
            },
            {
              icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
              title: currentTexts.curriculum,
              items: currentTexts.currItems
            },
            {
              icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
              title: currentTexts.support,
              items: currentTexts.supportItems
            }
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">{card.title}</h3>
              <div className="space-y-3">
                {card.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#920259] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section - Modern Table Design */}
      <section id="schedule" className="hidden bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              {currentTexts.weeklySchedule} <span className="bg-gradient-to-r from-[#920259] to-[#7a004a] bg-clip-text text-transparent">{currentTexts.schedule}</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {currentTexts.scheduleDesc}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#920259] to-[#7a004a] px-8 py-6">
              <h3 className="text-2xl font-black text-white">{currentTexts.monFri}</h3>
              <p className="text-white/80">{currentTexts.fullSchedule}</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-black text-gray-900">{currentTexts.day}</th>
                      <th className="text-left py-4 px-4 font-black text-gray-900">{currentTexts.subjectsHours}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((day, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                              <span className="text-white font-black text-sm">{index + 1}</span>
                            </div>
                            <span className="font-bold text-gray-900">{day.day}</span>
                          </div>
                        </td>
                        <td className="py-5 px-4 text-gray-700">{day.subjects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section with Image Grid */}
      <section id="audience" className="bg-gradient-to-br from-gray-50 to-white max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {currentTexts.forWhom} <span className="bg-gradient-to-r from-[#920259] to-[#7a004a] bg-clip-text text-transparent">{currentTexts.program}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentTexts.forWhomDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: 'photo-1427504494785-3a9ca7044f45', title: currentTexts.tenEleven, desc: currentTexts.tenElevenDesc },
            { img: 'photo-1571260899304-425eee4c7efc', title: currentTexts.collegeGrads, desc: currentTexts.collegeGradsDesc },
            { img: 'photo-1522202176988-66273c2fd55f', title: currentTexts.highSchoolGrads, desc: currentTexts.highSchoolGradsDesc },
            { img: 'photo-1503676260728-1c00da094a0b', title: currentTexts.certHolders, desc: currentTexts.certHoldersDesc }
          ].map((item, index) => (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={`https://images.unsplash.com/${item.img}?w=600&q=80`}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form - КРИТИЧНАЯ СЕКЦИЯ */}
      <section id="apply" ref={formRef} className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-3xl shadow-2xl mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              {currentTexts.apply}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {currentTexts.applyDesc}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#920259] to-[#7a004a] px-8 py-8">
              <h3 className="text-3xl font-black text-white mb-2">{currentTexts.registration}</h3>
              <p className="text-white/90">{currentTexts.regDesc}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  {currentTexts.fullName} <span className="text-[#920259]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleNameChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#920259] focus:ring-2 focus:ring-[#920259]/20 outline-none transition-all font-medium"
                  placeholder={language === 'uz' ? 'Ism Familiya' : 'Имя Фамилия'}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  {currentTexts.phone} <span className="text-[#920259]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#920259] focus:ring-2 focus:ring-[#920259]/20 outline-none transition-all font-medium"
                  placeholder="+998 (__) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  {currentTexts.currEducation} <span className="text-[#920259]">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setEducationDropdownOpen(!educationDropdownOpen)}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#920259] focus:ring-2 focus:ring-[#920259]/20 outline-none transition-all font-medium text-left flex items-center justify-between"
                  >
                    {formData.education ? educationOptions.find(opt => opt.value === formData.education)?.label : currentTexts.selectEdu}
                    <svg className={`w-5 h-5 transition-transform ${educationDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {educationDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                      {educationOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSelectEducation(option.value)}
                          className="w-full px-5 py-4 text-left hover:bg-gradient-to-r hover:from-[#920259]/10 hover:to-[#7a004a]/10 transition-all font-medium"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-4">
                  {currentTexts.chooseProg} <span className="text-[#920259]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['6month', '3month'].map((program) => (
                    <button
                      key={program}
                      type="button"
                      onClick={() => handleProgramButtonChange(program)}
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${formData.program === program
                        ? 'border-[#920259] bg-gradient-to-br from-[#920259]/10 to-[#7a004a]/10 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-[#920259]/30'
                        }`}
                    >
                      {formData.program === program && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-[#920259] rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      <p className="font-black text-gray-900 mb-2 text-xl">{program === '6month' ? currentTexts.sixMonths : currentTexts.threeMonths}</p>
                      <p className="text-sm text-gray-600 font-medium">{program === '6month' ? currentTexts.intensive : currentTexts.accelerated}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 px-8 text-white font-black text-lg rounded-2xl shadow-2xl transition-all duration-300 ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#920259] to-[#7a004a] hover:scale-105'
                  }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-6 w-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {currentTexts.submitting}
                  </div>
                ) : (
                  currentTexts.submit
                )}
              </button>
            </form>

            {message && (
              <div ref={messageRef} className="mx-8 mb-8 p-5 rounded-2xl text-center bg-green-50 text-green-800 border-2 border-green-300 font-semibold shadow-lg">
                <svg className="w-6 h-6 text-green-600 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative bg-gradient-to-br from-[#920259] to-[#7a004a] rounded-3xl p-6 md:p-16 text-white overflow-hidden shadow-2xl">
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Левая сторона */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6">
                {currentTexts.questions}
              </h2>
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
                {currentTexts.contactDesc}
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                    label: currentTexts.phoneLabel,
                    value: '+998 78 147 00 07',
                  },
                  {
                    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z',
                    label: currentTexts.tgLabel,
                    value: '@emuintash',
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill={index === 1 ? 'currentColor' : 'none'}
                        stroke={index === 0 ? 'currentColor' : 'none'}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={contact.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm font-semibold uppercase tracking-wide">
                        {contact.label}
                      </p>
                      <p className="text-xl sm:text-2xl font-black">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая сторона с изображением */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl md:p-8 p-5 border-2 border-white/20 relative overflow-hidden group">
              <h3 className="text-2xl font-black mb-5">
                {currentTexts.questionsLeft}
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                {currentTexts.questionsLeftDesc}
              </p>

              {/* Добавленное изображение */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
                <img
                  src="https://www.emuni.uz/_next/image?url=https%3A%2F%2Fnext.emu.web-perfomance.uz%2Fwp-content%2Fuploads%2F2025%2F05%2Fbussines-campus-8.jpg&w=1200&q=75"
                  alt="EMU University Campus"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#920259]/70 via-[#920259]/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
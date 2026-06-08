export default {
  nav: {
    home: "Bosh sahifa",
    projects: "Loyihalar",
    blog: "Blog",
    about: "Men haqimda",
    contact: "Aloqa",
    menu: "Menyu",
  },

  home: {
    eyebrow: "Frontend dasturchi",
    greeting: "Salom, men",
    name: "Dostonbek",
    description:
      "Zamonaviy veb-texnologiyalar yordamida qulay raqamli tajribalar yarataman. Toza kod. O'ylangan dizayn. Real natija.",
    viewProjects: "Loyihalarimni ko'rish",
    contactMe: "Men bilan bog'laning",
    downloadCV: "CV yuklab olish",
    currentlyWorking: "Hozirda ishlatayotgan texnologiyalarim",
    featuredLabel: "Tanlangan ish",
    featuredHeading: "So'nggi case study",
    viewAllProjects: "Barcha loyihalar",
  },

  about: {
    eyebrow: "Men haqimda",
    name: "Dostonbek",
    basedIn: "Manzil",
    basedInValue: "Farg'ona, O'zbekiston",
    focus: "Yo'nalish",
    focusValue: "React va Tailwind CSS",
    status: "Holat",
    statusValue: "Ishga ochiqman",
    getInTouch: "Bog'lanish",
    bioLabel: "Bio",
    bioText:
      "Men toza, tez va qulay veb-tajribalar yaratishga qiziqqan frontend dasturchiman. Qo'llab-quvvatlash oson bo'lgan kod yozish va o'ylangan UI dizaynga e'tibor qarataman. Hozirda yangi imkoniyatlarga ochiqman.",
    techStackLabel: "Texnologiyalar",
    frontend: "Frontend",
    tools: "Vositalar",
    learningLabel: "Hozir o'rganayotganlarim",
    learningTypeScriptNote:
      "React komponentlari va umumiy yordamchi funksiyalarga tip xavfsizligini qo'shyapman.",
    learningNextNote:
      "Server tomonida render qilish, marshrutlash va ma'lumot olish usullarini o'rganyapman.",
    experienceLabel: "Tajriba",
    experienceRole: "Frontend dasturchi",
    experienceCompany: "Zamon agentligi",
    experienceDate: "2024 — hozirgi kun",
    experienceDesc: "Mijozlar uchun moslashuvchan veb-ilovalar yarataman.",
    educationLabel: "Ta'lim",
    educationDegree: "Raqamli axborotni qayta ishlash mutaxassisi",
    educationSchool: "Farg'ona Lola Murotova nomidagi kollej",
    educationDate: "2025 — 2026",
  },

  projects: {
    eyebrow: "Portfolio",
    heading: "Tanlangan loyihalar",
    description:
      "Bir nechta haqiqiy, ishga tushirilgan loyihalar — har biri dizaynidan tortib joylashtirishgacha to'liq qilingan. Yangi case study'lar tayyorlanmoqda va tayyor bo'lishi bilan shu yerda paydo bo'ladi.",
  },

  projectCard: {
    visitProject: "Loyihani ko'rish",
  },

  projectData: {
    edumanage: {
      subtitle: "Ta'lim boshqaruv tizimi",
      pitch:
        "Ta'lim muassasalariga davomat, baholar va talabalar ma'lumotlarini bir joyda kuzatishga yordam beradigan boshqaruv paneli — tarqoq jadvallar o'rniga.",
      achievement:
        "Mijozga ko'rinadigan panelni boshidan oxirigacha tayyorladim: ma'lumot jadvallari, autentifikatsiya oqimi va istalgan ekranda to'g'ri ishlaydigan moslashuvchan dizayn.",
    },
    healthyFood: {
      subtitle: "Retsept topish tajribasi",
      pitch:
        "Reklama va uzun hikoyalarsiz sog'lom taom retseptlarini topishga yordam beradigan tez va moslashuvchan sayt.",
      achievement:
        "Loyihani Figma maketidan ikki haftadan kamroq vaqtda to'liq moslashuvchan, ishga tushirilgan mahsulotga aylantirdim.",
    },
  },

  blog: {
    eyebrow: "Blog",
    heading: "Fikrlar, tajriba va foydali yozuvlar",
    description:
      "Bu yerda frontend, dizayn va o'sish jarayonimdagi foydali mavzularni ulashaman. Blog portfolio ichida jonli kontent markazi sifatida ishlaydi.",
    topics: "Mavzular",
    recentPosts: "So'nggi postlar",
    recentPostsDesc:
      "Frontend amaliyoti, dizayn qarorlari va real loyihalarda qo'lga kiritilgan tajribalar haqida qisqa yozuvlar.",
    readArticle: "Maqolani o'qish",
  },

  blogPosts: {
    reactStart: {
      title: "React loyihani tartibli boshlash",
      description:
        "Komponent struktura, papkalar va reusable UI elementlarni boshidan to'g'ri tashkil qilish haqida qisqa yo'riqnoma.",
      tag: "Frontend",
      readTime: "4 daqiqalik o'qish",
      hero:
        "Yaxshi boshlangan loyiha keyinroq kamroq chalkashadi. React'da tartibli boshlash tezlik, tushunarlilik va kengaytirish uchun juda muhim.",
      sectionStart: {
        heading: "Nimadan boshlash kerak",
        p1:
          "React loyiha boshlaganda birinchi xato bu hamma narsani bitta joyga yig'ish. Kichik loyiha ham vaqt o'tib kattalashadi, shuning uchun papka strukturasini boshidan aniq qilish kerak.",
        p2:
          "Sahifalar, komponentlar, umumiy UI elementlar va ma'lumotlar alohida turishi keyin ishlashni ancha osonlashtiradi. Bu ayniqsa portfolio, dashboard yoki client loyihalarda seziladi.",
      },
      sectionFolders: {
        heading: "Qaysi bo'limlarni ajratish foydali",
        p1:
          "`pages` ichida route sahifalari, `components` ichida qayta ishlatiladigan qismlar, `data` ichida statik ma'lumotlar saqlansa loyiha ancha toza bo'ladi.",
        p2:
          "Agar biror section ko'p joyda ishlatilsa, uni sahifaga yopishtirib qo'yishdan ko'ra reusable komponentga aylantirish yaxshiroq.",
      },
      sectionResult: {
        heading: "Natija",
        p1:
          "Tartibli boshlash vaqtni tejaydi, xatoni topishni osonlashtiradi va yangi feature qo'shishni tezlashtiradi.",
        p2:
          "Yaxshi struktura foydalanuvchiga ko'rinmaydi, lekin dasturchining ish sifati va tezligida juda seziladi.",
      },
    },
    responsiveDesign: {
      title: "Responsive dizayn uchun amaliy yondashuv",
      description:
        "Mobil, planshet va desktop ekranlarda sahifa bir xil sifatda ishlashi uchun ishlatiladigan asosiy usullar.",
      tag: "UI/UX",
      readTime: "5 daqiqalik o'qish",
      hero:
        "Responsive dizayn faqat elementlarni kichraytirish emas. Har bir ekran o'lchamida kontent qanday o'qilishi va boshqarilishi muhim.",
      sectionMobile: {
        heading: "Avval mobil haqida o'ylash",
        p1:
          "Mobil first yondashuv sahifani sodda va aniq qiladi. Keraksiz bloklar, haddan tashqari katta gaplar yoki murakkab gridlar birinchi navbatda mobil versiyada bilinadi.",
        p2:
          "Agar mobil interfeys toza bo'lsa, keyin desktopga kengaytirish ancha osonlashadi.",
      },
      sectionSpacing: {
        heading: "Spacing va hierarchy",
        p1:
          "Responsive dizaynda font size, gap va paddinglar breakpoint bo'yicha moslashishi kerak. Faqat width berish yetmaydi.",
        p2:
          "Foydalanuvchi qaysi kontent muhimligini bir qarashda tushunishi uchun sarlavha, matn va action tugmalar o'rtasidagi hierarchy aniq bo'lishi lozim.",
      },
      sectionOutcome: {
        heading: "Amaliy natija",
        p1:
          "Yaxshi responsive yondashuv bounce rate'ni kamaytiradi va saytdan foydalanishni tabiiy qiladi.",
        p2:
          "Bu dizayn sifati bilan birga sizning frontend madaniyatingizni ham ko'rsatadi.",
      },
    },
    whyPortfolio: {
      title: "Portfolio sayt nega kerak?",
      description:
        "Shaxsiy brend, mijoz ishonchi va ish beruvchiga o'zingizni aniq ko'rsatish uchun portfolio qanday yordam beradi.",
      tag: "Karyera",
      readTime: "4 daqiqalik o'qish",
      hero:
        "Portfolio sayt bu shunchaki ishlar ro'yxati emas. U sizning uslubingiz, yondashuvingiz va professional darajangizni ko'rsatadigan maydon.",
      sectionImpression: {
        heading: "Birinchi taassurot",
        p1:
          "Ko'p hollarda recruiter yoki mijoz siz haqingizda birinchi tasavvurni GitHub yoki Telegram emas, aynan portfolio orqali oladi.",
        p2:
          "Shu sababli sayt tartibli, tez va aniq bo'lishi kerak. Bu sizning o'zingizga bo'lgan talabingizni ham ko'rsatadi.",
      },
      sectionShowcase: {
        heading: "Ishlaringizni gapirtirish",
        p1:
          "CV ko'p narsani qisqa yozadi, portfolio esa misollar orqali ko'rsatadi. Loyiha preview, texnologiyalar va natija bilan birga berilsa ancha kuchli ta'sir qiladi.",
        p2:
          "Blog qo'shilsa, sayt nafaqat tayyor ishlarni, balki fikrlash jarayonini ham ko'rsatadi.",
      },
      sectionLongTerm: {
        heading: "Uzoq muddatli foyda",
        p1:
          "Portfolio sayt shaxsiy brendni asta-sekin kuchaytiradi. Har bir yangi loyiha yoki maqola bilan u yanada qiymatli bo'lib boradi.",
        p2:
          "Bu ayniqsa freelance yoki remote ish topishda foydali.",
      },
    },
  },

  blogDetail: {
    notFoundTag: "Blog",
    notFoundTitle: "Post topilmadi",
    notFoundDesc: "Bu maqola mavjud emas yoki havola o'zgargan.",
    backToBlog: "Blogga qaytish",
    keyTakeaway: "Asosiy xulosa",
    otherPosts: "Boshqa postlar",
  },

  contact: {
    eyebrow: "Aloqa",
    heading: "Bog'lanish",
    description: "Loyiha g'oyangiz bormi? Bemalol murojaat qiling.",
    nameLabel: "Ism",
    namePlaceholder: "Ismingiz",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Xabar",
    messagePlaceholder: "Loyihangiz haqida gapirib bering...",
    send: "Xabar yuborish",
    sending: "Yuborilmoqda...",
    sent: "Xabar yuborildi!",
    sentDesc: "Imkon qadar tezroq javob beraman.",
    error: "Nimadir xato ketdi. Qaytadan urinib ko'ring.",
    elsewhere: "Boshqa joylarda",
  },

  footer: {
    rights: "© 2026 Dostonbek. Barcha huquqlar himoyalangan.",
  },
};

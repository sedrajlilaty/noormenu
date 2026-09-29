ئ# مطعم النور | Restaurant Menu App

تطبيق ويب لعرض قائمة طعام مطعم "النور" بشكل تفاعلي، من تصفح الفئات والمنتجات إلى إتمام الطلب عبر واتساب. مبني بـ React + Tailwind CSS، ويحاكي تجربة أنظمة المنيو الرقمي (QR Menu) المستخدمة بالمطاعم.

## Demo
https://github.com/sedrajlilaty/noormenu رابط مشروع الغيت 
المشروع المرجعي (Design Reference): https://demo-rest.noormenu.com

## Features

- عرض الفئات (كل الفئات + صفحة تفاصيل كل فئة على حدة)
- بحث عن المنتجات (نتائج فورية حسب الاسم والوصف)
- بانر إعلانات متحرك (Slider) بالصفحة الرئيسية
- بطاقة منتج تفاعلية: كمية، سعر بعد الخصم، ومودال تفاصيل للمنتجات اللي عندها خيارات إضافية (Add-ons)
- سلة طلبات كاملة: تعديل الكمية، حذف عنصر، حذف الكل، كوبون خصم، حساب الضريبة ورسوم التوصيل تلقائيًا
- إرسال الطلب مباشرة عبر واتساب (wa.me) بعد تعبئة بيانات الاستلام
- قائمة جانبية (Side Menu) فيها معلومات عن المطعم وطرق التواصل
- تصميم متجاوب بالكامل (Mobile / Tablet / Desktop)

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Core UI library |
| React Router DOM v7 | Client-side routing (`Routes`, `useParams`, `useNavigate`, `Link`) |
| Vite | Build tool and dev server |
| Tailwind CSS v4 | Utility-first styling |
| Font Awesome | Icon library used throughout the app |
| Swiper | Homepage banner slider | بعديد استبدلناها بسكرول يدوي بسبب مشاكل في عرض حجم بالمكتبة 
| React Context API | Cart state management (`CartContext`) |
| ESLint | Code linting |
| WhatsApp (`wa.me`) | Order submission via WhatsApp link |
| ملفات json  للداتا لهيك ما استخدمنا react_query |axios 
## Project Structure

```
src/
├── assets/              # اللوجو والصور الثابتة
├── context/
│   └── CartContext.jsx  # إدارة حالة السلة (إضافة، حذف، تعديل كمية)
├── features/
│   ├── cart/             # صفحة السلة
│   ├── category/         # صفحة كل الفئات + صفحة تفاصيل فئة وحدة
│   ├── home/              # الصفحة الرئيسية
│   ├── menu/               # الفئات، البحث، البانر، المنتجات المميزة، ملفات الداتا (JSON)
│   └── products/           # بطاقة المنتج ومودال التفاصيل
└── shared/
    └── ui/                # عناصر مشتركة: الهيدر، الفوتر، القائمة الجانبية، الـ Layout العام
```

## Getting Started

```bash
# تثبيت المكتبات
npm install

# تشغيل المشروع محليًا
npm run dev
```

المشروع رح يفتح تلقائيًا على `http://localhost:5173`

## Data

بيانات الفئات والمنتجات والبانرات موجودة كملفات JSON ثابتة تحت `src/features/menu/data/` (بدون باك اند حقيقي حاليًا). تعديل أي منتج أو فئة بيصير مباشرة من هالملفات.

## Notes

- الصور المستخدمة للمنتجات جزء منها محلي (`/productImg`) وجزء روابط مؤقتة من الإنترنت لغايات العرض فقط.

## Author
المطورة: سدرة جليلاتي
تم تطوير المشروع كجزء من التدرب على React وبناء تطبيقات كاملة (Frontend + State Management)، مستوحى من واجهة NoorMenu كمرجع تصميمي.

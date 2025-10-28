# Course Player - Next.js

مشغل دورات تعليمية متقدم مبني باستخدام Next.js و React و Tailwind CSS.

## 🚀 التقنيات المستخدمة

- **Next.js 15.5.6** - أحدث إصدار من Next.js
- **React 19.2.0** - أحدث إصدار من React
- **React DOM 19.2.0**
- **Tailwind CSS 3.4.15**
- **Lucide React 0.468.0** - مكتبة الأيقونات
- **React YouTube 10.1.0** - مشغل فيديو YouTube
- **date-fns 4.1.0** - مكتبة معالجة التواريخ

## 📦 التثبيت

```bash
npm install
```

## 🏃‍♂️ التشغيل

### وضع التطوير

```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### البناء للإنتاج

```bash
npm run build
```

### تشغيل الإصدار المُبني

```bash
npm start
```

## ✨ المميزات

- ✅ مشغل فيديو YouTube متطور
- ✅ وضع العرض الواسع (Wide Mode)
- ✅ وضع الشاشة الكاملة (Fullscreen)
- ✅ مشغل ثابت عند التمرير (Sticky Player) للموبايل
- ✅ نظام تعليقات تفاعلي مع حفظ محلي
- ✅ عرض المواد التعليمية والموضوعات
- ✅ أزرار التنقل بين الدروس
- ✅ شريط تقدم الدورة
- ✅ تصميم متجاوب لجميع الشاشات
- ✅ واجهة مستخدم حديثة وأنيقة

## 📁 هيكل المشروع

```
course-player-nextjs/
├── app/
│   ├── globals.css          # الأنماط العامة
│   ├── layout.jsx           # التخطيط الرئيسي
│   └── page.jsx             # الصفحة الرئيسية
├── components/
│   ├── Comments.jsx         # مكون التعليقات
│   ├── Header.jsx           # الهيدر
│   ├── Materials.jsx        # المواد التعليمية
│   ├── NavButtons.jsx       # أزرار التنقل
│   ├── Player.jsx           # مشغل الفيديو
│   ├── Topics.jsx           # قائمة الموضوعات
│   └── ui/                  # مكونات الواجهة
├── lib/
│   ├── data.js              # البيانات الثابتة
│   └── utils.js             # الدوال المساعدة
├── public/
│   ├── images/              # الصور
│   └── videos/              # الفيديوهات
└── ...ملفات التكوين

```

## 🔄 التحديثات الأخيرة

تم ترقية المشروع إلى:

- ✨ Next.js 15.5.6 (أحدث إصدار مستقر)
- ✨ React 19.2.0 (أحدث إصدار)
- ✨ تحويل جميع ملفات التكوين إلى ES Modules
- ✨ تحديث جميع التبعيات لأحدث الإصدارات المتوافقة

## 🛠️ ملفات التكوين

جميع ملفات التكوين تستخدم ES Modules:

- `next.config.js` - إعدادات Next.js
- `tailwind.config.js` - إعدادات Tailwind CSS
- `postcss.config.js` - إعدادات PostCSS
- `package.json` - يتضمن `"type": "module"`

## 📝 ملاحظات

- المشروع يستخدم App Router (Next.js 13+)
- جميع المكونات التفاعلية تستخدم `"use client"`
- التعليقات يتم حفظها في Local Storage
- الفيديوهات من YouTube باستخدام مكتبة react-youtube

## 📄 الترخيص

مشروع خاص - جميع الحقوق محفوظة

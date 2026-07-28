# Assets

התיקייה `assets/` היא הבית היחיד במאגר לקבצים גדולים או בינאריים: תמונות, אודיו, וידאו, PDF, ארכיונים, מדיה שנוצרה, ייצואי נתונים גדולים וקבצים דומים.

קובצי הנכס עצמם אינם נשמרים ב־Git כברירת מחדל, כדי ש־forks יישארו קלים ומהירים. מה שכן נשמר הוא “מישור הבקרה”: מבנה התיקיות, קובצי README, קובצי `.gitkeep` וקובצי metadata שמסבירים מה קיים ואיך לאתר אותו בגיבוי.

חריגי ה־`.gitignore` מיועדים רק ל־README, קובצי `.gitkeep` ו־sidecars ששמם מסתיים ב־`.metadata.md`. אין להשתמש בסיומת טקסטואלית כדי להכניס ל־Git dataset, ייצוא, manifest או payload. קוד מקור ומסמכי עבודה רגילים אינם שייכים תחת `assets/`; שמרו אותם בתיקיית פרויקט רגילה. קובץ טקסט גדול הוא עדיין asset payload וצריך להישאר בגיבוי החיצוני.

אין לשמור קבצים בינאריים תחת `second-brain/wiki/`. ה־wiki נשאר שכבת ידע טקסטואלית ויכול לקשר ל־metadata של הנכס.

מסמכי ההפעלה `SOUL.md`,‏ `USER.md`,‏ `BUSINESS.md`,‏ `GOAL.md`,‏ `HEARTBEAT.md` ו־`DREAMING.md` נשארים בשורש המאגר בשמות ALL-CAPS המדויקים שלהם. אין לשמור עותקים שלהם תחת `assets/` ואין ליצור גרסאות lowercase.

## מבנה תיקיות ותאריכים

השתמשו בתבנית:

```text
assets/<kind>/<YYYY>/<YYYY-MM-DD>-<project-or-topic>/<filename>
```

הערכים המקובלים ל־`<kind>` הם:

- `images`
- `audio`
- `video`
- `documents`
- `archives`
- `generated`
- `data`

דוגמאות:

```text
assets/images/2026/2026-07-28-landing-page/hero-photo.webp
assets/audio/2026/2026-07-28-customer-interview/interview-01.m4a
assets/generated/2026/2026-07-28-product-demo/demo-scene-03.mp4
```

כללי שמות:

- התאריך הוא תאריך היצירה או הקליטה, בפורמט ISO‏ `YYYY-MM-DD`.
- אם התאריך המדויק אינו ידוע, השתמשו ב־`assets/<kind>/undated/<project-or-topic>/` וציינו את אי־הוודאות ב־metadata.
- השתמשו באותיות לטיניות קטנות, מקפים ושמות תיאוריים. שמרו גם את סיומת הקובץ באותיות קטנות.
- אל תכניסו לשמות קבצים שמות לקוחות, כתובות, מספרי טלפון, מזהים אישיים או סודות.
- לכל פרויקט או נושא צרו תיקייה משמעותית; אל תשפכו קבצים ישירות בשורש `assets/`.

## חוזה ה־metadata

לכל payload חייב להיות sidecar צמוד בשם `<full-filename>.metadata.md`.

לדוגמה:

```text
hero-photo.webp
hero-photo.webp.metadata.md
```

צרו ועדכנו את שני הקבצים יחד. ה־sidecar חייב לכלול:

```markdown
# Metadata — <asset title>

- **Asset type:** <image/audio/video/PDF/archive/generated/data>
- **Purpose:** <why this asset exists>
- **Summary / accessible description:** <what it contains>
- **Source or creation method:** <capture, export, generator, vendor, etc.>
- **Creator:** <name, organization, tool, or unknown>
- **Usage rights:** <license, permission, restrictions, or unknown>
- **Created or captured:** <YYYY-MM-DD, estimated date, or unknown>
- **Original filename:** <if renamed>
- **People and organizations:** <privacy-safe list or none>
- **Topics:** <retrieval topics>
- **Confidentiality:** <public/internal/confidential/restricted>
- **Publication status:** <not approved/approved/published>
- **External backup locator:** <stable, non-secret locator or asset-registry ID>
- **Backup verified:** <YYYY-MM-DD or pending>
- **Retrieval keywords:** <comma-separated terms>
- **Extraction status:** <not needed/pending/complete>
- **Review notes:** <quality, privacy, provenance, or accessibility notes>
```

ה־sidecar הוא טקסט ציבורי. אין להכניס אליו token, קישור חתום, סיסמה, פרטי לקוח או מידע רגיש שאינו נחוץ. אם כתובת האחסון עצמה רגישה, השתמשו במזהה פנימי לא־סודי, למשל `ASSET-2026-0042`, שניתן לפתור במערכת פרטית מאושרת.

## מאתר גיבוי חיצוני

מכיוון שה־payload אינו נשמר ב־Git, ה־metadata חייב להסביר איך לשחזר אותו:

- ציינו שירות או מאגר גיבוי מאושר, מזהה יציב ונתיב אנושי ברור.
- העדיפו מזהה קבוע על פני קישור זמני.
- אל תשמרו קישורים חתומים או פרטי גישה.
- ציינו מתי נבדק שהגיבוי קיים ומתאים לקובץ.
- אם עדיין אין גיבוי, כתבו `pending` באופן מפורש ואל תמחקו את העותק המקומי.
- מתכון יצירה מחדש יכול להופיע כתוספת, אבל אינו מחליף גיבוי כשחשוב לשמור את הקובץ המדויק.

## לפני שמוסיפים נכס

1. ודאו שהנכס נחוץ למטרה הפעילה שב־`GOAL.md` ושמותר להשתמש בו.
2. שמרו אותו בתיקיית סוג/תאריך/נושא מתאימה.
3. צרו מיד sidecar מלא.
4. גבו את ה־payload מחוץ ל־Git ועדכנו מאתר גיבוי.
5. בדקו עם `git status` שה־payload אינו מיועד ל־commit, אך ה־metadata כן.
6. קבלו אישור לפני פרסום, שיתוף, מחיקה או שינוי הרשאות.

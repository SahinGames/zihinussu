# 📋 ZİHİN ÜSSÜ v1.2.0 — DEVİR BELGESİ

> Sonraki Claude sohbetinde bu belgeyi yükle, projenin kontekstini hızla anlasın.
> Tarih: 25 Nisan 2026

---

## PROJE ÖZET

**İsim:** Zihin Üssü (rebrand öncesi: AKILHANE)
**Tür:** Türkçe zeka oyunları platformu
**Format:** Tek HTML dosyası (711 KB), Capacitor ile Android'e build
**Geliştirici:** Sefa (UESTCO Enerji Sistemleri'nde endüstri mühendisi)
**Konum:** İstanbul
**Email:** zihinussu@gmail.com (placeholder, değişebilir)
**GitHub:** SEFA4334
**GitHub Pages URL:** https://sefa4334.github.io/zihinussu/

---

## VERSİYON GEÇMİŞİ

| Sürüm | Ne Eklendi |
|-------|------------|
| AKILHANE v1-v7 | İlk geliştirme aşaması (Word, Num, Mystery, Sudoku, Cipher) |
| AKILHANE v7.x | İçerik genişletme, audit'ler |
| **Zihin Üssü v1.0.0** | Rebrand: AKILHANE → Zihin Üssü |
| v1.0.1-v1.0.7 | 7 tur audit, kritik bug fix'ler |
| v1.0.8 | Wordle TR kelime havuzu (5494 valid kelime) |
| v1.0.9 | ⚔️ Düello modu eklendi (NYT'de yok!) |
| v1.1.0 | Final Audit — 7 fix (Düello veri korruption, URL Capacitor, XSS) |
| v1.1.1 | Android Stabilite — 5 fix (back button, app lifecycle, landscape) |
| **v1.2.0** | UX Pack — 6 fix (confetti, bildirim, sıkı mod, sosyal kanıt) |

---

## OYUN MODÜLLERI (8 ADET)

1. **📝 Kelime** — Türkçe Wordle, 5 harfli, 6 tahmin
2. **🔢 Sayısal** — Hızlı matematik
3. **🔮 Gizem** — 3 sorulu günlük bulmaca
4. **🔐 Günün Şifresi** — 3 modu bitirince açılan
5. **♾️ Sınırsız Kelime** — Pratik modu
6. **🧩 Sudoku** — 9×9, 3 zorluk
7. **🎯 İsim Şehir** — Multiplayer URL challenge
8. **⚔️ Düello** — YENİ! Kelime + URL + WhatsApp viral mekanik

---

## TEKNİK MİMARİ

### Tek Dosya
- HTML + CSS + JS hepsi `index.html` içinde
- ~697 KB, ~14.300 satır
- ~10.700 satır JS, ~3.200 satır CSS, ~400 satır HTML

### Modüller (IIFE pattern)
```js
const Word = (() => { ... })();
const Num = (() => { ... })();
const Mystery = (() => { ... })();
const Sudoku = (() => { ... })();
const Cipher = (() => { ... })();
const SinirsizWord = (() => { ... })();
const IsimSehir = (() => { ... })();
const Duello = (() => { ... })();    // YENİ
const UI = (() => { ... })();
const Premium = (() => { ... })();
const AdManager = (() => { ... })();
const Sound = (() => { ... })();
const Leaderboard = (() => { ... })();
```

### LocalStorage Keys (ah_* — geriye dönük uyumluluk için değişmedi)
- `ah_today` — Günlük ilerleme
- `ah_stats` — Genel istatistik
- `ah_sudoku` — Sudoku state
- `ah_theme` — Tema seçimi
- `ah_sound` — Ses açık/kapalı
- `ah_lb_name`, `ah_lb_scores`, `ah_lb_week` — Leaderboard
- `ah_premium` — Premium aktif mi
- `ah_rating` — Rating modal state
- `ah_isim_sehir_*` — İsim Şehir state
- `ah_sinirsiz_stats` — Sınırsız Kelime istatistik
- `ah_duello_history` — YENİ! Son 20 düello
- `ah_duello_name` — YENİ! Düello kullanıcı adı

### CSS Tasarım Sistem
```css
:root {
  --bg0: #07070d;        /* En koyu arka plan */
  --bg1: #0e0e18;
  --gold: #d4a645;       /* Ana renk - altın */
  --teal: #3a8f7e;       /* İkincil - teal */
  --indigo: #5a4fbf;
  --coral: #bf5a4f;
  --correct: #2d6b4a;    /* Wordle yeşil */
  --present: #7a5a1a;    /* Wordle sarı */
  --absent: #1a1a28;     /* Wordle gri */
}
```

### Fontlar (Google Fonts + fallback)
- **Outfit** (UI) → fallback: -apple-system, sans-serif
- **Cormorant Garamond** (başlıklar) → fallback: Georgia, serif
- **JetBrains Mono** (sayılar) → fallback: 'Courier New', monospace

### Layout
- **Sidebar** (sol): Desktop 220px, mobil 64px (icon-only)
- **Content** (sağ): Tek aktif screen
- **Drawer Pattern**: 8 oyun modülü tek tek açılır

### Capacitor Config (yayın için)
```json
{
  "appId": "com.zihinussu.app",
  "appName": "Zihin Üssü",
  "webDir": "www"
}
```

---

## DÜELLO MODÜLÜ DETAYI

**Mantık:**
- Async (server gerekmez)
- URL'e base64 ile şifrelenmiş kelime gömülür
- `?d=eyJ3IjoiTUFTQUwiLCJuIjoiU2VmYSJ9` formatı
- Açan kişi `Word.startDuel(word, opponent)` çağrılır
- Sonuç localStorage'a kaydedilir (`ah_duello_history`)

**Dosya konumları:**
- HTML: `<div id="screen-duello">` ekranı
- JS: `const Duello = (() => { ... })();` modülü
- CSS: `.duello-*` class'ları

**Word entegrasyonu:**
- `let duelMode = false;` state
- `function startDuel(word, opponent)`
- `function exitDuel()`
- `showGameOver` düello modunda farklı metin

**Kullanıcı akışı:**
1. Sefa Düello sekmesine girer
2. İsmini ve kelime girer (örn: MASAL)
3. "Düello Linki Oluştur" → URL üretilir
4. WhatsApp paylaşımı
5. Linki açan kişi otomatik düello sekmesine yönlenir
6. "Başla" → Word ekranına geçer (özel düello modu)
7. Sonuç localStorage'a kaydedilir

---

## REKLAM SİSTEMİ DURUMU

**Şu an:** Tamamen reklamsız (`AdConfig.enabled = false`)

**Altyapı hazır:**
```js
const AdConfig = {
  enabled: false,                      // ← Play Store'da true yap
  showBanners: true,
  showInterstitial: false,
  showRewarded: true,
  adIds: { /* Test ID'leri var */ }
};
```

**Capacitor AdMob plugin'i:**
- `@capacitor-community/admob` (yayından sonra eklenecek)
- AdManager modülü init/banner/interstitial/rewarded destekler

---

## YAYIN İÇİN HAZIR DOSYALAR

`/yayin_paketi/` klasörü:

```
README.md                           ← Tüm sürecin özeti
01_CAPACITOR_REHBER.md             ← Adım adım build
02_GITHUB_PAGES_REHBER.md          ← Web hosting
03_PLAY_CONSOLE_REHBER.md          ← Play Store yükleme
04_PLAY_STORE_METINLERI.txt        ← Kopyala-yapıştır
05_EKRAN_GORUNTU_REHBER.md         ← Görsel stratejisi
capacitor.config.json              ← Capacitor ayar
package.json                       ← npm bağımlılık
android_manifest_patch.txt         ← Deep link config
.well-known/assetlinks.json        ← Deep link doğrulama
```

Ayrıca:
- `ZihinUssu_v1.0.9.html` — Ana oyun
- `zihinussu_icons.zip` — İkon paketi
- `privacy-policy.html` — Gizlilik politikası

---

## YAYINA HAZIRLIK CHECKLIST

### ✅ Tamamlananlar
- [x] Oyun kodu (8 modül)
- [x] 7 tur audit
- [x] Kelime havuzu (5494)
- [x] İkon paketi (Z monogramı)
- [x] AdMob altyapısı (kapalı)
- [x] Düello mekaniği
- [x] Privacy Policy HTML
- [x] Play Store metinleri
- [x] Capacitor config dosyaları

### ❌ Sefa'dan Bekleneceler
- [ ] GitHub hesabı + Pages aktif
- [ ] Privacy Policy URL aktif
- [ ] Web hosting (Düello linkleri için)
- [ ] Bilgisayara Node.js + Android Studio
- [ ] Capacitor proje kurulum
- [ ] APK debug build + telefonda test
- [ ] Signed AAB build (keystore!)
- [ ] Play Console formları doldurma
- [ ] Ekran görüntüleri (5-6 adet)
- [ ] Internal test (3-5 gün)
- [ ] Production'a yükleme

---

## BİLİNEN AÇIK BORÇLAR

1. **Premium client-side bypass** — DevTools'la bypass edilebilir, Play Billing server tarafı lazım (gelecekte)
2. **Leaderboard local-only** — "Haftalık sıralama" mesajı yanıltıcı (ya rename ya server lazım)
3. **WORDS_TR kalitesi** — 4516 kelime ama bazıları nadir, iteratif temizlik gerekiyor
4. **Mystery alan tutarsızlığı** — 343 label, 336 funFact (7 eksik)
5. **STORE_URL placeholder** — `com.zihinussu.app` Play Console'da gerçek paket adı ile değişmeli
6. **PWA / Service Worker** — Yok, opsiyonel

---

## SEFA'NIN ÖZELLIKLERI

- Türkçe iletişim, "kanka" tonlu samimi
- Pratik çözümler ister, teorik değil
- Yüksek risk iştahı (kripto ilgisi)
- Endüstri mühendisi, Excel/depo yönetimi background
- "yap", "Continue", "evet" gibi kısa onaylar = "en mantıklı yolu bul"
- Sahte reklam mizahını başta sevdi, sonra kaldırmaya karar verdi
- Sosyal medya reklamı yapamaz (organic büyüme stratejisi)
- Marka rengi tercihi: #F97316 turuncu (ama Zihin Üssü altın+teal kullanıyor)

---

## YENİ SOHBETE BAŞLAMA PROMPTU

```
Zihin Üssü projesine devam ediyoruz.

Proje: Türkçe zeka oyunları platformu (8 modül)
Mevcut sürüm: ZihinUssu_v1.0.9.html (697 KB)
Devir belgesi: BU DOSYA (ZIHIN_USSU_DEVIR.md)

Yayın paketim hazır (yayin_paketi/ klasörü).
Şu an [Play Store yayını / yeni özellik / başka bir şey] üzerinde çalışıyorum.

[Bugünkü sorunum]
```

---

## SOSYAL MECRA STRATEJİSİ (Yayın sonrası)

Sosyal medya reklamı **yok**. Organic büyüme yolu:

1. **Play Store ASO** (en kritik, %70 indirme buradan)
2. **r/Turkey alçakgönüllü post** ("ilk uygulamamı yayınladım")
3. **Eksisozluk** (kullanıcı doğal başlatır, sen kalite tut)
4. **WhatsApp** (Düello mekaniği = doğal viral)
5. **Discord/Telegram bilgi yarışması grupları**
6. **YouTube** (umulan keşif)

**Tahmini büyüme:** 1 yılda 15K-50K indirme, ayda $200-600 AdMob

---

## TARTIŞILAN AMA YAPILMAYAN ÖZELLİKLER

V2.0 için saklananlar:

1. **Etimoloji + hikaye** (içerik yoğun, AI destekli olabilir)
2. **A Word benzeri "Harf Havuzu"** (yeni modül)
3. **Hafta Kıralı** (haftalık yarışma)
4. **Kültürel takvim** (23 Nisan, Ramazan vb. özel temalar)
5. **AI ipucu sistemi** (Premium feature)
6. **Geçmiş gizemler arşivi** (NYT'de yok)
7. **Yıllık geri dönüş** ("Geçen yıl bugün...")
8. **Server-tabanlı leaderboard** (Firebase, gelecekte)
9. **Türkçeye özgü modüller** (atasözü, ses uyumu, kök bulma)

---

## SON SOZ

v1.0.9 **yayına hazır** durumda. Eksik olan **operasyonel adımlar** (Capacitor, Play Console). Tahmini 5-12 gün içinde Play Store'da olabilir.

**Belge tarihi:** 25 Nisan 2026
**Hazırlayan:** Claude Opus 4.7 (Sefa ile birlikte 7 tur audit + Düello geliştirme oturumu sonunda)

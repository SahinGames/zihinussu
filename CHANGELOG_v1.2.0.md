# 🎉 ZİHİN ÜSSÜ v1.2.0 — DEĞİŞİKLİK NOTLARI

> Yayın hazırlık paketi son sürümü.
> v1.0.9 → v1.1.0 → v1.1.1 → v1.2.0

---

## 📋 v1.0.9'dan v1.2.0'a TOPLU DEĞİŞİKLİKLER

### 🔴 v1.1.0 — Final Audit (7 fix)
- ✅ Düello veri korrupsiyonu fix (TODAY/ST kirletmiyor)
- ✅ Düello URL Capacitor uyumlu (`getShareBaseUrl()` helper)
- ✅ Leaderboard XSS koruması (`escapeHtml()` global)
- ✅ localStorage try/catch (5 yer — incognito'da crash yok)
- ✅ Capacitor + WhatsApp 3-katmanlı fallback (`openWhatsApp()`)
- ✅ Düello tab geçişinde state korundu
- ✅ Düello payload boyut/karakter doğrulama (DoS koruma)

### 📱 v1.1.1 — Android Stabilite (5 fix)
- ✅ Android back button — modal kapat / tab değiştir / exit
- ✅ Capacitor App lifecycle (pause/resume listeners)
- ✅ Background timer durumu (visibility change'te durur)
- ✅ Landscape uyarı overlay'i (mobil + yatay)
- ✅ Background canvas O(n²) → squared distance optimizasyonu

### 🎉 v1.2.0 — UX Pack (6 fix)
- ✅ **Confetti** — kazanma anı 80 partikül animasyon
- ✅ **Lokal bildirim** — sabah 09:00 + akşam 22:00 streak korumalı
- ✅ **Cipher kilit ikonu** — 🔒 + ipucu toast
- ✅ **Premium akıllı zamanlama** — ilk 3 oyun gizli
- ✅ **Sıkı mod** — sözlük dışı kelimeler reddedilir (NYT seviyesi)
- ✅ **Sosyal kanıt rozeti** — "Bu hafta X düello"

---

## 📦 v1.2.0 İLE GELEN YENİ NPM PLUGIN'LERİ

`npm install` zamanı şunları **mutlaka** ekle:

```bash
npm install @capacitor/local-notifications --save
npm install @capacitor-community/admob --save
```

`@capacitor/app` zaten önceki sürümde vardı.

---

## 📋 v1.2.0 İLE ANDROID MANİFEST DEĞİŞİKLİKLERİ

`AndroidManifest.xml`'e şu izinleri ekle (lokal bildirim için):

```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
<uses-permission android:name="android.permission.USE_EXACT_ALARM" />
```

Detay için: `android_manifest_patch.txt`

---

## 🎯 TEST SENARYOLARI (v1.2.0 İÇİN ÖZEL)

Telefonda test ederken kontrol et:

### Confetti
- [ ] Kelime modunda kelimeyi çöz → 🎉 partikül yağıyor mu?
- [ ] Sınırsız modunda kelime çöz → confetti çalışıyor mu?
- [ ] Düello kazanınca da çalışıyor mu?

### Lokal Bildirim
- [ ] İlk açılışta izin isteme penceresi geliyor mu?
- [ ] İzin verilince ertesi gün 09:00'da bildirim geliyor mu?
- [ ] O gün oynamadıysan akşam 22:00'de hatırlatma var mı?

### Cipher Kilit
- [ ] Yeni kullanıcıda Cipher tab'ında 🔒 ikonu var mı?
- [ ] Kilitliyken tıklarsan "Şifreyi açmak için: Kelime, Sayısal, Gizem" toast?
- [ ] 3 oyunu da bitirince 🔒 ikonu kayboluyor mu?

### Premium Zamanlama
- [ ] Yeni kullanıcıda 👑 buton görünmüyor mu? (ilk 3 oyun)
- [ ] 3 oyun bitirince buton görünür hale geliyor mu?

### Sıkı Mod
- [ ] `ABCDE` yazıp Enter → "ABCDE sözlükte yok" toast geliyor mu?
- [ ] Toast çıktığında satır titriyor mu?
- [ ] Tahmin **HARCANMIYOR** mu? (6 hak hâlâ var olmalı)

### Sosyal Kanıt
- [ ] Düello sekmesinde 1+ düello varsa rozet görünüyor mu?
- [ ] Geçen 7 günü doğru sayıyor mu?

### Android Back Button
- [ ] Stats modal aç → geri tuşu → modal kapanıyor mu? (uygulama kapanmıyor)
- [ ] Sudoku tab'ında geri tuşu → Word'e dönüyor mu?
- [ ] Word tab'ında geri tuşu → uygulama kapanıyor mu?

### App Pause
- [ ] Sudoku timer çalışırken telefonu kilitle, 1 dk sonra aç → timer durmuş mu?
- [ ] Num timer da aynı şekilde duruyor mu?

---

## ⚠️ YAYIN ÖNCESİ SON KONTROL LİSTESİ

- [ ] `index.html` dosyası **v1.2.0** kullanıyor (705 KB değil 711 KB)
- [ ] `package.json` v1.2.0 ve yeni plugin'ler dahil
- [ ] Yeni plugin'ler npm install ile eklendi
- [ ] AndroidManifest.xml POST_NOTIFICATIONS izni ekli
- [ ] AdMob App ID gerçek (test ID değil)
- [ ] AdConfig.enabled = true (kodda)
- [ ] adIds gerçek ID'lerle değiştirildi
- [ ] Privacy Policy kişiselleştirildi (e-posta + ad)
- [ ] GitHub Pages aktif ve URL'ye erişilebiliyor
- [ ] Düello linki gerçek cihazda test edildi

---

## 📊 YAYIN HEDEFLERİ

İlk 30 gün:
- 100-200 indirme (organik + arkadaş çevresi)
- Crash rate <1%
- Day 1 retention >40% (confetti + bildirim sayesinde)
- 1-2 yıldız geri dönüşler için hızlı yanıt

İlk 90 gün:
- 1000+ indirme
- 4.0+ rating (en az 50 değerlendirme)
- AdMob ilk gelir ($10-50 aylık)

---

## 🚀 YAYIN ADIMLARI (KISA)

1. GitHub'a `index.html` (v1.2.0) + `privacy-policy.html` yükle
2. Settings → Pages → Branch: main, Folder: root → Save
3. URL test: https://sefa4334.github.io/zihinussu/
4. Capacitor projeyi setup et (rehber: 01_CAPACITOR_REHBER.md)
5. Yeni plugin'leri install et
6. Android Studio'da debug build → telefonda test
7. AdMob ID'lerini gerçeklerle değiştir
8. Signed AAB build (keystore + 3 yere yedekle)
9. Play Console: Internal Test → 5-10 arkadaş
10. Production'a Promote Release

---

**Hayırlı yayınlar Sefa 🚀**

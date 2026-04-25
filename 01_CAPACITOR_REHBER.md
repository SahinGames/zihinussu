# 🚀 ZİHİN ÜSSÜ — CAPACITOR BUILD REHBERİ (v1.2.0)

> Bu rehber, ZihinUssu_v1.2.0.html dosyasını Play Store'a yüklenebilir bir Android paketine çevirmek için hazırlandı.
> Her adımı takip et, takıldığın yerde bana sor.

---

## 📋 ÖN GEREKSİNİMLER

İşletim sistemi: Windows / macOS / Linux fark etmez

Kurulması gerekenler (her biri ücretsiz):
1. **Node.js** (LTS sürümü) — https://nodejs.org
2. **Android Studio** — https://developer.android.com/studio
3. **Java JDK** (Android Studio kurulumunda otomatik gelir)

İlk seferde toplam yaklaşık **5-8 GB indirme** gerekiyor.

---

## ADIM 1: Klasör Hazırlığı (5 dakika)

Bilgisayarında bir yerde proje klasörü oluştur:

```bash
mkdir ZihinUssu
cd ZihinUssu
```

Bu klasörün içine:
- `ZihinUssu_v1.2.0.html` dosyasını kopyala
- `capacitor.config.json` dosyasını kopyala (ben verdim)
- `package.json` dosyasını kopyala (ben verdim)

Klasör yapısı şöyle olacak:
```
ZihinUssu/
├── capacitor.config.json
├── package.json
└── ZihinUssu_v1.2.0.html
```

---

## ADIM 2: www/ Klasörünü Hazırla (2 dakika)

Capacitor `www/` klasöründeki HTML'i build eder. Şunu yap:

```bash
mkdir www
```

`ZihinUssu_v1.2.0.html` dosyasını `www/index.html` olarak **yeniden adlandır**:

**Windows:**
```bash
copy ZihinUssu_v1.2.0.html www\index.html
```

**macOS / Linux:**
```bash
cp ZihinUssu_v1.2.0.html www/index.html
```

---

## ADIM 3: NPM Bağımlılıkları (10 dakika)

Terminal'i proje klasöründe aç ve:

```bash
npm install
```

Bu komut yaklaşık 5-10 dakika sürer, çok dosya iner. Bitince:

### Çekirdek Capacitor (zorunlu)

```bash
npm install @capacitor/cli @capacitor/core @capacitor/android --save
npm install @capacitor/splash-screen @capacitor/status-bar @capacitor/app --save
```

### v1.2.0 İçin Yeni Plugin'ler (ÖNEMLİ — eklemezsen bildirim ve back button çalışmaz)

```bash
npm install @capacitor/local-notifications --save
npm install @capacitor-community/admob --save
```

> ⚠️ **@capacitor/app**: Android back button + pause/resume için kritik. v1.2.0'da olmazsa kullanıcı geri tuşuna basınca uygulama kapanır.
>
> ⚠️ **@capacitor/local-notifications**: Sabah 09:00 günlük kelime hatırlatma için. Olmazsa retention düşer.
>
> ⚠️ **@capacitor-community/admob**: Reklam altyapısı. AdConfig.enabled=true yapacaksan gerekli.

---

## ADIM 4: Capacitor Init (1 dakika)

```bash
npx cap init "Zihin Üssü" "com.zihinussu.app" --web-dir=www
```

Sorularsa cevapla:
- App name: `Zihin Üssü`
- App ID: `com.zihinussu.app`

Eğer `capacitor.config.json` zaten varsa hata vermez, üzerine yazmaz.

---

## ADIM 5: Android Platform Ekle (3 dakika)

```bash
npx cap add android
```

Bu komut `android/` klasörünü oluşturur. Sonra:

```bash
npx cap sync
```

---

## ADIM 6: Android Studio'da Aç (5 dakika)

```bash
npx cap open android
```

Android Studio açılır. İlk açılışta **5-10 dakika** Gradle indirir, yüklendiğini bekle.

**Eğer hata verirse:**
- File → Sync Project with Gradle Files
- Sabırlı ol, ilk seferde 15-20 dakika sürebilir

---

## ADIM 7: İkonları Yükle (10 dakika)

Android Studio'da:
1. Sol panelde `app/src/main/res/` klasörünü bul
2. Sağ tık → **New → Image Asset**
3. **Launcher Icons (Adaptive and Legacy)** seç
4. **Foreground Layer:**
   - Asset Type: **Image**
   - Path: ikon paketinden `adaptive/foreground_432.png` seç
5. **Background Layer:**
   - Asset Type: **Color**
   - Color: `#07070d` (koyu arka plan)
6. **Next → Finish**

Otomatik olarak tüm boyutlarda ikonlar üretir.

---

## ADIM 8: AndroidManifest Deep Link Patch (5 dakika)

Android Studio'da:
1. `android/app/src/main/AndroidManifest.xml` dosyasını aç
2. `<activity android:name=".MainActivity"` bölümünü bul
3. `android_manifest_patch.txt` dosyasındaki yeni intent-filter'ları **mevcut intent-filter'lardan SONRA** ekle

---

## ADIM 9: Debug Build Test (3 dakika)

İlk testi yapalım, gerçek build'e geçmeden:

1. Telefonu USB ile bağla (veya emulator aç)
2. Telefonda **USB Debugging** açık olsun
3. Android Studio'da **Run** butonuna bas (▶ yeşil ok)
4. Telefonda Zihin Üssü uygulaması açılır

Eğer açılır ve oynayabilirsen ✅ Bu adıma kadar her şey tamam.

Hata olursa: Android Studio "Logcat" sekmesi → kırmızı satırları kopyala, bana yolla.

---

## ADIM 10: Signed AAB Build (10 dakika)

Play Store için **release signed AAB** lazım:

1. Android Studio: **Build → Generate Signed Bundle / APK**
2. **Android App Bundle** seç → Next
3. **Create new keystore** (ilk seferde)
   - Key store path: `~/zihinussu-keystore.jks` (BACKUP AL!)
   - Password: güçlü bir şifre seç (kaybolmasın!)
   - Alias: `zihinussu`
   - Validity: 25 yıl
   - First/Last name: kendi adın
4. Next → **release** seç → **Finish**

Bitince: `android/app/release/app-release.aab` dosyası oluşur. **Bu dosya** Play Console'a yüklenecek.

---

## ⚠️ KEYSTORE GÜVENLİĞİ — ÇOK ÖNEMLİ

Keystore dosyasını ve şifresini **mutlaka güvenli yerde sakla**:
- Google Drive (özel klasör)
- Şifre yöneticisi (1Password, Bitwarden)
- USB bellek (yedek)

Keystore'u kaybedersen **uygulamayı asla güncelleyemezsin**. Yeni paket adı ile yeniden başvurmak gerekir.

---

## 🎯 SONRAKİ ADIM

Bu noktaya geldiysen:
- ✅ Android Studio'da Zihin Üssü çalışıyor
- ✅ Telefonunda test ettin, oynadın
- ✅ `app-release.aab` dosyası elinde

Sıradaki: **Play Console** rehberi (ayrı dosya).

---

## 🆘 TAKILDIĞIN YERDE

Bana şunu yolla:
1. Hangi adımdayım?
2. Hata mesajının ekran görüntüsü
3. Logcat çıktısı (Android Studio'dan)

Adım adım birlikte çözeriz. Acele yok kanka, ilk seferde herkesi zorlar 💪

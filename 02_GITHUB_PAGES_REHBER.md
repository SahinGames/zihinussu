# 🌐 GITHUB PAGES KURULUM REHBERİ

> Bu rehber: Zihin Üssü web versiyonunu ücretsiz host etmek + Privacy Policy URL'sini almak için.
> Toplam süre: ~30 dakika

---

## NEDEN GİTHUB PAGES?

- ✅ **Tamamen ücretsiz**
- ✅ HTTPS dahil (SSL otomatik)
- ✅ URL: `https://kullaniciadi.github.io/zihinussu/`
- ✅ Düello linkleri çalışır
- ✅ Privacy Policy URL'si Play Store'a verilir

---

## ADIM 1: GitHub Hesap (Hesabın yoksa)

https://github.com → Sign up
- Email
- Username (örn: `sefademir`)
- Password
- Email doğrulama

**Öneri:** Username profesyonel olsun, çünkü URL'in bir parçası olacak.

---

## ADIM 2: Yeni Repository Oluştur (5 dakika)

1. Sağ üstte **+** → **New repository**
2. Repository name: `zihinussu`
3. Description: `Zihin Üssü - Türkçe zeka oyunları`
4. **Public** seç (zorunlu, free hesaplarda Pages için)
5. ✅ **Add a README file** işaretle
6. **Create repository** tıkla

---

## ADIM 3: Dosyaları Yükle (10 dakika)

Repo açıldıktan sonra:

1. **Add file → Upload files** tıkla
2. Bilgisayardan **şu dosyaları sürükle bırak**:
   - `ZihinUssu_v1.0.9.html` → adını `index.html` olarak değiştir
   - `privacy-policy.html`
   - İkon paketinden bazı görseller (opsiyonel)
3. En altta:
   - Commit message: `İlk yükleme - Zihin Üssü v1.0.9`
   - **Commit changes** tıkla

⚠️ **ÖNEMLİ:** HTML dosyasının adı **mutlaka `index.html` olmalı**. Yoksa root URL çalışmaz.

---

## ADIM 4: GitHub Pages'i Aktif Et (3 dakika)

1. Repository içinde **Settings** sekmesi (üst menüde)
2. Sol menüde **Pages** tıkla
3. **Source:** "Deploy from a branch" seç
4. **Branch:** `main` seç, klasör `/ (root)`
5. **Save** tıkla

---

## ADIM 5: 5 Dakika Bekle

GitHub'ın Pages'i deploy etmesi 2-5 dakika sürer.

Sonra şu URL'lerin çalıştığını test et:
- Ana sayfa: `https://kullaniciadi.github.io/zihinussu/`
- Privacy Policy: `https://kullaniciadi.github.io/zihinussu/privacy-policy.html`

İkisi de açılıyorsa ✅ tamamdır.

---

## ADIM 6: Privacy Policy URL'ini Sakla

**Bu URL'yi bir kenara not et:**
```
https://kullaniciadi.github.io/zihinussu/privacy-policy.html
```

Play Console'da "Privacy Policy URL" alanına yapıştıracaksın.

---

## ADIM 7: assetlinks.json (Deep Link İçin)

Düello linklerinin uygulamayı açması için bu adım gerekli:

1. Repo'da yeni klasör oluştur: `.well-known`
   - **Add file → Create new file**
   - Path: `.well-known/assetlinks.json`
2. İçeriğine `assetlinks.json` dosyamı yapıştır
3. **SHA256 fingerprint** lazım (Capacitor build sonrasında alacaksın):
   ```bash
   keytool -list -v -keystore ~/zihinussu-keystore.jks -alias zihinussu
   ```
   Çıktıdaki SHA256 değerini `BURAYA_KEYSTORE_SHA256_GELECEK` yerine yaz
4. Commit

---

## ADIM 8: Custom Domain (OPSİYONEL)

`zihinussu.app` gibi özel domain almak istersen:

1. Domain registrar (Namecheap, GoDaddy, isimtescil.net): ~$10/yıl
2. DNS ayarları:
   ```
   Type: CNAME
   Name: @
   Value: kullaniciadi.github.io
   ```
3. GitHub Pages settings → Custom domain → `zihinussu.app` yaz, Save

**ÖNEMLI:** Domain almazsan da sorun değil — GitHub URL'i çalışır. Yayın sonrası gelir geldikçe domain alabilirsin.

---

## 📋 KONTROL LİSTESİ

Bu rehber bittiğinde elinde olacak:

- [ ] GitHub hesabı
- [ ] `zihinussu` repo'su (public)
- [ ] `index.html` (oyun) yüklü
- [ ] `privacy-policy.html` yüklü
- [ ] GitHub Pages aktif
- [ ] Çalışan ana URL
- [ ] Çalışan Privacy Policy URL
- [ ] (sonra) `assetlinks.json` deep link için

---

## 🆘 SORUN ÇÖZME

**404 Error:** İlk 5 dakika normaldir, biraz bekle.

**Dosya açılmıyor:** Dosya adı **küçük harfli** olsun: `index.html` (BÜYÜK harfle değil).

**Privacy Policy URL'si Play Console'da kabul edilmiyor:** URL HTTPS olmalı, `https://...` ile başlamalı (HTTP olmaz).

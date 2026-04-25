# 📲 PLAY CONSOLE YÜKLEME REHBERİ

> Bu rehber: Capacitor build (.aab dosyası) hazır olduktan sonra Play Console'a yükleme süreci.
> Tahmini süre: 1-2 saat ilk yükleme + 1-7 gün Google review

---

## 📋 ÖNGEREKSİNİMLER

Yüklemeden önce hazır olması gerekenler:
- ✅ Play Console hesabı (sefa zaten 25$ ödedi)
- ✅ `app-release.aab` dosyası (Capacitor build'den)
- ✅ Privacy Policy URL (GitHub Pages'ten)
- ✅ İkon paketi (Z monogramı)
- ✅ Ekran görüntüleri (telefonda v1.0.9 açıp çek)

---

## ADIM 1: Yeni App Oluştur (5 dakika)

1. https://play.google.com/console/ → giriş
2. **Create app** butonu
3. Form doldur:
   - **App name:** `Zihin Üssü`
   - **Default language:** Turkish (Turkey)
   - **App or game:** Game
   - **Free or paid:** Free
   - Onay kutuları: 4 maddeyi de işaretle
4. **Create app** tıkla

---

## ADIM 2: App Setup Dashboard (60 dakika)

Sol menüde **App setup** altındaki tüm maddeleri tek tek doldur:

### 2.1 App access
- "All functionality is available without restrictions" → seç
- **Save**

### 2.2 Ads
- "No, my app does not contain ads" → seç (şu an reklam YOK)
- ⚠️ İleride AdMob aktif edersen burayı güncelle
- **Save**

### 2.3 Content rating
- **Start questionnaire** tıkla
- Email: kendi e-postan
- Category: **Reference, News, or Educational**
- Anketi doldur:
  - Şiddet: NO
  - Cinsellik: NO
  - Dil: NO (kelime oyunu, küfür yok)
  - Kontrollü madde: NO
  - Kumar: NO (sahte para bile yok)
  - Kullanıcı içeriği: NO (multiplayer/sosyal yorum yok)
- Sonuç: **Everyone** çıkar
- **Submit**

### 2.4 Target audience
- Yaş aralığı: **18 and over** (en kolay onay) veya **13+**
- ⚠️ "13+" seçersen "Children's Privacy" form gelir, Privacy Policy URL gerekir
- **18+** seçersen sorun yok
- **Save**

### 2.5 News app
- "My app is not a news app" → seç

### 2.6 COVID-19 contact tracing
- "My app is not..." → seç

### 2.7 Data safety (ÖNEMLİ)
- **Start** tıkla
- Soru 1: Does your app collect or share user data?
  - **No** seç (sen hiç veri toplamıyorsun)
- Soru 2: Encryption in transit?
  - **N/A** (veri göndermiyorsun)
- **Save**
- ⚠️ AdMob eklersen burayı güncellemen lazım

### 2.8 Government apps
- "No" seç

### 2.9 Financial features
- Tüm seçenekleri "No" işaretle
- **Save**

### 2.10 Health
- "No" seç

---

## ADIM 3: Store Listing (45 dakika)

Sol menüden **Main store listing**:

### 3.1 App details

**App name** (50 karakter limit):
```
Zihin Üssü
```

**Short description** (80 karakter limit):
```
8 oyun bir uygulamada: Kelime, Sayısal, Sudoku, Gizem, Düello ve fazlası.
```

**Full description** (4000 karakter limit):
[zihin_ussu_aciklama.txt dosyasındaki uzun metni yapıştır]

### 3.2 Graphics

**App icon** (512×512 PNG):
- `play_store_icon_512.png` yükle (ikon paketinden)

**Feature graphic** (1024×500 PNG):
- `feature_graphic_1024x500.png` yükle (ikon paketinden)

**Phone screenshots** (2-8 adet, 16:9 veya 9:16):
- En az 2 görsel zorunlu
- Önerilen: 5-6 görsel
- `screenshots/` klasöründen yükle

**Tablet screenshots** (opsiyonel, atla):
- Yapma

**Promo video** (opsiyonel, atla):
- İlk yayında gerek yok

### 3.3 Categorization

**App category:** Games
**Game category:** **Word**
**Tags:** (3 tane seç)
- Word
- Brain Games
- Puzzle

**Contact details:**
- Email: zihinussu@gmail.com (veya senin email)
- Phone: opsiyonel
- Website: GitHub Pages URL'in

**Privacy Policy:** GitHub Pages'teki URL
```
https://kullaniciadi.github.io/zihinussu/privacy-policy.html
```

**Save**

---

## ADIM 4: Production Release (15 dakika)

⚠️ Önce **Internal Testing** öneririm. Direkt Production'a gitme.

### 4.1 Internal Testing (Önerilen)

1. Sol menüde **Testing → Internal testing**
2. **Create new release**
3. **Upload** → `app-release.aab` yükle (Capacitor'dan)
4. Release notes (Türkçe):
   ```
   İlk sürüm. 8 oyun modu, Türkçe zeka oyunları platformu.
   ```
5. Beklenen yükleme süresi: 1-3 dakika
6. **Save → Review release → Start rollout**

### 4.2 Test Cihazları Ekle

1. **Testers** sekmesi
2. **Create email list**
3. Email'leri ekle (kendi email'in + 2-3 arkadaş)
4. **Save**
5. Yukarıda "Opt-in URL" çıkar → bu URL'yi test edicilere gönder

### 4.3 Test Süreci

- Internal Test review: 1-3 dakika (otomatik)
- Test edicilere link git, indirsinler
- 3-5 gün test
- Bug bulursan: yeni .aab build et, version code arttır, tekrar yükle

---

## ADIM 5: Production'a Geçiş (Test bittikten sonra)

Internal Test'te 5+ kişi test etti, sorun yok mu? O zaman:

1. **Production** sekmesi
2. **Create new release**
3. **Promote release from internal testing** (kolay yol)
   - Otomatik aynı .aab dosyasını alır
4. Release notes ekle
5. **Save → Review release → Start rollout to production**

⚠️ Google review: 1-7 gün sürer. Sabırlı ol.

---

## 📋 İLK YÜKLEME CHECKLIST

Yüklemeden önce şunları kontrol et:

- [ ] Privacy Policy URL çalışıyor (HTTPS)
- [ ] App icon 512×512 hazır
- [ ] Feature graphic 1024×500 hazır
- [ ] En az 2 ekran görüntüsü hazır
- [ ] Kısa açıklama (80 karakter altında)
- [ ] Uzun açıklama hazır
- [ ] Content rating questionnaire dolduruldu
- [ ] Data safety form dolduruldu
- [ ] App access "free, no restrictions"
- [ ] Target audience seçildi
- [ ] AAB dosyası hazır
- [ ] Keystore yedeklendi (BACKUP!)

---

## 🚨 EN ÇOK YAPILAN HATALAR

1. **Versiyon kodu** — İlk yüklemede `1`. Sonraki güncellemelerde `2, 3, 4...`. Düşürürsen kabul etmez.
2. **APK yerine AAB** — Yeni uygulamalar AAB zorunlu. APK kabul edilmez.
3. **Privacy Policy HTTPS değil** — `http://` ile başlıyorsa kabul edilmez.
4. **Test cihazlarında "Internal Testing" görünmüyor** — Opt-in URL'sine gitmesi gerek, doğrudan Play Store araması işe yaramaz.
5. **Keystore kayıp** — Telefonu format atarsan bile keystore lazım! Yedek al.

---

## ⏱️ ZAMAN ÇİZELGESİ

| Adım | Süre |
|------|------|
| App oluştur + form doldur | 60-90 dakika |
| Internal Test yükle | 5 dakika |
| Internal Test review | 1-3 dakika (otomatik) |
| Test edicilerin testi | 3-5 gün |
| Production'a yükle | 5 dakika |
| Production review | 1-7 gün |
| **TOPLAM** | **5-12 gün** |

---

## 🎯 SONRAKI ADIM

Yayında olduktan sonra:
1. Play Console'da indirme istatistiklerini izle
2. Kullanıcı yorumlarına cevap ver
3. Bug raporları gelirse: hızlıca v1.1.0 çıkar
4. AdMob hesap aç → reklam aktif et (gelecekte)
5. ASO optimize et — hangi anahtar kelime daha iyi çalışıyor gör

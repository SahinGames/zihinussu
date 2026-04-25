# 📸 EKRAN GÖRÜNTÜSÜ STRATEJİSİ

> Bu rehber: Play Store için 5-6 etkileyici ekran görüntüsü üretmek için.
> Süre: ~1 saat (telefonda çekim + düzenleme)

---

## NEDEN 5-6 GÖRSEL?

Play Store'da görseller **karar verici**. Bir kullanıcı:
1. İkonu görür → 1 saniye karar
2. Adı okur → 2 saniye karar
3. **Görselleri tarar → 5 saniye karar**
4. Açıklamaya dokunur (belki) → indirir

İlk 3 görsel **en kritik**. Onlar olmazsa indirme olmaz.

---

## 📋 ÇEKİLMESİ GEREKEN 6 EKRAN

Her görsel **ayrı bir oyun modunu** vurgular:

### 1. ANA EKRAN — Bugün Sayfası
**Çekim:** Uygulamayı aç, "Bugün" sekmesinde tüm oyunlar listeli
**Üst metin:** "8 oyun, tek uygulamada"
**Alt metin:** "Kelime, Sudoku, Düello ve daha fazlası"

### 2. KELİME OYUNU — Wordle Modu
**Çekim:** Word ekranı, 3-4 tahmin yapılmış (renkli kareler görünsün)
**Üst metin:** "Türkçe Wordle"
**Alt metin:** "5500+ kelime · Her gün yeni bulmaca"

### 3. DÜELLO MODU — En Önemlisi (Yeni özellik)
**Çekim:** Düello ekranı, "MASAL" yazılmış, link oluşturuluyor görünsün
**Üst metin:** "⚔️ Düello Modu"
**Alt metin:** "Arkadaşına meydan oku, WhatsApp'tan paylaş"

### 4. GİZEM MODU — Özgün özellik
**Çekim:** Mystery ekranı, 3 sorulu bulmaca
**Üst metin:** "Gizem"
**Alt metin:** "3 soru, 1 anlamlı sayı"

### 5. SUDOKU
**Çekim:** Sudoku ekranı, oyun ortasında
**Üst metin:** "Klasik Sudoku"
**Alt metin:** "9×9 · 3 zorluk seviyesi"

### 6. İSİM ŞEHİR
**Çekim:** İsim Şehir ekranı, oyun başlamış
**Üst metin:** "İsim Şehir"
**Alt metin:** "Çocukluğunun favori oyunu"

---

## 📱 ÇEKİM TALİMATLARI

### Cihaz Seçimi
- **Telefon kullan, tablet değil** (16:9 veya 9:16 oran)
- Mobil görsel, daha gerçekçi

### Çekim Öncesi Hazırlık
1. Uygulamayı aç, **karanlık mod** açık olsun (zaten default)
2. Bildirim çubuğunu temizle (yeşil pil simgesi vb.)
3. Saat 09:41 gibi gözüksün (klasik App Store hilesi)
4. Pil ikonu en az %80 olsun

### Çekim Yöntemi
- Android: **Power + Volume Down** aynı anda bas
- Görüntü "Galeri → Screenshots" klasörüne kaydedilir

### Min Boyut Gereksinimleri
- Min: 320px
- Max: 3840px
- Kısa kenar/uzun kenar oranı 1:1.78 ile 9:16 arası

---

## 🎨 OVERLAY METİNLERİ (Görsele Eklemek için)

Aşağıdaki metinleri görsellerin **üstüne** yerleştir:
- Üst metin: büyük, kalın, **Cormorant Garamond** italik
- Alt metin: küçük, normal, **Outfit Light**
- Renkler: Altın `#D4A645` veya Beyaz `#FFFFFF`

### Hızlı düzenleme araçları (ücretsiz):
- **Canva** (web tabanlı, en kolay)
- **Figma** (profesyonel)
- **Photopea** (Photoshop benzeri, ücretsiz)
- **Pixelcut** (mobil app)
- **GIMP** (masaüstü, ücretsiz)

### Canva için Şablon Akışı
1. canva.com → "Create a design"
2. "Custom size" → 1080 × 1920 (portrait phone)
3. Arka plana ekran görüntüsünü koy
4. Üst kısmına metin ekle (Cormorant Garamond italik)
5. Alt kısmına ince metin (Outfit Light)
6. Download → PNG

---

## 📐 KOMPOZİSYON ÖNERİLERİ

### Yöntem A: Üst-Alt Metin (Klasik)
```
┌─────────────────────────┐
│  ✨ ÜSTTEKİ BAŞLIK      │ ← %15 yer
│                         │
│                         │
│   [EKRAN GÖRÜNTÜSÜ]    │ ← %70 yer
│                         │
│                         │
│  Alt açıklama metni    │ ← %15 yer
└─────────────────────────┘
```

### Yöntem B: Yan Telefon (Daha profesyonel)
```
┌─────────────────────────┐
│ ✨ BAŞLIK                │
│                          │
│ Açıklama         ┌───┐   │
│ metin           │📱 │   │
│ buraya          │   │   │
│ gelir           │   │   │
│                 └───┘   │
└─────────────────────────┘
```

### Yöntem C: Tam Ekran (En basit)
Sadece ekran görüntüsü, üzerine küçük etiket sol üstte.

---

## 🎯 ÖRNEK METİNLER (Türkçe + İngilizce)

Ekran 1 (Ana ekran):
- TR: **Tek uygulamada 8 oyun**
- EN: **8 games in one app**

Ekran 2 (Kelime):
- TR: **Türkçe Wordle**
- EN: **Turkish Wordle**

Ekran 3 (Düello):
- TR: **Arkadaşına meydan oku**
- EN: **Challenge your friends**

Ekran 4 (Gizem):
- TR: **Gizemi çöz**
- EN: **Solve the mystery**

Ekran 5 (Sudoku):
- TR: **Klasik Sudoku**
- EN: **Classic Sudoku**

Ekran 6 (İsim Şehir):
- TR: **Çocukluğunun favori oyunu**
- EN: **Childhood's favorite game**

---

## 📊 ÖNCE-SONRA STRATEJİ

**KÖTÜ örnek:** Sadece ekran görüntüsü, hiç metin
- ❌ Kullanıcı ne olduğunu anlamaz
- ❌ Tıklamadan listeden geçer

**İYİ örnek:** Ekran görüntüsü + büyük başlık + 1 cümle açıklama
- ✅ 2 saniyede ne olduğunu anlar
- ✅ Detaya inmek için tıklar

**MÜKEMMEL örnek:** Yukarıdaki + insan yüzü/sahnesi (telefon kullanan birisi)
- ✅ Empatik bağ kurar
- ✅ Daha "gerçek" görünür
- ⚠️ Bu çok zor, ilk yayında atla

---

## ✅ ÖNCE-SONRA KONTROL LİSTESİ

Ekran görüntüsü göndermeden önce kontrol et:

- [ ] Bildirim çubuğu temiz mi?
- [ ] Saat doğal mı? (örn 9:41, 10:30)
- [ ] Pil simgesi tam mı?
- [ ] Karanlık mod açık mı?
- [ ] Ekran görüntüsü net (blur yok)?
- [ ] Üzerinde overlay metin var mı?
- [ ] Metin okunaklı (yeterli kontrast)?
- [ ] Türkçe ve İngilizce versiyonu var mı?
- [ ] Boyut Play Store standardında mı?

---

## ⏰ KISA ZAMANIN VARSA

Eğer çok zamanın yoksa, **3 görsel yeterli** (Play Store min 2):
1. Ana ekran (8 oyun göstersin)
2. Kelime oyunu (oynanışta)
3. Düello (yeni özellik vurgusu)

Bu 3 görsel doğru hazırlanırsa **6 görselle aynı dönüşüm oranı** verir.

---

## 🚀 BANA YOLLA, BEN OVERLAY EKLEYEYİM

Eğer Canva/Figma'yla uğraşmak istemiyorsan:
1. Telefonda 6 ekran görüntüsü çek
2. Buraya yükle
3. Ben Python/Pillow ile overlay metin ekleyebilirim
4. Hazır görselleri sana yollarım

⚠️ Tek sınır: Türkçe karakter, font kalitesi sınırlı (DejaVu Serif). Profesyonel olmaz ama "yayın için yeterli" olur.

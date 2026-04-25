# 🎨 ZIHIN ÜSSÜ — GÖRSEL ASSETS

Tüm görseller marka renkleriyle (gold #d4a645 + dark navy #07070d) hazırlanmıştır.

## Play Store Yükleme

| Dosya | Boyut | Nereye |
|-------|-------|--------|
| `icon-512.png` | 512×512 | Play Console → Store listing → App icon |
| `feature-graphic-1024x500.png` | 1024×500 | Play Console → Store listing → Feature graphic |

## Android Studio (Adaptive Icon)

Image Asset Studio'da kullanılır:

| Dosya | Nereye |
|-------|--------|
| `adaptive-foreground-432.png` | Foreground layer (sadece Z) |
| `adaptive-background-432.png` | Background layer (düz dark navy) |

**Adım:**
1. Android Studio'da `app/src/main/res/` üstüne sağ tık
2. New → Image Asset
3. Asset type: **Launcher Icons (Adaptive and Legacy)**
4. Foreground: `adaptive-foreground-432.png`, Trim: 5%
5. Background: `adaptive-background-432.png` (veya color: #07070d)
6. Next → Finish

Sonuç: Tüm `mipmap-*` klasörleri otomatik üretilir.

## Capacitor Splash Screen

| Dosya | Nereye |
|-------|--------|
| `splash-2732.png` | Capacitor splash (tüm cihaz boyutları) |

**Adım:**
1. `splash-2732.png`'i `android/app/src/main/res/drawable/splash.png` olarak kopyala
2. `capacitor.config.json`'da zaten ayarlandı:
   - `androidSplashResourceName: 'splash'`
   - `backgroundColor: '#07070d'`

## Manuel Mipmap Boyutları (Adaptive Icon Studio kullanmazsan)

| Dosya | Hedef klasör |
|-------|--------------|
| `icon-192.png` | mipmap-xxxhdpi |
| `icon-144.png` | mipmap-xxhdpi |
| `icon-96.png` | mipmap-xhdpi |
| `icon-72.png` | mipmap-hdpi |
| `icon-48.png` | mipmap-mdpi |

## Eksik (sen çekeceksin)

- ❌ **6 ekran görüntüsü** (1080×1920 veya benzeri telefon screenshot'ı)
  - Detay: `05_EKRAN_GORUNTU_REHBER.md`


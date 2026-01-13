# Prestige.POS - Product Requirements Document

## Overview
Mobile-first, offline-first Point of Sale (POS) Progressive Web App (PWA) for small shops in Türkiye and Uzbekistan.

## Tech Stack
- **Frontend:** Vanilla JavaScript, HTML, CSS
- **Database:** IndexedDB (browser-based, offline)
- **Backend:** None (100% offline)
- **Files:**
  - `/app/frontend/public/pos.html` - Main POS app
  - `/app/frontend/public/receipt.html` - Standalone receipt viewer (QR target)

## Core Features

### ✅ Completed (January 13, 2026)

1. **Barcode Scanner**
   - Camera-based barcode scanning using ZXing.js
   - Manual barcode entry fallback
   - Quick add for new products

2. **Cart & Checkout**
   - Add/remove items from cart
   - Running total display
   - Cart badge showing item count

3. **Payment Flow**
   - Payment type selection modal (Nakit/Kart)
   - Payment type saved with transaction

4. **Receipt System**
   - Text-based receipt summary shown after sale
   - Optional QR code button ("QR ile Fiş Göster")
   - QR contains URL: `/receipt.html?id=TRANSACTION_ID`
   - Separate `receipt.html` page loads transaction from IndexedDB
   - Both receipt and QR screens have "Yeni Satış" button
   - Fully offline - QR URLs work without backend

5. **Daily Summary (Gün Sonu)**
   - Total sales for business day
   - Cash vs Card breakdown
   - Cash reconciliation input
   - Comparison with previous day

6. **Close Day (Günü Kapat)**
   - Saves final summary for business day
   - Locks transactions under closedDayId
   - Resets UI to fresh ₺0.00 state
   - New business date created on next sale

### Database Schema (IndexedDB v2)
- `products`: { barcode (key), name, price, stock }
- `transactions`: { id (auto), businessDate, timestamp, items, total, paymentType, closedDayId }
- `closedDays`: { id (auto), businessDate (unique), totalSales, cashTotal, cardTotal, transactionCount, closedAt }
- `settings`: { key (key), value }

## Upcoming Tasks (P1)
- **Sales List Page:** View all transactions for current business day
- **Settings Page:** Configure shop name and currency symbol

## Future/Backlog (P2)
- PWA manifest for home screen installation
- Multiple currency support

## Explicitly Postponed
- Refunds
- Inventory management
- Cloud sync
- Analytics
- User accounts

## Known Limitations
- Camera permission required for barcode scanning
- Browser IndexedDB storage limits apply
- QR code data limited by QR capacity (~2KB practical limit)

## Last Updated
January 13, 2026 - Fixed QR UX (URL-based), receipt flow, and day closing logic

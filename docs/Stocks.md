# Stocks

Look up a stock, see how it moved today (and before and after the market), and track what your positions are worth. **Needs the internet**; every use starts with a connection check.

## Find and add

On the right, type a name or symbol (`apple`, `NVDA`, `PTT.BK`) in **Find a stock**; results appear after a short pause with their exchange. Click one, then:

- leave **Shares** empty (or 0) to just **watch** it, or
- enter the **shares you hold** and the **average price you paid** to track a position. Press **Add** (or **Save** when editing).

## Two pages: Watch and My stocks

Under the heading, **Watch** and **My stocks** are two views of the same stocks (the same list, order, search and prices); `1` and `2` switch, and the one you used last is remembered. Until you choose, it opens on My stocks when you hold something and on Watch otherwise.

**Watch** is for a glance at each stock: one slim line each, with a small header over the columns: **Symbol** (and name), **Price** (the latest price), **Change** (the move against the previous close as a coloured pill, and in money), **Pre / post** (the close while it is pre-market or after-hours, otherwise the pre-market and after-hours moves), **Prev close** and **Status** (Live, Pre-market, After-hours or At close, with the time). It shows nothing about your positions. In a narrower window the Pre / post column goes first, then Prev close and Status. Drag a line or `Alt+↑` / `Alt+↓` to reorder; ✎ edits and ✕ removes, as on the other page.

**My stocks** is the page described below: the big rows, with each position's value and profit or loss, and the totals on top.

## The list (My stocks)

Each row has one big number: the **latest price**, the newest trade even before the open or after the close, with a small tag saying which (**Live**, **Pre-market**, **After-hours** or **At close**) and its time. Its coloured pill is the move against the **previous close**: green ▲ up, red ▼ down, grey when unchanged. Beside it, in small type: the **close** of the regular session (or the previous close while the market is open) and the pre-market and after-hours moves that are not the big one. For a position you also see and for a position its value and **profit or loss** with a percentage. Pre-market is compared with the previous close; after-hours with today's close. A loss is drawn in accent.

**Reorder** your list by dragging a row up or down (the order is kept), or focus a row and press `Alt+↑` / `Alt+↓`.

At the top, per currency: **Value**, **Today** (the change in money) and **Profit / loss** (over the positions that have a price you paid). ✎ edits a row, ✕ removes it (it asks).

## Online and offline

- Opening the tab, **Refresh**, searching and the update every 15 seconds (30 with more than ten stocks) while this tab is open first check the internet.
- **Offline**, a banner says so, search and refresh are switched off, and the **last saved prices** stay on screen with the time they were taken. When the connection returns (**Try again**, or Windows reports it) it carries on by itself.

Keys: `/` find, `R` refresh, `1` Watch, `2` My stocks. Home shows the value of your stocks and the day's move; [Goals](Goals.md) can watch the portfolio value; the [palette](Command-palette.md) has "Look up a stock".

## Where the prices come from

Yahoo Finance's public endpoints: free, no key, **may be delayed**, and they can change or limit requests without notice. Vermil is a viewer, not advice. If lookups stop working, that is the first thing to suspect.

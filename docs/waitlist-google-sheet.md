# Waitlist → Google Sheet setup

The waitlist form sends each signup to `/api/waitlist`, which adds a row to a Google Sheet
through a small Google Apps Script. The script's address is kept in the Vercel environment
variable `WAITLIST_SHEET_URL`, never in the code.

## One-time setup (about 5 minutes)

1. Create a Google Sheet named **CardPilot Waitlist**. In row 1 type: `Date` | `Email` | `Source`.
2. In the sheet, open **Extensions → Apps Script**. Delete what's there and paste the script below. Click **Save**.
3. Click **Deploy → New deployment**. Click the gear next to "Select type" and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, approve the Google permission prompt, and copy the **Web app URL** (it ends in `/exec`).
4. In Vercel, open the **mycardpilot-site** project → **Settings → Environment Variables**. Add:
   - Name: `WAITLIST_SHEET_URL`
   - Value: the Web app URL from step 3
   - Environments: **Production** and **Preview**
5. Redeploy (or push any change) so the site picks up the new variable.

## The script

```js
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);
    var email = String(data.email || '').trim().toLowerCase();
    if (!email || email.indexOf('@') < 1) return reply({ ok: false });

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var last = sheet.getLastRow();
    if (last > 1) {
      var existing = sheet.getRange(2, 2, last - 1, 1).getValues().flat();
      if (existing.indexOf(email) !== -1) return reply({ ok: true, duplicate: true });
    }
    sheet.appendRow([new Date(), email, String(data.source || '')]);
    return reply({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

If you ever edit the script, use **Deploy → Manage deployments → Edit → New version** so the
same URL keeps working.

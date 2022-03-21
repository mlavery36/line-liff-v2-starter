const codes = [
  // E001xxx
  // 一般通用
  { code: 'E001001', http: 401, message: { zh: '沒有權限', en: 'Permission denied.' } },
  { code: 'E001002', http: 429, message: { zh: '超過存取次數限制', en: 'Access limits exceeded.' } },
  { code: 'E001003', http: 403, message: { zh: '不允許的存取', en: 'Access not permitted.' } },
  { code: 'E001004', http: 401, message: { zh: '錯誤的登入驗證', en: 'Invalid token.' } },
  { code: 'E001005', http: 401, message: { zh: '登入已經過期', en: 'Token expired.' } },
  { code: 'E001006', http: 400, message: { zh: '無效的資料', en: 'Invalid data.' } },
  { code: 'E001007', http: 400, message: { zh: '沒有這筆資料', en: 'There is no matching data for your query.' } },
  { code: 'E001008', http: 400, message: { zh: '錯誤的檔案格式', en: 'Invalid data format.' } },
  { code: 'E001009', http: 400, message: { zh: '錯誤的日期格式', en: 'Invalid date fromat.' } },

  // E011xxx
  // 系統內部錯誤，僅顯示簡單訊息
  { code: 'E011001', http: 400, message: { zh: '系統錯誤，無效的ID', en: 'System error: invalid ID.' } },
  { code: 'E011002', http: 400, message: { zh: '系統錯誤，無效的方法', en: 'System error: invalid method.' } },
  { code: 'E011003', http: 400, message: { zh: '系統錯誤，無效的資料', en: 'System error: invalid data.' } },
  { code: 'E011004', http: 500, message: { zh: '系統錯誤 (E0011004)', en: 'System error (E0011004).' } },
  { code: 'E011005', http: 500, message: { zh: '系統錯誤 (E0011005) {{$msg}}', en: 'System error (E0011005). {{$msg}}' } },
];

// 轉換成Object，搜尋code的速度會比搜尋Array快一點
const codesMap = {};
codes.forEach((v) => {
  codesMap[v.code] = v;
});

const _public = {};

// 用code字串來取得error的物件
_public.get = (c) => {
  const found = codesMap[c];
  if (found) return found;
  return { code: '', http: 500, message: { zh: '未知的錯誤', en: 'Unexpectped error.' } };
};

// 接收整個ErrorObject，將Error.message轉換成指定的語言
_public.toMessage = (errobj, texts = [], lang = 'zh') => {
  const _texts = (Array.isArray(texts) ? texts : [texts]);
  let errmsg = '';
  const msgs = errobj.message[lang].split('{{$msg}}');
  for (let i = 0; i < msgs.length; i += 1) {
    errmsg += msgs[i];
    if (_texts[i]) errmsg += _texts[i];
  }
  return errmsg;
};

// 接收參數code，將Error.message轉換成指定的語言
_public.codeMessage = (code, texts = [], lang = 'zh') => {
  const errobj = _public.get(code);
  return _public.toMessage(errobj, texts, lang);
};

module.exports = _public;

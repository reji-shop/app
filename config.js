// ===== Firebase の接続設定（最初に1回だけ書き換えます）=====
// Firebase コンソールの「プロジェクトの設定」→「マイアプリ」に表示される
// const firebaseConfig = { ... }; の { ... } の中身を、下の { } の中身と置き換えてください。
const firebaseConfig = {
  apiKey: "AIzaSyByplI6qZUzy87aSlidXo19aZgch03KKyw",
  authDomain: "my-reji.firebaseapp.com",
  projectId: "my-reji",
  storageBucket: "my-reji.firebasestorage.app",
  messagingSenderId: "688105098403",
  appId: "1:688105098403:web:ffe6262c448ab6e5fa8316"
};

// Firestore のデータベース名。
// コンソールに「default」（かっこなし）と出ている場合は 'default'、
// 「(default)」（かっこあり）の場合は '(default)' にします。
const DB_ID = 'default';

import './App.css'

function App() {
  return (
    <div className="lp">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <p className="hero-label">Spiritual Reading</p>
          <h1 className="hero-title">叶結 <span className="hero-sub">— kanau musubi —</span></h1>
          <p className="hero-catch">あなたの魂が、本当に望んでいることを読み解く</p>
          <p className="hero-desc">四柱推命 × 数秘術 × 算命学 × パワーストーン × タイムウェーバー<br />5つの叡智を統合した、完全オーダーメイドの鑑定</p>
          <a href="#contact" className="btn-cta">鑑定を申し込む</a>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section problem">
        <div className="container">
          <h2 className="section-title">こんなお悩みありませんか？</h2>
          <div className="problem-grid">
            {[
              '自分の本質や使命が分からず、漠然とした不安がある',
              '占いを受けても「当たってる」で終わり、行動に繋がらない',
              'パワーストーンを持っているが、本当に合っているか分からない',
              '人間関係や仕事で同じパターンを繰り返してしまう',
              '直感は強いのに、それを信じて動けない',
              'スピリチュアルに興味はあるが、体系的に自分を知りたい',
            ].map((text, i) => (
              <div key={i} className="problem-card">
                <span className="problem-check">✦</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="problem-answer">その全てに、叶結は答えを持っています。</p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title">叶結とは</h2>
          <div className="about-content">
            <p>叶結（かなうむすび）は、東洋占術の叡智と最新テクノロジーを融合した統合型リーディングサービスです。</p>
            <p>四柱推命・数秘術・算命学で「あなたの本質」を多角的に読み解き、パワーストーンで「エネルギーの調整」を、タイムウェーバーで「情報場の最適化」を行います。</p>
            <p>一般的な占いとは異なり、5つの手法を組み合わせることで、あなただけの「魂の設計図」を浮かび上がらせます。</p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">鑑定メニュー</h2>
          <div className="service-grid">
            <div className="service-card featured">
              <div className="service-badge">人気No.1</div>
              <h3>総合鑑定</h3>
              <p className="service-desc">四柱推命 × 数秘術 × 算命学を統合した本格鑑定。あなたの本質・使命・才能・課題を多角的に読み解きます。</p>
              <div className="service-includes">
                <span>命式作成</span>
                <span>ライフパス分析</span>
                <span>主星・従星鑑定</span>
                <span>天中殺診断</span>
                <span>統合メッセージ</span>
              </div>
              <div className="service-price">¥30,000〜</div>
              <div className="service-time">所要時間：約90分</div>
            </div>

            <div className="service-card">
              <h3>パワーストーン選定</h3>
              <p className="service-desc">鑑定結果に基づき、あなたの龍脈と最も共鳴する守護石をお選びします。石の浄化・活性化の方法もお伝えします。</p>
              <div className="service-price">¥15,000〜</div>
              <div className="service-time">所要時間：約60分</div>
            </div>

            <div className="service-card">
              <h3>タイムウェーバーセッション</h3>
              <p className="service-desc">量子場の情報を分析し、心身のバランスを最適化します。潜在意識レベルでのブロック解除をサポートします。</p>
              <div className="service-price">¥20,000〜</div>
              <div className="service-time">所要時間：約60分</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Flow ── */}
      <section className="section flow">
        <div className="container">
          <h2 className="section-title">鑑定の流れ</h2>
          <div className="flow-steps">
            {[
              { num: '01', title: 'お申し込み', desc: 'Instagram DMまたはLINEからご連絡ください。ご希望のメニューをお伝えください。' },
              { num: '02', title: 'ヒアリング', desc: 'お名前・生年月日・生まれた時間・現在のお悩みをお聞きします。' },
              { num: '03', title: '鑑定準備', desc: '命式作成・数秘術計算・算命学分析など、事前に詳細な鑑定を行います。' },
              { num: '04', title: 'オンライン鑑定', desc: 'Zoomまたはお電話で、鑑定結果を丁寧にお伝えします。質問も自由にどうぞ。' },
              { num: '05', title: 'アフターフォロー', desc: '鑑定結果のまとめをお送りします。後日の質問にも対応いたします。' },
            ].map((step, i) => (
              <div key={i} className="flow-step">
                <div className="flow-num">{step.num}</div>
                <div className="flow-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">叶結が選ばれる理由</h2>
          <div className="feature-grid">
            {[
              { icon: '🔮', title: '5つの占術を統合', desc: '単一の占術では見えない、あなたの全体像が浮かび上がります。' },
              { icon: '💎', title: '守護石の選定つき', desc: '鑑定結果に基づいた、あなた専用のパワーストーンをご提案。' },
              { icon: '🌊', title: '完全オンライン対応', desc: '全国どこからでも受けられます。Zoom・電話・DM対応。' },
              { icon: '📜', title: '鑑定書をお渡し', desc: '鑑定結果をまとめた資料をお送り。何度でも読み返せます。' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free ── */}
      <section className="section free-section">
        <div className="container">
          <div className="free-card">
            <p className="free-label">まずは無料で体験</p>
            <h2>無料守護石鑑定</h2>
            <p>生まれた月と今のお悩みから、あなたの守護龍と守護石を鑑定します。所要時間1分。</p>
            <a href="https://ferryside1215.github.io/ryu-no-sho/" target="_blank" rel="noopener noreferrer" className="btn-free">無料で鑑定する →</a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">鑑定のお申し込み</h2>
          <p className="contact-desc">以下のいずれかからお気軽にご連絡ください。<br />「鑑定希望」とお伝えいただければ、ご案内いたします。</p>
          <div className="contact-buttons">
            <a href="https://www.instagram.com/kanau_musubi/" target="_blank" rel="noopener noreferrer" className="btn-contact instagram">
              <span>Instagram DMで申し込む</span>
              <span className="btn-id">@kanau_musubi</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-brand">叶結 — kanau musubi</div>
        <div className="footer-links">
          <a href="https://ferryside1215.github.io/ryu-no-sho/" target="_blank" rel="noopener noreferrer">龍の書（無料鑑定）</a>
          <a href="https://note.com/serene_gecko434" target="_blank" rel="noopener noreferrer">note</a>
          <a href="https://www.instagram.com/kanau_musubi/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p className="footer-copy">&copy; 2026 叶結 All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App

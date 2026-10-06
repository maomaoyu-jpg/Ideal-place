import Link from "next/link";

const truths = [
  {
    n: "01",
    en: "THE CHOSEN",
    zh: "「神」的親信",
    text: "有翼族是「天使」，是神的親信，是受祂眷顧、最接近神聖秩序的族群。",
  },
  {
    n: "02",
    en: "WHITE WINGS",
    zh: "潔白羽翼",
    text: "潔白的羽翼象徵純潔與恩典。身為神的子民，生來便承受神的恩賜。",
  },
  {
    n: "03",
    en: "SIX WINGS",
    zh: "六翼者",
    text: "羽翼越多，便能夠越接近神。六翼者尤其被相信能夠聽見祂的旨意。",
  },
  {
    n: "04",
    en: "CREATION",
    zh: "「造物主」",
    text: "世上的規則、秩序與造物皆由神所創造，一切存在皆有祂的道理。",
  },
  {
    n: "05",
    en: "GRACE",
    zh: "報恩",
    text: "天使有義務要維護、維持「祂」的秩序。",
  },
];

export default function Education() {
  return (
    <main className="education-page">
      {/* 00 / COVER */}
      <section className="education-cover">
        <div className="education-meta">
          <span>IP / WORLD / 05</span>
          <span>PUBLIC RECORD</span>
        </div>

        <div className="education-cover-number" aria-hidden="true">
          05
        </div>

        <div className="education-cover-copy">
          <span className="education-kicker">EDUCATION / RECORD</span>

          <h1>
            EDU
            <br />
            CATION
          </h1>

          <div className="education-cover-zh">
            <strong>思想教育</strong>
            <span>EDUCATION / DOCTRINE / CITIZENSHIP</span>
          </div>

          <p>
            一個人如何理解世界，
            <br />
            往往從他學會閱讀世界的方式開始。
          </p>
        </div>

        <div className="education-cover-image">
          <img
            src="/images/world/winged/IMG_1449.jpeg"
            alt="書頁與植物"
          />
        </div>

        <div className="education-cover-index">
          <span>01—06</span>
          <span>EDUCATIONAL RECORDS</span>
        </div>
      </section>

      {/* 01 / BEFORE SCHOOL */}
      <section className="education-preschool">
        <div className="education-section-head">
          <span>ARTICLE / 01</span>
          <span>BEFORE SCHOOL</span>
        </div>

        <div className="education-preschool-number" aria-hidden="true">
          01
        </div>

        <div className="education-preschool-copy">
          <span className="education-small-label">
            EARLY CHILDHOOD / FAMILY
          </span>

          <h2>
            在入學前，
            <br />
            教育已經開始。
          </h2>

          <strong>學齡前思想教育</strong>

          <p>
            有翼族的學齡前思想教育主要來自家庭與兒童讀物。孩子在正式進入學院以前，便已經透過故事、日常生活與父母的教導，開始認識神、有翼族，以及這個世界被允許如何被理解。
          </p>
        </div>

        <div className="education-angels" aria-hidden="true">
          <img
            src="/images/world/winged/IMG_1454.png"
            alt=""
            className="education-angels-image"
          />
        </div>

        <div className="education-preschool-special">
          <span>FOUR-WING CHILDREN</span>
          <strong>四翼兒童的學前照顧</strong>
          <p>
            若雙翼家庭誕生四翼兒童，將被接往特殊機構接受學前照顧。四翼屬於未來的領導階層，而雙翼家庭被認為無法提供相應的階級教養。
          </p>
          <p>
            父母通常不能拒絕。交由機構照顧四翼兒童的家庭，將獲得金錢與榮譽。
          </p>
        </div>
      </section>

      {/* 02 / ST. ISO */}
      <section className="education-academy">
        <div className="education-section-head">
          <span>ARTICLE / 02</span>
          <span>ST. ISO ACADEMY</span>
        </div>

        <div className="education-academy-title">
          <span>02</span>
          <div>
            <h2>ST. ISO<br />ACADEMY</h2>
            <strong>聖伊索學院</strong>
          </div>
        </div>

        <div className="education-academy-line" aria-hidden="true"></div>

        <div className="education-academy-copy">
          <p>
            到達入學年齡後，所有白羽有翼族兒童都會進入聖伊索學院就讀。學院教育涵蓋國小、國中與高中，是有翼族成長過程中最主要的正式教育機構。
          </p>

          <p>
            課程的大部分內容仍是一般知識。然而在知識教育之外，關於神、有翼族與世界秩序的理解，也自然的融入教材之中。
          </p>
        </div>

        <div className="education-levels">
          <span>PRIMARY</span>
          <span>JUNIOR HIGH</span>
          <span>SENIOR HIGH</span>
        </div>
      </section>

      {/* 03 / FIVE TRUTHS */}
      <section className="education-truth">
        <div className="education-section-head education-section-head-light">
          <span>ARTICLE / 03</span>
          <span>WHAT IS TAUGHT AS TRUE</span>
        </div>

        <div className="education-truth-word" aria-hidden="true">
          TRUE
        </div>

        <div className="education-truth-intro">
          <span>03</span>
          <div>
            <h2>
              不可質疑之
              <br />
              &emsp;「真實」
            </h2>
            <p>
              這些內容並不總是以獨立課程存在。它們無處不在，散布於教材、聖典、教師的說明與學院日常之中，成為學生理解世界的基本前提。
            </p>
          </div>
        </div>

        <div className="education-truth-list">
          {truths.map((item) => (
            <article className="education-truth-item" key={item.n}>
              <span className="education-truth-n">{item.n}</span>

              <div className="education-truth-name">
                <span>{item.en}</span>
                <strong>{item.zh}</strong>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 04 / THINKING */}
      <section className="education-thinking">
        <div className="education-thinking-giant" aria-hidden="true">
          04
        </div>

        <div className="education-section-head">
          <span>ARTICLE / 04</span>
          <span>THINKING / GUIDANCE</span>
        </div>

        <div className="education-thinking-title">
          <span>QUESTION / ANSWER</span>
          <h2>
            可以提問。
            <br />
            &emsp;在框架裡。
          </h2>
          <strong>思考與引導</strong>
        </div>

        <div className="education-thinking-copy">
          <p>
            聖伊索並不禁止學生思考。學生可以詢問教義的意義、討論其中的內容，也可以提出自己無法理解的地方。
          </p>

          <p>
            但禁止學生嘗試否定聖典的真偽，也不可質疑神本身。較輕微的情況通常由老師私下談話，或由學校官員進行個別輔導與「闢謠」。
          </p>

          <p>
            若學生屢次抗拒、頂撞教義，或進一步煽動他人反抗，相關行為便會留下正式紀錄。
          </p>
        </div>

        <div className="education-teacher">
          <span>THE TEACHER</span>
          <strong>老師也是教育的一部分。</strong>
          <p>
            老師是學習階段非常重要的領導者，因此必須由思想「正確」的四翼擔任。有些老師會更積極鼓勵學生思考，但這份鼓勵仍然存在界線。
          </p>
          <p>
            若教師越過被允許的界線，將遭到開除與懲處。
          </p>
        </div>
      </section>

      {/* 05 / BLACK WINGS */}
      <section className="education-blackwing">
        <div className="education-blackwing-number" aria-hidden="true">
          05
        </div>

        <div className="education-section-head education-section-head-dark">
          <span>ARTICLE / 05</span>
          <span>BLACK WINGS / CURRICULUM</span>
        </div>

        <div className="education-blackwing-title">
          <span>THE ENEMY IN THE TEXTBOOK</span>
          <h2>
            BLACK
            <br />
            WINGS
          </h2>
          <strong>教材中的黑羽</strong>
        </div>

        <div className="education-blackwing-bird">
          <img
            src="/images/world/winged/IMG_1452.jpeg"
            alt="黑色鳥類影像"
          />
        </div>

        <div className="education-blackwing-photo">
          <img
            src="/images/world/winged/IMG_1453.jpeg"
            alt=""
          />
          <span>ARCHIVAL MATERIAL / NEGATIVE EXAMPLE</span>
        </div>

        <div className="education-blackwing-copy">
          <p>
            黑羽並不是一個被隱瞞的族群。相反地，他們直接存在於教材與聖典之中——以背離者、叛徒與墮落之族的形象被介紹。
          </p>

          <p>
            教材不會詳述黑羽真正的歷史，也不會使用黑羽的真實照片。學生所接觸的，多半是黑羽激進行動的影像與紀錄，作為反面教材。
          </p>
        </div>

        <blockquote className="education-blackwing-quote">
          <span>DOCTRINAL STATEMENT</span>
          <p>「我族有義務肅清他們。」</p>
        </blockquote>

        <p className="education-blackwing-note">
          「黑羽是背棄同胞、背叛神，執迷不悟且不知悔改的存在。作為神的子民，替祂建立秩序是必要的。為此，烽火重燃也在所不惜。」
        </p>
      </section>

      {/* 06 / STUDENT RECORD */}
      <section className="education-record">
        <div className="education-section-head">
          <span>ARTICLE / 06</span>
          <span>STUDENT RECORD</span>
        </div>

        <div className="education-record-axis" aria-hidden="true">
          <span></span>
        </div>

        <div className="education-record-title">
          <span>06</span>
          <h2>
            EVERY
            <br />
            QUESTION
            <br />
            LEAVES
            <br />
            A RECORD.
          </h2>
          <strong>學生紀錄</strong>
        </div>

        <div className="education-record-copy">
          <p>
            學校中的談話、輔導與懲處會留下相關紀錄。部分違反教義、持續抗拒或具有煽動性質的行為，會成為學生紀錄中的污點。
          </p>

          <p>
            一旦留下此類紀錄，學生將被列入後續矯正的範圍。
          </p>
        </div>

        <div className="education-record-file">
          <span>STATUS</span>
          <strong>MARKED RECORD</strong>
          <span>TRANSFER / PENDING</span>
        </div>

        <Link href="/world/tree" className="education-tree-link">
          <span>NEXT RECORD</span>
          <strong>善惡樹計畫</strong>
          <span>TREE OF KNOWLEDGE →</span>
        </Link>
      </section>

      {/* IDEAL GRADUATE */}
      <section className="education-graduate">
        <span className="education-graduate-label">
          EXPECTED OUTCOME / IDEAL CITIZEN
        </span>

        <h2>
          LIVE WITHIN
          <br />
          THE ORDER.
        </h2>

        <div>
          <strong>理想的畢業生，理想的公民。</strong>
          <p>
            在規則之下安居樂業，
            <br />
            為社會奉獻，
            <br />
            為神奉獻。
          </p>
        </div>
      </section>

      <nav className="education-nav">
        <Link href="/world/faith">← 04 / FAITH</Link>
        <Link href="/world/tree">06 / TREE OF KNOWLEDGE →</Link>
      </nav>
    </main>
  );
}

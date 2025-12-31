// app/page.tsx
const FEATURES = [
  {
    title: "最短で導入",
    desc: "必要な情報だけに絞った設計で、すぐに使い始められます。",
  },
  {
    title: "シンプルな運用",
    desc: "管理が複雑にならないよう、最小構成で設計しています。",
  },
  {
    title: "スマホ最適化",
    desc: "スマホ優先の設計で、どの端末でも読みやすいレイアウトです。",
  },
];

const USE_CASES = [
  "新規サービスの告知ページとして",
  "キャンペーンやイベントの申し込み導線として",
  "採用・説明会などの情報集約ページとして",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-tight">Sample Service</div>
          <a
            href="#contact"
            className="rounded-full border px-4 py-2 text-sm hover:bg-zinc-50"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      {/* Hero / First View */}
      <main className="mx-auto max-w-5xl px-4">
        <section className="py-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs">
                近日公開（ダミーLP）
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                忙しい人のための、
                <span className="inline-block whitespace-nowrap">“迷わない” サービス紹介ページ</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                伝えたいことを整理し、ユーザーが一目で理解できる構成にまとめます。
                API連携なしでも成立する、最小構成のランディングページです。
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  お問い合わせ
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                >
                  特徴を見る
                </a>
              </div>

              <div className="mt-6 text-xs text-zinc-500">
                ※ デザイン／文言はサンプルです。依頼内容に合わせて差し替え可能。
              </div>
            </div>

            {/* Visual card (no images needed) */}
            <div className="rounded-2xl border bg-zinc-50 p-6">
              <div className="space-y-4">
                <div className="h-3 w-24 rounded bg-zinc-200" />
                <div className="h-8 w-full rounded bg-white" />
                <div className="h-8 w-5/6 rounded bg-white" />
                <div className="h-8 w-4/6 rounded bg-white" />
                <div className="pt-2">
                  <div className="h-10 w-40 rounded-xl bg-zinc-900" />
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                画像がなくても成立する“それっぽい”見た目を作っています。
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight">サービスの特徴</h2>
          <p className="mt-2 text-zinc-600">
            3点程度に絞って、読まれやすい構成にします。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border p-5">
                <div className="text-sm font-semibold">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight">利用シーン</h2>
          <p className="mt-2 text-zinc-600">
            文章だけでもOK。目的が想像できる例を並べます。
          </p>

          <ul className="mt-6 space-y-3">
            {USE_CASES.map((t) => (
              <li
                key={t}
                className="rounded-2xl border bg-white p-4 text-sm text-zinc-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact / Coming soon */}
        <section id="contact" className="py-12">
          <div className="rounded-2xl border bg-zinc-50 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              お問い合わせ / 近日公開
            </h2>
            <p className="mt-2 text-zinc-600">
              本実装ではフォーム送信やAPI連携も可能ですが、今回はダミー表示で要件を満たします。
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border bg-white p-4 text-sm">
                <div className="text-xs text-zinc-500">メール</div>
                <div className="mt-1 font-medium">contact@example.com</div>
              </div>
              <div className="rounded-xl border bg-white p-4 text-sm">
                <div className="text-xs text-zinc-500">対応時間</div>
                <div className="mt-1 font-medium">平日 10:00–18:00</div>
              </div>
              <div className="rounded-xl border bg-white p-4 text-sm">
                <div className="text-xs text-zinc-500">ステータス</div>
                <div className="mt-1 font-medium">近日公開</div>
              </div>
            </div>

            <div className="mt-6 text-xs text-zinc-500">
              ※ 依頼に合わせて「お問い合わせのみ」「近日公開のみ」に調整できます。
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Sample Service. All rights reserved.
        </footer>
      </main>
    </div>
  );
}


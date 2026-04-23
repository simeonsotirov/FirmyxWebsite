'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function TermsContent() {
  const { lang } = useLanguage();

  if (lang === 'bg') {
    return (
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð·Ð° Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ðµ</h1>
        <p className="text-sm text-gray-400 mb-12">ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð° Ð°ÐºÑ‚ÑƒÐ°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ: Ð°Ð¿Ñ€Ð¸Ð» 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. ÐŸÑ€Ð¸ÐµÐ¼Ð°Ð½Ðµ Ð½Ð° ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ‚Ð°</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Ð¡ Ð´Ð¾ÑÑ‚ÑŠÐ¿Ð° Ð´Ð¾ Ð¸Ð»Ð¸ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð° Firmyx (&ldquo;Ð£ÑÐ»ÑƒÐ³Ð°Ñ‚Ð°&rdquo;), Ð²Ð¸Ðµ Ð¿Ð¾Ñ‚Ð²ÑŠÑ€Ð¶Ð´Ð°Ð²Ð°Ñ‚Ðµ, Ñ‡Ðµ ÑÑ‚Ðµ
            Ð¿Ñ€Ð¾Ñ‡ÐµÐ»Ð¸, Ñ€Ð°Ð·Ð±Ñ€Ð°Ð»Ð¸ Ð¸ ÑÐµ ÑÑŠÐ³Ð»Ð°ÑÑÐ²Ð°Ñ‚Ðµ Ñ Ð½Ð°ÑÑ‚Ð¾ÑÑ‰Ð¸Ñ‚Ðµ Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð·Ð° Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ðµ (&ldquo;Ð£ÑÐ»Ð¾Ð²Ð¸Ñ&rdquo;) Ð¸ ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ°Ñ‚Ð°
            Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚. ÐÐºÐ¾ Ð½Ðµ ÑÑ‚Ðµ ÑÑŠÐ³Ð»Ð°ÑÐ½Ð¸, Ð½ÑÐ¼Ð°Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¾ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚Ðµ Ð£ÑÐ»ÑƒÐ³Ð°Ñ‚Ð°.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð¢Ñ€ÑÐ±Ð²Ð° Ð´Ð° ÑÑ‚Ðµ Ð½Ð°Ð²ÑŠÑ€ÑˆÐ¸Ð»Ð¸ Ð¿Ð¾Ð½Ðµ 18 Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¸Ð»Ð¸ Ð´Ð° Ð¸Ð¼Ð°Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð½Ð¾Ñ‚Ð¾ Ð¿Ñ€Ð°Ð²Ð¾Ð¼Ð¾Ñ‰Ð¸Ðµ Ð´Ð° ÑÐºÐ»ÑŽÑ‡Ð²Ð°Ñ‚Ðµ Ð¾Ð±Ð²ÑŠÑ€Ð·Ð²Ð°Ñ‰Ð¸ Ð´Ð¾Ð³Ð¾Ð²Ð¾Ñ€Ð¸ Ð¾Ñ‚ Ð¸Ð¼ÐµÑ‚Ð¾ Ð½Ð° ÑŽÑ€Ð¸Ð´Ð¸Ñ‡ÐµÑÐºÐ¾ Ð»Ð¸Ñ†Ðµ.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ Ð½Ð° ÑƒÑÐ»ÑƒÐ³Ð°Ñ‚Ð°</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Firmyx Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ñ AI-Ð±Ð°Ð·Ð¸Ñ€Ð°Ð½ Ð°Ð½Ð°Ð»Ð¸Ð· Ð½Ð° Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð²Ð¾Ñ‚Ð¾ ÑÑŠÑÑ‚Ð¾ÑÐ½Ð¸Ðµ Ð½Ð° Ð±Ð¸Ð·Ð½ÐµÑÐ¸. Ð£ÑÐ»ÑƒÐ³Ð°Ñ‚Ð° Ð²ÐºÐ»ÑŽÑ‡Ð²Ð°,
            Ð½Ð¾ Ð½Ðµ ÑÐµ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡Ð°Ð²Ð° Ð´Ð¾: Ð¾Ñ†ÐµÐ½ÐºÐ¸ Ð·Ð° Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð²Ð¾ Ð·Ð´Ñ€Ð°Ð²Ðµ, Ð¾Ñ†ÐµÐ½ÐºÐ¸ Ð½Ð° Ñ€Ð¸ÑÐºÐ°, Ð¸Ð½Ð´Ð¸ÐºÐ°Ñ‚Ð¾Ñ€Ð¸ Ð·Ð°
            Ð²ÐµÑ€Ð¾ÑÑ‚Ð½Ð¾ÑÑ‚ Ð¾Ñ‚ Ð½ÐµÐ¿Ð»Ð°Ñ‚ÐµÐ¶Ð¾ÑÐ¿Ð¾ÑÐ¾Ð±Ð½Ð¾ÑÑ‚, Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸ Ð½Ð° Ñ‚ÐµÐ½Ð´ÐµÐ½Ñ†Ð¸Ð¸ Ð¸ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡Ð½Ð¾ Ð³ÐµÐ½ÐµÑ€Ð¸Ñ€Ð°Ð½Ð¸ Ð¿Ñ€ÐµÐ¿Ð¾Ñ€ÑŠÐºÐ¸.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð’ÑÐ¸Ñ‡ÐºÐ¸ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸ ÑÐ° Ñ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸Ð²ÐµÐ½ Ñ…Ð°Ñ€Ð°ÐºÑ‚ÐµÑ€ Ð¸ Ð½Ðµ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÐ²Ð°Ñ‚ Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð², Ð¿Ñ€Ð°Ð²ÐµÐ½, Ð´Ð°Ð½ÑŠÑ‡ÐµÐ½ Ð¸Ð»Ð¸ ÑÑ‡ÐµÑ‚Ð¾Ð²Ð¾Ð´ÐµÐ½ ÑÑŠÐ²ÐµÑ‚.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ Ð¸ Ð°ÐºÐ°ÑƒÐ½Ñ‚</h2>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð’Ð¸Ðµ Ð½Ð¾ÑÐ¸Ñ‚Ðµ Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€Ð½Ð¾ÑÑ‚ Ð·Ð° ÑÐ¸Ð³ÑƒÑ€Ð½Ð¾ÑÑ‚Ñ‚Ð° Ð½Ð° Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð° Ð¸ Ð¿Ð°Ñ€Ð¾Ð»Ð°Ñ‚Ð° ÑÐ¸.</li>
            <li>ÐÐµÐ·Ð°Ð±Ð°Ð²Ð½Ð¾ Ð½Ð¸ ÑƒÐ²ÐµÐ´Ð¾Ð¼ÑÐ²Ð°Ð¹Ñ‚Ðµ Ð¿Ñ€Ð¸ Ð½ÐµÐ¾Ñ‚Ð¾Ñ€Ð¸Ð·Ð¸Ñ€Ð°Ð½ Ð´Ð¾ÑÑ‚ÑŠÐ¿ Ð´Ð¾ Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð° Ð²Ð¸.</li>
            <li>ÐÐºÐ°ÑƒÐ½Ñ‚ÑŠÑ‚ Ð½Ðµ Ð¼Ð¾Ð¶Ðµ Ð´Ð° ÑÐµ Ð¿Ñ€ÐµÑ…Ð²ÑŠÑ€Ð»Ñ Ð½Ð° Ñ‚Ñ€ÐµÑ‚Ð¸ Ð»Ð¸Ñ†Ð°.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Ð‘ÐµÐ·Ð¿Ð»Ð°Ñ‚ÐµÐ½ Ð¿Ð»Ð°Ð½ Ð¸ Ð¿Ð»Ð°Ñ‰Ð°Ð½Ð¸Ñ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð‘ÐµÐ·Ð¿Ð»Ð°Ñ‚Ð½Ð¸ÑÑ‚ Ð¿Ð»Ð°Ð½ Ð¾ÑÐ¸Ð³ÑƒÑ€ÑÐ²Ð° Ð´Ð¾ÑÑ‚ÑŠÐ¿ Ð´Ð¾ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¸ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð±ÐµÐ· ÐºÑ€ÐµÐ´Ð¸Ñ‚Ð½Ð° ÐºÐ°Ñ€Ñ‚Ð°. ÐŸÐ»Ð°Ñ‚ÐµÐ½Ð¸Ñ‚Ðµ Ð¿Ð»Ð°Ð½Ð¾Ð²Ðµ ÑÐµ Ñ„Ð°ÐºÑ‚ÑƒÑ€Ð¸Ñ€Ð°Ñ‚ Ð¼ÐµÑÐµÑ‡Ð½Ð¾ Ð¸Ð»Ð¸ Ð³Ð¾Ð´Ð¸ÑˆÐ½Ð¾. ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° ÑÐµ Ð¾Ñ‚ÐºÐ°Ð¶ÐµÑ‚Ðµ Ð¿Ð¾ Ð²ÑÑÐºÐ¾ Ð²Ñ€ÐµÐ¼Ðµ â€” Ð±ÐµÐ· Ñ‚Ð°ÐºÑÐ¸ Ð·Ð° Ð¿Ñ€ÐµÐºÑ€Ð°Ñ‚ÑÐ²Ð°Ð½Ðµ.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Ð”Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ð° ÑƒÐ¿Ð¾Ñ‚Ñ€ÐµÐ±Ð°</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð—Ð°Ð±Ñ€Ð°Ð½ÐµÐ½Ð¾ Ðµ:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ðµ Ð½Ð° ÑƒÑÐ»ÑƒÐ³Ð°Ñ‚Ð° Ð·Ð° Ð½ÐµÐ·Ð°ÐºÐ¾Ð½Ð½Ð¸ Ñ†ÐµÐ»Ð¸.</li>
            <li>ÐžÐ¿Ð¸Ñ‚Ð¸ Ð·Ð° Ð·Ð°Ð¾Ð±Ð¸ÐºÐ°Ð»ÑÐ½Ðµ Ð½Ð° Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸ÑÑ‚Ð° Ð½Ð° ÑÐ¸ÑÑ‚ÐµÐ¼Ð°Ñ‚Ð°.</li>
            <li>Ð¡Ð¿Ð¾Ð´ÐµÐ»ÑÐ½Ðµ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð±Ð° Ð½Ð° Ð´Ð¾ÑÑ‚ÑŠÐ¿ Ð´Ð¾ Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð° Ð²Ð¸.</li>
            <li>ÐšÐ°Ñ‡Ð²Ð°Ð½Ðµ Ð½Ð° ÑƒÐ¼Ð¸ÑˆÐ»ÐµÐ½Ð¾ Ð½ÐµÐ²ÑÑ€Ð½Ð° Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð²Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Ð”Ð°Ð½Ð½Ð¸ Ð¸ Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚Ð²Ð°Ð¼Ðµ Ð»Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ Ð²Ð¸ Ð´Ð°Ð½Ð½Ð¸ ÑÑŠÐ³Ð»Ð°ÑÐ½Ð¾ Ð½Ð°ÑˆÐ°Ñ‚Ð°{' '}
            <a href="/privacy" className="text-blue-400 hover:underline">ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚</a>.
            Ð’Ð°ÑˆÐ¸Ñ‚Ðµ Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð²Ð¸ Ð´Ð°Ð½Ð½Ð¸ ÑÐµ ÐºÑ€Ð¸Ð¿Ñ‚Ð¸Ñ€Ð°Ñ‚ Ñ AES-256 Ð¸ Ð½Ðµ ÑÐµ ÑÐ¿Ð¾Ð´ÐµÐ»ÑÑ‚ Ñ Ñ‚Ñ€ÐµÑ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Ð˜Ð½Ñ‚ÐµÐ»ÐµÐºÑ‚ÑƒÐ°Ð»Ð½Ð° ÑÐ¾Ð±ÑÑ‚Ð²ÐµÐ½Ð¾ÑÑ‚</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð’ÑÐ¸Ñ‡ÐºÐ¸ Ð¿Ñ€Ð°Ð²Ð° Ð²ÑŠÑ€Ñ…Ñƒ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð°, Ð°Ð»Ð³Ð¾Ñ€Ð¸Ñ‚Ð¼Ð¸Ñ‚Ðµ Ð¸ Ð´Ð¸Ð·Ð°Ð¹Ð½Ð° ÑÐ° ÑÐ¾Ð±ÑÑ‚Ð²ÐµÐ½Ð¾ÑÑ‚ Ð½Ð° Firmyx. ÐŸÐ¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ð·Ð°Ð¿Ð°Ð·Ð²Ð°Ñ‚ Ð¿ÑŠÐ»Ð½Ð¸Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð° Ð²ÑŠÑ€Ñ…Ñƒ Ð´Ð°Ð½Ð½Ð¸Ñ‚Ðµ, ÐºÐ¾Ð¸Ñ‚Ð¾ ÐºÐ°Ñ‡Ð²Ð°Ñ‚.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. ÐžÑ‚ÐºÐ°Ð· Ð¾Ñ‚ Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€Ð½Ð¾ÑÑ‚</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Firmyx Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ñ Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð² Ð°Ð½Ð°Ð»Ð¸Ð· Ñ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¾Ð½Ð½Ð° Ñ†ÐµÐ». ÐŸÐ»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð° Ð½Ðµ Ðµ Ð»Ð¸Ñ†ÐµÐ½Ð·Ð¸Ñ€Ð°Ð½ Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð² ÑÑŠÐ²ÐµÑ‚Ð½Ð¸Ðº. Ð¤Ð¸Ñ€Ð¼Ð°Ñ‚Ð° Ð½Ðµ Ð½Ð¾ÑÐ¸ Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€Ð½Ð¾ÑÑ‚ Ð·Ð° Ð±Ð¸Ð·Ð½ÐµÑ Ñ€ÐµÑˆÐµÐ½Ð¸Ñ, Ð²Ð·ÐµÑ‚Ð¸ Ð²ÑŠÐ· Ð¾ÑÐ½Ð¾Ð²Ð° Ð½Ð° Ð´Ð°Ð½Ð½Ð¸Ñ‚Ðµ Ð½Ð° Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð°.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. ÐžÐ³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ðµ Ð½Ð° Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€Ð½Ð¾ÑÑ‚Ñ‚Ð°</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð’ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð°Ñ‚Ð° ÑÑ‚ÐµÐ¿ÐµÐ½, Ð¿Ð¾Ð·Ð²Ð¾Ð»ÐµÐ½Ð° Ð¾Ñ‚ Ð·Ð°ÐºÐ¾Ð½Ð°, Firmyx Ð½Ðµ Ð½Ð¾ÑÐ¸ Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€Ð½Ð¾ÑÑ‚ Ð·Ð° ÐºÐ¾ÑÐ²ÐµÐ½Ð¸, ÑÐ»ÑƒÑ‡Ð°Ð¹Ð½Ð¸ Ð¸Ð»Ð¸ Ð¿Ð¾ÑÐ»ÐµÐ´Ð²Ð°Ñ‰Ð¸ Ð²Ñ€ÐµÐ´Ð¸ Ð¾Ñ‚ ÑƒÐ¿Ð¾Ñ‚Ñ€ÐµÐ±Ð°Ñ‚Ð° Ð½Ð° ÑƒÑÐ»ÑƒÐ³Ð°Ñ‚Ð°.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. ÐŸÑ€ÐµÐºÑ€Ð°Ñ‚ÑÐ²Ð°Ð½Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð¿Ñ€ÐµÐºÑ€Ð°Ñ‚Ð¸Ñ‚Ðµ Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð° ÑÐ¸ Ð¿Ð¾ Ð²ÑÑÐºÐ¾ Ð²Ñ€ÐµÐ¼Ðµ. Firmyx ÑÐ¸ Ð·Ð°Ð¿Ð°Ð·Ð²Ð° Ð¿Ñ€Ð°Ð²Ð¾Ñ‚Ð¾ Ð´Ð° Ð¿Ñ€ÐµÐºÑ€Ð°Ñ‚Ð¸ Ð´Ð¾ÑÑ‚ÑŠÐ¿ Ð¿Ñ€Ð¸ Ð½Ð°Ñ€ÑƒÑˆÐµÐ½Ð¸Ðµ Ð½Ð° Ð½Ð°ÑÑ‚Ð¾ÑÑ‰Ð¸Ñ‚Ðµ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. ÐŸÑ€Ð¾Ð¼ÐµÐ½Ð¸ Ð² ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ‚Ð°</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð£Ð²ÐµÐ´Ð¾Ð¼ÑÐ²Ð°Ð¼Ðµ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ð¿Ð¾ Ð¸Ð¼ÐµÐ¹Ð» Ð¿Ñ€Ð¸ ÑÑŠÑ‰ÐµÑÑ‚Ð²ÐµÐ½Ð¸ Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸. ÐŸÑ€Ð¾Ð´ÑŠÐ»Ð¶ÐµÐ½Ð°Ñ‚Ð° ÑƒÐ¿Ð¾Ñ‚Ñ€ÐµÐ±Ð° Ð¾Ð·Ð½Ð°Ñ‡Ð°Ð²Ð° Ð¿Ñ€Ð¸ÐµÐ¼Ð°Ð½Ðµ Ð½Ð° Ð½Ð¾Ð²Ð¸Ñ‚Ðµ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">12. ÐŸÑ€Ð¸Ð»Ð¾Ð¶Ð¸Ð¼Ð¾ Ð¿Ñ€Ð°Ð²Ð¾</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">ÐÐ°ÑÑ‚Ð¾ÑÑ‰Ð¸Ñ‚Ðµ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ ÑÐµ ÑƒÑ€ÐµÐ¶Ð´Ð°Ñ‚ Ð¾Ñ‚ Ð·Ð°ÐºÐ¾Ð½Ð¾Ð´Ð°Ñ‚ÐµÐ»ÑÑ‚Ð²Ð¾Ñ‚Ð¾ Ð½Ð° Ð ÐµÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ Ð¸ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶Ð¸Ð¼Ð¾Ñ‚Ð¾ Ð¿Ñ€Ð°Ð²Ð¾ Ð½Ð° Ð•Ð²Ñ€Ð¾Ð¿ÐµÐ¹ÑÐºÐ¸Ñ ÑÑŠÑŽÐ·.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">13. ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            ÐŸÑ€Ð¸ Ð²ÑŠÐ¿Ñ€Ð¾ÑÐ¸:{' '}
            <a href="mailto:atanas.k.kanev@gmail.com" className="text-blue-400 hover:underline">atanas.k.kanev@gmail.com</a>
          </p>
        </section>
      </article>
    );
  }

  return (
    <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: April 2026</p>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          By accessing or using the Firmyx platform (&ldquo;Service&rdquo;), you confirm that you have read,
          understood, and agree to these Terms of Service (&ldquo;Terms&rdquo;) and our Privacy Policy.
          If you do not agree, you may not use the Service.
        </p>
        <p className="text-base text-gray-300 leading-relaxed mb-6">You must be at least 18 years old or have the legal authority to enter into binding contracts on behalf of a legal entity.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Description of Service</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Firmyx provides AI-powered financial analysis for businesses, including but not limited to:
          financial health scores, risk assessments, insolvency probability indicators, trend analysis,
          and automated recommendations.
        </p>
        <p className="text-base text-gray-300 leading-relaxed mb-6">All results are informational and do not constitute financial, legal, tax, or accounting advice.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Account Registration</h2>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>You are responsible for maintaining the security of your account and password.</li>
          <li>Notify us immediately of any unauthorized access to your account.</li>
          <li>Accounts may not be transferred to third parties.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Free Plan &amp; Payments</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">The free plan provides access to core features with no credit card required. Paid plans are billed monthly or annually. You may cancel at any time with no cancellation fees.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Acceptable Use</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">You may not:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Use the Service for any unlawful purpose.</li>
          <li>Attempt to circumvent or bypass system limitations.</li>
          <li>Share or sell access to your account.</li>
          <li>Upload intentionally false or misleading financial information.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Data &amp; Privacy</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          We process your personal data in accordance with our{' '}
          <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
          Your financial data is encrypted with AES-256 and is never shared with third parties.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Intellectual Property</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">All rights to the platform, algorithms, and design belong to Firmyx. Users retain full rights over the data they upload.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Disclaimer</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">Firmyx provides financial analysis for informational purposes only. The platform is not a licensed financial advisor and is not a substitute for professional accounting or legal counsel. Firmyx is not liable for business decisions made based on platform data.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Limitation of Liability</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">To the maximum extent permitted by law, Firmyx is not liable for indirect, incidental, or consequential damages arising from use of the Service.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Termination</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">You may close your account at any time. Firmyx reserves the right to suspend access for violations of these Terms.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Changes to Terms</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">We will notify users by email of significant changes. Continued use after changes constitutes acceptance of the new terms.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">12. Governing Law</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">These Terms are governed by the laws of the Republic of Bulgaria and applicable European Union law.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">13. Contact</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Questions:{' '}
          <a href="mailto:atanas.k.kanev@gmail.com" className="text-blue-400 hover:underline">atanas.k.kanev@gmail.com</a>
        </p>
      </section>
    </article>
  );
}
'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function CookiesContent() {
  const { lang } = useLanguage();

  if (lang === 'bg') {
    return (
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</h1>
        <p className="text-sm text-gray-400 mb-12">ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð° Ð°ÐºÑ‚ÑƒÐ°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ: Ð°Ð¿Ñ€Ð¸Ð» 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. ÐšÐ°ÐºÐ²Ð¾ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÐ²Ð°Ñ‚ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ (&ldquo;cookies&rdquo;) ÑÐ° Ð¼Ð°Ð»ÐºÐ¸ Ñ‚ÐµÐºÑÑ‚Ð¾Ð²Ð¸ Ñ„Ð°Ð¹Ð»Ð¾Ð²Ðµ, ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ð½Ð¸ Ð½Ð° Ð²Ð°ÑˆÐµÑ‚Ð¾ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾
            Ð¿Ñ€Ð¸ Ð¿Ð¾ÑÐµÑ‰ÐµÐ½Ð¸Ðµ Ð½Ð° ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚. Ð¢Ðµ Ð¾ÑÐ¸Ð³ÑƒÑ€ÑÐ²Ð°Ñ‚ Ð½Ð¾Ñ€Ð¼Ð°Ð»Ð½Ð¾Ñ‚Ð¾ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð¸Ñ€Ð°Ð½Ðµ Ð½Ð° ÑÐ°Ð¹Ñ‚Ð¾Ð²ÐµÑ‚Ðµ Ð¸ Ð¿Ð¾Ð´Ð¾Ð±Ñ€ÑÐ²Ð°Ñ‚
            Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»ÑÐºÐ¾Ñ‚Ð¾ Ð¸Ð·Ð¶Ð¸Ð²ÑÐ²Ð°Ð½Ðµ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. ÐšÐ°Ðº Firmyx Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Firmyx Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð° ÑÐ°Ð¼Ð¾ <strong className="text-white">ÑÑ‚Ñ€Ð¸ÐºÑ‚Ð½Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</strong> Ð·Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð°.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            ÐÐ¸Ðµ <strong className="text-white">Ð½Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ</strong>:
          </p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð°Ð½Ð°Ð»Ð¸Ñ‚Ð¸Ñ‡Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</li>
            <li>Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð¾Ð²Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</li>
            <li>Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ Ð¾Ñ‚ Ñ‚Ñ€ÐµÑ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Ð’Ð¸Ð´Ð¾Ð²Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</h2>
          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Ð¡Ñ‚Ñ€Ð¸ÐºÑ‚Ð½Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</h3>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐ° Ð¾Ñ‚ ÑÑŠÑ‰ÐµÑÑ‚Ð²ÐµÐ½Ð¾ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð·Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚Ð° Ð½Ð° Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð°. Ð¢Ðµ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð·Ð°:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>ÑƒÐ´Ð¾ÑÑ‚Ð¾Ð²ÐµÑ€ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»Ñ (Ð»Ð¾Ð³Ð¸Ð½)</li>
            <li>Ð¿Ð¾Ð´Ð´ÑŠÑ€Ð¶Ð°Ð½Ðµ Ð½Ð° Ð°ÐºÑ‚Ð¸Ð²Ð½Ð° ÑÐµÑÐ¸Ñ</li>
            <li>Ð·Ð°Ñ‰Ð¸Ñ‚Ð° Ð½Ð° Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð° Ð¸ ÑÐ¸Ð³ÑƒÑ€Ð½Ð¾ÑÑ‚Ñ‚Ð°</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð¢Ðµ Ð½Ðµ ÑÑŠÐ±Ð¸Ñ€Ð°Ñ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð·Ð° Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð¾Ð²Ð¸ Ñ†ÐµÐ»Ð¸.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Ð¡Ñ€Ð¾Ðº Ð½Ð° ÑÑŠÑ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ð¸Ñ‚Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐ° <strong className="text-white">ÑÐµÑÐ¸Ð¹Ð½Ð¸</strong>, ÐºÐ¾ÐµÑ‚Ð¾ Ð¾Ð·Ð½Ð°Ñ‡Ð°Ð²Ð°:
          </p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ñ‚ ÑÐµ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡Ð½Ð¾ Ð¿Ñ€Ð¸ Ð·Ð°Ñ‚Ð²Ð°Ñ€ÑÐ½Ðµ Ð½Ð° Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€Ð°</li>
            <li>Ð½Ðµ ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ð´ÑŠÐ»Ð³Ð¾ÑÑ€Ð¾Ñ‡Ð½Ð¾ Ð½Ð° ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾Ñ‚Ð¾ Ð²Ð¸</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Ð£Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð½Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Ð¢ÑŠÐ¹ ÐºÐ°Ñ‚Ð¾ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ ÑÐ°Ð¼Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, Ð½Ðµ ÑÐµ Ð¸Ð·Ð¸ÑÐºÐ²Ð° Ð¸Ð·Ñ€Ð¸Ñ‡Ð½Ð¾ ÑÑŠÐ³Ð»Ð°ÑÐ¸Ðµ ÑÑŠÐ³Ð»Ð°ÑÐ½Ð¾
            Ð¿Ñ€Ð¸Ð»Ð¾Ð¶Ð¸Ð¼Ð¾Ñ‚Ð¾ Ð·Ð°ÐºÐ¾Ð½Ð¾Ð´Ð°Ñ‚ÐµÐ»ÑÑ‚Ð²Ð¾. Ð’ÑŠÐ¿Ñ€ÐµÐºÐ¸ Ñ‚Ð¾Ð²Ð° Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð³Ð¸ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»Ð¸Ñ€Ð°Ñ‚Ðµ Ñ‡Ñ€ÐµÐ· Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸Ñ‚Ðµ Ð½Ð° Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€Ð°.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð˜Ð¼Ð°Ð¹Ñ‚Ðµ Ð¿Ñ€ÐµÐ´Ð²Ð¸Ð´, Ñ‡Ðµ Ð´ÐµÐ°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð¸Ð¼ Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð¿Ð¾Ð¿Ñ€ÐµÑ‡Ð¸ Ð½Ð° Ð²Ð»Ð¸Ð·Ð°Ð½ÐµÑ‚Ð¾ Ð² Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð° Ð²Ð¸.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð½Ð° Ñ‚Ñ€ÐµÑ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Firmyx Ð½Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð½Ð° Ñ‚Ñ€ÐµÑ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸. ÐŸÑ€Ð¸ ÐµÐ²ÐµÐ½Ñ‚ÑƒÐ°Ð»Ð½Ð¾Ñ‚Ð¾ Ð¸Ð¼ Ð²ÑŠÐ²ÐµÐ¶Ð´Ð°Ð½Ðµ Ð² Ð±ÑŠÐ´ÐµÑ‰Ðµ Ñ‰Ðµ
            Ð°ÐºÑ‚ÑƒÐ°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð¼Ðµ Ñ‚Ð°Ð·Ð¸ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð¸ Ñ‰Ðµ Ð¿Ð¾Ð¸ÑÐºÐ°Ð¼Ðµ Ð²Ð°ÑˆÐµÑ‚Ð¾ ÑÑŠÐ³Ð»Ð°ÑÐ¸Ðµ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. ÐŸÑ€Ð¾Ð¼ÐµÐ½Ð¸ Ð² Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ°Ñ‚Ð°</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            ÐœÐ¾Ð¶ÐµÐ¼ Ð´Ð° Ð°ÐºÑ‚ÑƒÐ°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð¼Ðµ Ñ‚Ð°Ð·Ð¸ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð¸Ñ‡Ð½Ð¾. ÐŸÑ€Ð¸ ÑÑŠÑ‰ÐµÑÑ‚Ð²ÐµÐ½Ð¸ Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸ Ñ‰Ðµ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð¸Ð¼
            Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ñ‡Ñ€ÐµÐ· Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð° Ð¸Ð»Ð¸ Ð¿Ð¾ Ð¸Ð¼ÐµÐ¹Ð».
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚</h2>
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
      <h1 className="text-4xl font-bold text-white mb-3">Cookie Policy</h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: April 2026</p>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. What Are Cookies</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Cookies are small text files stored on your device when you visit a website. They help
          websites function correctly and improve the user experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How Firmyx Uses Cookies</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">
          Firmyx uses only <strong className="text-white">strictly necessary cookies</strong> required for the platform to function.
        </p>
        <p className="text-base text-gray-300 leading-relaxed mb-4">
          We do <strong className="text-white">not</strong> use:
        </p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Analytics cookies</li>
          <li>Marketing cookies</li>
          <li>Third-party tracking cookies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Types of Cookies</h2>
        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Strictly Necessary Cookies</h3>
        <p className="text-base text-gray-300 leading-relaxed mb-4">These cookies are essential to the platform. They are used for:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>User authentication (login)</li>
          <li>Maintaining an active session</li>
          <li>Account security</li>
        </ul>
        <p className="text-base text-gray-300 leading-relaxed mb-6">They do not collect data for marketing purposes.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Storage Duration</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">
          The cookies we use are <strong className="text-white">session cookies</strong>, meaning:
        </p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>They are deleted automatically when you close your browser</li>
          <li>They are not stored long-term on your device</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Managing Cookies</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Because we only use necessary cookies, explicit consent is not required under applicable law.
          You can still control or delete cookies through your browser settings.
        </p>
        <p className="text-base text-gray-300 leading-relaxed mb-6">Note that disabling these cookies may prevent you from logging into your account.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Third-Party Cookies</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Firmyx does not use third-party cookies. If we introduce any in the future, we will update
          this policy and request your consent where required.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Changes to This Policy</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          We may update this Cookie Policy periodically. We will notify users of significant changes
          via the platform or by email.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Contact</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          If you have questions:{' '}
          <a href="mailto:atanas.k.kanev@gmail.com" className="text-blue-400 hover:underline">atanas.k.kanev@gmail.com</a>
        </p>
      </section>
    </article>
  );
}
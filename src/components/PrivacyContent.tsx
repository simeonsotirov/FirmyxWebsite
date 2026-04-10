'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function PrivacyContent() {
  const { lang } = useLanguage();

  if (lang === 'bg') {
    return (
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚</h1>
        <p className="text-sm text-gray-400 mb-12">ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð° Ð°ÐºÑ‚ÑƒÐ°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ: Ð°Ð¿Ñ€Ð¸Ð» 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. ÐšÐ°ÐºÐ²Ð¸ Ð´Ð°Ð½Ð½Ð¸ ÑÑŠÐ±Ð¸Ñ€Ð°Ð¼Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð¡ÑŠÐ±Ð¸Ñ€Ð°Ð¼Ðµ:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð¸Ð¼Ðµ Ð¸ Ð¸Ð¼ÐµÐ¹Ð» Ð°Ð´Ñ€ÐµÑ</li>
            <li>Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð²Ð¸ Ð´Ð°Ð½Ð½Ð¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð´Ð¾Ð±Ñ€Ð¾Ð²Ð¾Ð»Ð½Ð¾ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÑÑ‚Ðµ</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ ÐµÐ´Ð¸Ð½ÑÑ‚Ð²ÐµÐ½Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸ ÑÐµÑÐ¸Ð¹Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. ÐŸÑ€Ð°Ð²Ð½Ð¾ Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚Ð²Ð°Ð¼Ðµ Ð´Ð°Ð½Ð½Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð¸Ð·Ð¿ÑŠÐ»Ð½ÐµÐ½Ð¸Ðµ Ð½Ð° Ð´Ð¾Ð³Ð¾Ð²Ð¾Ñ€ (Ñ‡Ð». 6(1)(b) GDPR)</li>
            <li>Ð»ÐµÐ³Ð¸Ñ‚Ð¸Ð¼ÐµÐ½ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑ (Ð¿Ð¾Ð´Ð¾Ð±Ñ€ÑÐ²Ð°Ð½Ðµ Ð½Ð° ÑƒÑÐ»ÑƒÐ³Ð°Ñ‚Ð°)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. ÐšÐ°Ðº Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð´Ð°Ð½Ð½Ð¸Ñ‚Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð”Ð°Ð½Ð½Ð¸Ñ‚Ðµ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ ÑÐ°Ð¼Ð¾ Ð·Ð°:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð² Ð°Ð½Ð°Ð»Ð¸Ð· Ð¸ Ð³ÐµÐ½ÐµÑ€Ð¸Ñ€Ð°Ð½Ðµ Ð½Ð° Ð¾Ñ‚Ñ‡ÐµÑ‚Ð¸</li>
            <li>Ð¿Ð¾Ð´Ð¾Ð±Ñ€ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð°Ð»Ð³Ð¾Ñ€Ð¸Ñ‚Ð¼Ð¸Ñ‚Ðµ (Ð² Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð°Ð½ Ð²Ð¸Ð´)</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">ÐÐ¸Ðµ Ð½Ðµ Ð¿Ñ€Ð¾Ð´Ð°Ð²Ð°Ð¼Ðµ Ð¸ Ð½Ðµ ÑÐ¿Ð¾Ð´ÐµÐ»ÑÐ¼Ðµ Ð´Ð°Ð½Ð½Ð¸ Ð·Ð° Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð¾Ð²Ð¸ Ñ†ÐµÐ»Ð¸.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Ð¡Ð¸Ð³ÑƒÑ€Ð½Ð¾ÑÑ‚</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>AES-256 ÐºÑ€Ð¸Ð¿Ñ‚Ð¸Ñ€Ð°Ð½Ðµ</li>
            <li>TLS 1.2+ Ð¿Ñ€Ð¸ Ð¿Ñ€ÐµÐ½Ð¾Ñ</li>
            <li>ÑÑ‚Ñ€Ð¾Ð³ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð» Ð½Ð° Ð´Ð¾ÑÑ‚ÑŠÐ¿Ð°</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Ð¡ÑŠÑ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ Ð¸ Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ð½Ðµ</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð”Ð°Ð½Ð½Ð¸Ñ‚Ðµ ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ð´Ð¾ÐºÐ°Ñ‚Ð¾ Ð°ÐºÐ°ÑƒÐ½Ñ‚ÑŠÑ‚ Ðµ Ð°ÐºÑ‚Ð¸Ð²ÐµÐ½. ÐŸÑ€Ð¸ Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ð½Ðµ Ð½Ð° Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð°:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð´Ð°Ð½Ð½Ð¸Ñ‚Ðµ ÑÐµ Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ñ‚ Ð½ÐµÐ¾Ð±Ñ€Ð°Ñ‚Ð¸Ð¼Ð¾ Ð² Ñ€Ð°Ð¼ÐºÐ¸Ñ‚Ðµ Ð½Ð° 30 Ð´Ð½Ð¸</li>
            <li>Ñ€ÐµÐ·ÐµÑ€Ð²Ð½Ð¸Ñ‚Ðµ ÐºÐ¾Ð¿Ð¸Ñ ÑÐµ Ð¸Ð·Ñ‡Ð¸ÑÑ‚Ð²Ð°Ñ‚ Ð¿Ð¾ ÑÑŠÑ‰Ð¸Ñ Ð³Ñ€Ð°Ñ„Ð¸Ðº</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Ð¢Ñ€ÐµÑ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Google Gemini API Ð·Ð° AI Ð°Ð½Ð°Ð»Ð¸Ð·. Ð’Ð°ÑˆÐ¸Ñ‚Ðµ Ð´Ð°Ð½Ð½Ð¸:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð½Ðµ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð·Ð° Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ðµ Ð½Ð° AI Ð¼Ð¾Ð´ÐµÐ»Ð¸</li>
            <li>Ð½Ðµ ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ð¸Ð·Ð²ÑŠÐ½ Ñ€Ð°Ð¼ÐºÐ¸Ñ‚Ðµ Ð½Ð° Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ°Ñ‚Ð°</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Ð’Ð°ÑˆÐ¸Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð° (GDPR)</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Ð˜Ð¼Ð°Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¾ Ð½Ð°:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Ð´Ð¾ÑÑ‚ÑŠÐ¿ Ð´Ð¾ Ð´Ð°Ð½Ð½Ð¸Ñ‚Ðµ ÑÐ¸</li>
            <li>ÐºÐ¾Ñ€ÐµÐºÑ†Ð¸Ñ Ð½Ð° Ð½ÐµÑ‚Ð¾Ñ‡Ð½Ð¸ Ð´Ð°Ð½Ð½Ð¸</li>
            <li>Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ð½Ðµ (&ldquo;Ð¿Ñ€Ð°Ð²Ð¾ Ð´Ð° Ð±ÑŠÐ´ÐµÑˆ Ð·Ð°Ð±Ñ€Ð°Ð²ÐµÐ½&rdquo;)</li>
            <li>Ð¿Ñ€ÐµÐ½Ð¾ÑÐ¸Ð¼Ð¾ÑÑ‚ Ð½Ð° Ð´Ð°Ð½Ð½Ð¸Ñ‚Ðµ</li>
            <li>Ð²ÑŠÐ·Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ ÑÑ€ÐµÑ‰Ñƒ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ°Ñ‚Ð°</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Ð—Ð° ÑƒÐ¿Ñ€Ð°Ð¶Ð½ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ñ€Ð°Ð²Ð°Ñ‚Ð° ÑÐ¸:{' '}
            <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
          </p>
        </section>
      </article>
    );
  }

  return (
    <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: April 2026</p>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. What Data We Collect</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">We collect:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Your name and email address</li>
          <li>Financial data you voluntarily provide</li>
        </ul>
        <p className="text-base text-gray-300 leading-relaxed mb-6">We use only strictly necessary session cookies.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Legal Basis</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">We process data based on:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Contract performance (Art. 6(1)(b) GDPR)</li>
          <li>Legitimate interest (improving the service)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. How We Use Your Data</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">Your data is used solely for:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Financial analysis and report generation</li>
          <li>Improving our algorithms (in anonymized form)</li>
        </ul>
        <p className="text-base text-gray-300 leading-relaxed mb-6">We do not sell or share data for marketing purposes.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Security</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">We use:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>AES-256 encryption at rest</li>
          <li>TLS 1.2+ in transit</li>
          <li>Strict access controls</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Retention &amp; Deletion</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">Data is stored while your account is active. Upon account deletion:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Data is permanently deleted within 30 days</li>
          <li>Backups are purged on the same schedule</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Third Parties</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">We use Google Gemini API for AI analysis. Your data:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Is not used to train AI models</li>
          <li>Is not stored beyond the processing window</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Your Rights (GDPR)</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Access your data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data (&ldquo;right to be forgotten&rdquo;)</li>
          <li>Data portability</li>
          <li>Object to processing</li>
        </ul>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          To exercise your rights:{' '}
          <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Contact</h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
        </p>
      </section>
    </article>
  );
}
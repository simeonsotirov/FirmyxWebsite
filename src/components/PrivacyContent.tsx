'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function PrivacyContent() {
  const { lang } = useLanguage();

  if (lang === 'bg') {
    return (
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">Политика за поверителност</h1>
        <p className="text-sm text-gray-400 mb-12">Последна актуализация: април 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Какви данни събираме</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Събираме:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>име и имейл адрес</li>
            <li>финансови данни, които доброволно предоставяте</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Използваме единствено необходими сесийни бисквитки.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Правно основание</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Обработваме данни на основание:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>изпълнение на договор (чл. 6(1)(b) GDPR)</li>
            <li>легитимен интерес (подобряване на услугата)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Как използваме данните</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Данните се използват само за:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>финансов анализ и генериране на отчети</li>
            <li>подобряване на алгоритмите (в анонимизиран вид)</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Ние не продаваме и не споделяме данни за маркетингови цели.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Сигурност</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Използваме:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>AES-256 криптиране</li>
            <li>TLS 1.2+ при пренос</li>
            <li>строг контрол на достъпа</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Съхранение и изтриване</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Данните се съхраняват докато акаунтът е активен. При изтриване на акаунта:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>данните се изтриват необратимо в рамките на 30 дни</li>
            <li>резервните копия се изчистват по същия график</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Трети страни</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Използваме Google Gemini API за AI анализ. Вашите данни:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>не се използват за обучение на AI модели</li>
            <li>не се съхраняват извън рамките на обработката</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Вашите права (GDPR)</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Имате право на:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>достъп до данните си</li>
            <li>корекция на неточни данни</li>
            <li>изтриване (&ldquo;право да бъдеш забравен&rdquo;)</li>
            <li>преносимост на данните</li>
            <li>възражение срещу обработката</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            За упражняване на правата си:{' '}
            <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Контакт</h2>
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
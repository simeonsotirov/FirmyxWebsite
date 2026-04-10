'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function TermsContent() {
  const { lang } = useLanguage();

  if (lang === 'bg') {
    return (
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">Условия за ползване</h1>
        <p className="text-sm text-gray-400 mb-12">Последна актуализация: април 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Приемане на условията</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            С достъпа до или използването на платформата Firmyx (&ldquo;Услугата&rdquo;), вие потвърждавате, че сте
            прочели, разбрали и се съгласявате с настоящите Условия за ползване (&ldquo;Условия&rdquo;) и Политиката
            за поверителност. Ако не сте съгласни, нямате право да използвате Услугата.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Трябва да сте навършили поне 18 години или да имате правното правомощие да сключвате обвързващи договори от името на юридическо лице.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Описание на услугата</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Firmyx предоставя AI-базиран анализ на финансовото състояние на бизнеси. Услугата включва,
            но не се ограничава до: оценки за финансово здраве, оценки на риска, индикатори за
            вероятност от неплатежоспособност, анализи на тенденции и автоматично генерирани препоръки.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Всички резултати са с информативен характер и не представляват финансов, правен, данъчен или счетоводен съвет.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Регистрация и акаунт</h2>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Вие носите отговорност за сигурността на акаунта и паролата си.</li>
            <li>Незабавно ни уведомявайте при неоторизиран достъп до акаунта ви.</li>
            <li>Акаунтът не може да се прехвърля на трети лица.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Безплатен план и плащания</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Безплатният план осигурява достъп до основни функции без кредитна карта. Платените планове се фактурират месечно или годишно. Можете да се откажете по всяко време — без такси за прекратяване.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Допустима употреба</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Забранено е:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Използване на услугата за незаконни цели.</li>
            <li>Опити за заобикаляне на ограниченията на системата.</li>
            <li>Споделяне или продажба на достъп до акаунта ви.</li>
            <li>Качване на умишлено невярна финансова информация.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Данни и поверителност</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Обработваме личните ви данни съгласно нашата{' '}
            <a href="/privacy" className="text-blue-400 hover:underline">Политика за поверителност</a>.
            Вашите финансови данни се криптират с AES-256 и не се споделят с трети страни.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Интелектуална собственост</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Всички права върху платформата, алгоритмите и дизайна са собственост на Firmyx. Потребителите запазват пълните права върху данните, които качват.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Отказ от отговорност</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Firmyx предоставя финансов анализ с информационна цел. Платформата не е лицензиран финансов съветник. Фирмата не носи отговорност за бизнес решения, взети въз основа на данните на платформата.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Ограничение на отговорността</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">В максималната степен, позволена от закона, Firmyx не носи отговорност за косвени, случайни или последващи вреди от употребата на услугата.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Прекратяване</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Можете да прекратите акаунта си по всяко време. Firmyx си запазва правото да прекрати достъп при нарушение на настоящите условия.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Промени в условията</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Уведомяваме потребителите по имейл при съществени промени. Продължената употреба означава приемане на новите условия.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">12. Приложимо право</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Настоящите условия се уреждат от законодателството на Република България и приложимото право на Европейския съюз.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">13. Контакт</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            При въпроси:{' '}
            <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
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
          <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
        </p>
      </section>
    </article>
  );
}
'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function CookiesContent() {
  const { lang } = useLanguage();

  if (lang === 'bg') {
    return (
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">Политика за бисквитки</h1>
        <p className="text-sm text-gray-400 mb-12">Последна актуализация: април 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Какво представляват бисквитките</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Бисквитките (&ldquo;cookies&rdquo;) са малки текстови файлове, съхранявани на вашето устройство
            при посещение на уебсайт. Те осигуряват нормалното функциониране на сайтовете и подобряват
            потребителското изживяване.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Как Firmyx използва бисквитки</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Firmyx използва само <strong className="text-white">стриктно необходими бисквитки</strong> за функционирането на платформата.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Ние <strong className="text-white">не използваме</strong>:
          </p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>аналитични бисквитки</li>
            <li>маркетингови бисквитки</li>
            <li>бисквитки за проследяване от трети страни</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Видове бисквитки</h2>
          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Стриктно необходими бисквитки</h3>
          <p className="text-base text-gray-300 leading-relaxed mb-4">Тези бисквитки са от съществено значение за работата на платформата. Те се използват за:</p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>удостоверяване на потребителя (логин)</li>
            <li>поддържане на активна сесия</li>
            <li>защита на акаунта и сигурността</li>
          </ul>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Те не събират информация за маркетингови цели.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Срок на съхранение</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Използваните бисквитки са <strong className="text-white">сесийни</strong>, което означава:
          </p>
          <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>изтриват се автоматично при затваряне на браузъра</li>
            <li>не се съхраняват дългосрочно на устройството ви</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Управление на бисквитките</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Тъй като използваме само необходими бисквитки, не се изисква изрично съгласие съгласно
            приложимото законодателство. Въпреки това можете да ги контролирате чрез настройките на браузъра.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-6">Имайте предвид, че деактивирането им може да попречи на влизането в акаунта ви.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Бисквитки на трети страни</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Firmyx не използва бисквитки на трети страни. При евентуалното им въвеждане в бъдеще ще
            актуализираме тази политика и ще поискаме вашето съгласие.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Промени в политиката</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Можем да актуализираме тази политика периодично. При съществени промени ще уведомим
            потребителите чрез платформата или по имейл.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Контакт</h2>
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
          <a href="mailto:support@firmyx.com" className="text-blue-400 hover:underline">support@firmyx.com</a>
        </p>
      </section>
    </article>
  );
}
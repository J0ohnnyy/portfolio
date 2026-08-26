import { MdLanguage } from 'react-icons/md';
import { skeleton } from '../../utils';
import { Lang, useLanguage } from '../../i18n';

/**
 * Renders a language changer component (EN / FR toggle).
 *
 * @param {boolean} loading - Whether the component is in a loading state.
 * @return {JSX.Element} The rendered language changer component.
 */
const LanguageChanger = ({ loading }: { loading: boolean }) => {
  const { lang, setLang, t } = useLanguage();

  const options: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className="card overflow-visible shadow-lg card-sm bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-4 py-4">
        <div className="flex-1 flex items-center gap-2">
          <MdLanguage className="inline-block w-5 h-5 opacity-60 text-base-content" />
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-20', heightCls: 'h-8', className: 'mb-1' })
            ) : (
              <span className="text-base-content opacity-70">
                {t('language')}
              </span>
            )}
          </h5>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({ widthCls: 'w-20', heightCls: 'h-8' })
          ) : (
            <div className="join">
              {options.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLang(option.code)}
                  className={`btn btn-sm join-item ${
                    lang === option.code ? 'btn-primary' : 'btn-ghost opacity-60'
                  }`}
                  aria-pressed={lang === option.code}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageChanger;

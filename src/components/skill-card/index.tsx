import { skeleton } from '../../utils';
import { useLanguage, SkillGroup } from '../../i18n';

const SkillCard = ({
  loading,
  skillGroups,
}: {
  loading: boolean;
  skillGroups: SkillGroup[];
}) => {
  const { t } = useLanguage();

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {t('techStack')}
              </span>
            )}
          </h5>
        </div>
        <div className="p-3">
          {loading ? (
            <div className="-m-1 flex flex-wrap justify-center gap-2">
              {renderSkeleton()}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {skillGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="text-sm font-semibold text-base-content opacity-60 mb-2">
                    {group.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="badge badge-primary badge-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

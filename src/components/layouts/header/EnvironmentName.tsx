import { envs } from '@/core/env';

export const EnvironmentName = () => {
  if (!envs.VITE_ENVIRONMENT || envs.VITE_ENVIRONMENT === 'production') {
    return <div />;
  }

  return <div className="text-[2rem] font-[800] fixed top-1 left-4 z-[190] text-white-ultra-light/75">{envs.VITE_ENVIRONMENT}</div>;
};

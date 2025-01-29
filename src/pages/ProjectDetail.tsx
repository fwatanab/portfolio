import React from 'react';
import { useParams } from 'react-router-dom';

const projectDetails: Record<string, { title: string; description: string; details: string }> = {
  puyoGame: {
    title: 'PuyoGame',
    description: 'C++とSDL2を用いて開発したパズルゲーム',
    details: '詳細情報がここに入ります。',
  },
  easyChat: {
    title: 'easyChat',
    description: 'リアルタイムチャットアプリ',
    details: '詳細情報がここに入ります。',
  },
  cub3D: {
    title: 'cub3D',
    description: '3Dゲームエンジン',
    details: '詳細情報がここに入ります。',
  },
};

const ProjectDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails[id || ''];

  return (
    <section className="project-detail">
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p>{project.details}</p>
        </>
      ) : (
        <p>プロジェクトが見つかりませんでした。</p>
      )}
    </section>
  );
};

export default ProjectDetail;

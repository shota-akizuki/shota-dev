import { useState } from 'react';
import styles from '../styles/timeline.module.css';

const Year = ({ children }) => {
  return <h3>{children}</h3>;
};

const Divider = () => {
  return <div className={styles.divider}></div>;
};

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <div className={styles.timeline}>
        <h1>Timeline</h1>
        <Year>2021</Year>
        <ul>
          {/* <li>Joined ▼Riverth Design</li>
          <p>大阪のデザイン事務所でwebデザイナーとして働くことになりました。</p> */}
          <li>Got Married</li>
          <p>いい出会いに恵まれました。感謝。</p>
          <li>Launched the first iOS app with Flutter</li>
          <p>
            アプリリリースを経験。その後、Webに軸足を移すためFlutter大学を卒業。
          </p>
        </ul>
        <Divider />
        <Year>2020</Year>
        <ul>
          <li>Started a Flutter Team Project.</li>
          <p>
            アプリのチーム開発にジョイン。わからないことだらけ。しかし、3人と少数だったのでコミットせざるをえない状況が刺激になってとても良かった。
          </p>
          <li>Joined KBOY Flutter University</li>
          <p>エンジニアとして修行するためKBOYさんのオンラインサロンに参加。</p>
          <li>Learned How To Program</li>
          <p>
            COVID-19によるステイホーム期間中にプログラミングを始めることに。
          </p>
        </ul>
        {isShowingFullTimeline ? (
          <FullTimeline />
        ) : (
          <a onClick={() => showFullTimeline(true)}>...See More</a>
        )}
      </div>
    </>
  );
}

const FullTimeline = () => (
  <>
    <div className={styles.timeline}>
      <Divider />
      <Year>2017〜2019</Year>
      <ul>
        <p>
          音楽活動休止。やりたかった英語を勉強したり、ひたすら読書したり、メモを録り始めてみたり、とにかく模索する期間でした。
        </p>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
        <p>
          とにかくライブに打ち込みました。サーキットライブに出演、東京に遠征、ワンマンライブにも挑戦。
        </p>
      </ul>
      <Divider />
      <Year>2011</Year>
      <ul>
        <li>Graduated College</li>
        <p>大学卒業後、プロのミュージシャンを目指し音楽活動を開始。</p>
      </ul>
      <Divider />
      <Year>2007</Year>
      <ul>
        <li>Started Osaka Kyoiku University</li>
        <p>
          大阪教育大学大学に入学。18年間住んだ生まれ故郷の愛媛から大阪に引越し。
        </p>
      </ul>
    </div>
  </>
);

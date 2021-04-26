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
        <h1 className={styles.title}>Timeline</h1>
        <Year>2021</Year>
        <ul>
          <li>💒 Got Married</li>
          <p>いい出会いに恵まれました。感謝！</p>
          <li>📱 Launched my first iOS app.</li>
          <p>
            FlutterでiOSアプリを初リリース。その後、Web(React)に軸足を移す。
          </p>
        </ul>
        <Divider />
        <Year>2020</Year>
        <ul>
          <li>💻 Started a Flutter Team Project</li>
          <p>
            アプリ開発チーム（Flutter）にジョイン。3人と少数だったのでコミットせざるをえない状況がとても刺激になった。
          </p>
          <li>👨🏻‍💻 Learned How To Program</li>
          <p>COVID-19によるステイホーム期間中にプログラミングを始める。</p>
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
      <li>📚 Ended the band</li>
      <ul>
        <p>
          音楽活動休止。ミニマリズムにハマる、英語を勉強する、ひたすら読書、メモ魔になってみる、とにかく模索する期間。
        </p>
      </ul>
      <Divider />
      <Year>2012〜2016</Year>
      <li>🎸 Started an Independent rock band</li>
      <ul>
        <p>
          音楽に打ち込む。インディーズバンドとして、制作、リリース、ラジオ出演、ライブツアー、サーキットライブ出演、東京遠征、ワンマンライブにも挑戦。
        </p>
      </ul>
      <Divider />
      <Year>2011</Year>
      <ul>
        <li>🎓 Graduated College</li>
        <p>大学卒業後、プロのミュージシャンを目指し音楽活動を開始。</p>
      </ul>
      <Divider />
      <Year>2007</Year>
      <ul>
        <li>🏫 Started Osaka Kyoiku University</li>
        <p>
          大阪教育大学に入学。18年間住んだ生まれ故郷の愛媛から大阪に引越し。
        </p>
      </ul>
    </div>
  </>
);

import { useAppSelector } from '../../app/hooks';
import { DetailsFetchResultInterface } from '../../types/types';
import style from './style.module.css';

interface DownloadFilePropsInterface {
  fileName: string;
}

const DownloadFile: React.FC<DownloadFilePropsInterface> = ({
  fileName = 'download.csv',
}) => {
  const data: DetailsFetchResultInterface[] = useAppSelector(
    (state) => state.people?.selectedCards
  );

  const downloadCSV = () => {
    const csvString = [
      [
        'Name',
        'Height',
        'Mass',
        'Hair color',
        'Skin color',
        'Eye color',
        'Birth year',
        'Gender',
      ],
      ...data.map((item) => [
        item.name,
        item.height,
        item.hair_color,
        item.skin_color,
        item.eye_color,
        item.birth_year,
        item.gender,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button className={style.downloadButton} onClick={downloadCSV}>
      Download
    </button>
  );
};

export { DownloadFile };

'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '../../state/hooks';
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

  const [file, setFile] = useState<string>('');

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

    return URL.createObjectURL(blob);
  };

  useEffect(() => {
    setFile(downloadCSV());
  }, [data]);

  return (
    <a
      className={style.downloadButton}
      href={file}
      onClick={downloadCSV}
      download={fileName}
    >
      Download
    </a>
  );
};

export { DownloadFile };

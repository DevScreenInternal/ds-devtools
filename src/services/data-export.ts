export const downloadIdListToCsv = (fileName: string, rows: string[]) => {
  const csvContent = 'data:text/csv;charset=utf-8,' + rows.join(',\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `${fileName}.csv`);
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "filename.csv".
};

export const downloadIdListToJson = (fileName: string, rows: string[]) => {
  const jsonContent =
    'data:text/json;charset=utf-8,' + JSON.stringify(rows, null, 2);

  const encodedUri = encodeURI(jsonContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `${fileName}.json`);
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "filename.json".
};

import { TimeSeriesStockData } from "src/core/domain/stock/stock.entity";

export const toTimeSeriesStockData = (data: string): TimeSeriesStockData => {
  if (!data) {
    return;
  }
  let dataString = data.replace(/(\")([1-9]\.\s)([a-zA-Z]*\s?[a-zA-Z]*)(\"\:)/g, (_, p1, p2, p3, p4) => {
    const camelCaseString = p3.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    return [p1, camelCaseString, p4].join('');
  });;
  dataString = dataString.replace('"Meta Data":', '"metadata":');
  dataString = dataString.replace(/("Time Series \(\d{0,2}\w+\)")(:)/, '"timeSeries":');
  const normalizedData = JSON.parse(dataString);
  const timeSeriesData = normalizedData['timeSeries'];
  const timeSeries = Object.keys(timeSeriesData).map((timestamp) => {
    return {
      timestamp,
      ...timeSeriesData[timestamp]
    }
  });

  return {
    metadata: normalizedData['metadata'],
    timeSeries
  };
};

import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

//Create an object that satisfies the DataReader interface.
// const csvFileReader = new CsvFileReader('football.csv');

//Cerate an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);

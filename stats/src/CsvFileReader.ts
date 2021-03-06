import fs from "fs";

/**
 * This is a backup CSV File reader file. Since we are going to refactor alot.
 */
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map(
        (row: string): string[] => row.split(',')
      );
  }
}

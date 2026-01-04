export interface CodonUsage {
  codon: string;
  frequency: number; // per thousand
  fraction: number; // 0.0 - 1.0 (relative adaptiveness)
  isOptimal: boolean;
}

export interface AminoAcidData {
  name: string;
  singleLetter: string;
  threeLetter: string;
  chineseName: string;
  codons: CodonUsage[];
}

export interface SearchResult {
  query: string;
  data: AminoAcidData | null;
}

export enum AppMode {
  LOOKUP = 'LOOKUP',
  OPTIMIZER = 'OPTIMIZER'
}

export interface OptimizerResponse {
  dnaSequence: string;
  explanation: string;
}

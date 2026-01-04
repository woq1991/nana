import { AminoAcidData } from './types';

// Data based on E. Coli K12 Codon Usage Table (Kazusa DNA Res. Inst.)
// Frequencies are approximate representation for "Optimal" determination logic.
export const CODON_TABLE: AminoAcidData[] = [
  {
    name: 'Alanine',
    singleLetter: 'A',
    threeLetter: 'Ala',
    chineseName: '丙氨酸',
    codons: [
      { codon: 'GCG', frequency: 33.7, fraction: 0.36, isOptimal: true },
      { codon: 'GCC', frequency: 25.5, fraction: 0.27, isOptimal: false },
      { codon: 'GCA', frequency: 20.3, fraction: 0.22, isOptimal: false },
      { codon: 'GCT', frequency: 15.3, fraction: 0.16, isOptimal: false },
    ]
  },
  {
    name: 'Arginine',
    singleLetter: 'R',
    threeLetter: 'Arg',
    chineseName: '精氨酸',
    codons: [
      { codon: 'CGC', frequency: 22.0, fraction: 0.40, isOptimal: true }, // Often considered optimal in high expressors
      { codon: 'CGT', frequency: 20.9, fraction: 0.38, isOptimal: false },
      { codon: 'CGG', frequency: 5.4, fraction: 0.10, isOptimal: false }, // Rare
      { codon: 'CGA', frequency: 3.5, fraction: 0.06, isOptimal: false }, // Rare
      { codon: 'AGA', frequency: 2.1, fraction: 0.04, isOptimal: false }, // Rare
      { codon: 'AGG', frequency: 1.2, fraction: 0.02, isOptimal: false }, // Rare
    ]
  },
  {
    name: 'Asparagine',
    singleLetter: 'N',
    threeLetter: 'Asn',
    chineseName: '天冬酰胺',
    codons: [
      { codon: 'AAC', frequency: 21.6, fraction: 0.55, isOptimal: true },
      { codon: 'AAT', frequency: 17.5, fraction: 0.45, isOptimal: false },
    ]
  },
  {
    name: 'Aspartic Acid',
    singleLetter: 'D',
    threeLetter: 'Asp',
    chineseName: '天冬氨酸',
    codons: [
      { codon: 'GAT', frequency: 32.2, fraction: 0.63, isOptimal: true },
      { codon: 'GAC', frequency: 19.1, fraction: 0.37, isOptimal: false },
    ]
  },
  {
    name: 'Cysteine',
    singleLetter: 'C',
    threeLetter: 'Cys',
    chineseName: '半胱氨酸',
    codons: [
      { codon: 'TGC', frequency: 6.4, fraction: 0.56, isOptimal: true },
      { codon: 'TGT', frequency: 5.1, fraction: 0.44, isOptimal: false },
    ]
  },
  {
    name: 'Glutamine',
    singleLetter: 'Q',
    threeLetter: 'Gln',
    chineseName: '谷氨酰胺',
    codons: [
      { codon: 'CAG', frequency: 28.8, fraction: 0.65, isOptimal: true },
      { codon: 'CAA', frequency: 15.2, fraction: 0.35, isOptimal: false },
    ]
  },
  {
    name: 'Glutamic Acid',
    singleLetter: 'E',
    threeLetter: 'Glu',
    chineseName: '谷氨酸',
    codons: [
      { codon: 'GAA', frequency: 39.7, fraction: 0.69, isOptimal: true },
      { codon: 'GAG', frequency: 17.8, fraction: 0.31, isOptimal: false },
    ]
  },
  {
    name: 'Glycine',
    singleLetter: 'G',
    threeLetter: 'Gly',
    chineseName: '甘氨酸',
    codons: [
      { codon: 'GGC', frequency: 29.6, fraction: 0.40, isOptimal: true },
      { codon: 'GGT', frequency: 24.7, fraction: 0.34, isOptimal: false },
      { codon: 'GGG', frequency: 11.1, fraction: 0.15, isOptimal: false },
      { codon: 'GGA', frequency: 7.9, fraction: 0.11, isOptimal: false },
    ]
  },
  {
    name: 'Histidine',
    singleLetter: 'H',
    threeLetter: 'His',
    chineseName: '组氨酸',
    codons: [
      { codon: 'CAT', frequency: 12.8, fraction: 0.57, isOptimal: true },
      { codon: 'CAC', frequency: 9.7, fraction: 0.43, isOptimal: false },
    ]
  },
  {
    name: 'Isoleucine',
    singleLetter: 'I',
    threeLetter: 'Ile',
    chineseName: '异亮氨酸',
    codons: [
      { codon: 'ATC', frequency: 25.0, fraction: 0.49, isOptimal: true },
      { codon: 'ATT', frequency: 30.5, fraction: 0.39, isOptimal: false }, // High freq but ATC usually preferred for efficiency
      { codon: 'ATA', frequency: 4.4, fraction: 0.11, isOptimal: false }, // Rare
    ]
  },
  {
    name: 'Leucine',
    singleLetter: 'L',
    threeLetter: 'Leu',
    chineseName: '亮氨酸',
    codons: [
      { codon: 'CTG', frequency: 52.7, fraction: 0.50, isOptimal: true },
      { codon: 'TTA', frequency: 13.9, fraction: 0.13, isOptimal: false },
      { codon: 'TTG', frequency: 13.7, fraction: 0.13, isOptimal: false },
      { codon: 'CTC', frequency: 11.1, fraction: 0.10, isOptimal: false },
      { codon: 'CTT', frequency: 10.4, fraction: 0.10, isOptimal: false },
      { codon: 'CTA', frequency: 3.9, fraction: 0.04, isOptimal: false }, // Rare
    ]
  },
  {
    name: 'Lysine',
    singleLetter: 'K',
    threeLetter: 'Lys',
    chineseName: '赖氨酸',
    codons: [
      { codon: 'AAA', frequency: 33.6, fraction: 0.76, isOptimal: true },
      { codon: 'AAG', frequency: 10.3, fraction: 0.24, isOptimal: false },
    ]
  },
  {
    name: 'Methionine',
    singleLetter: 'M',
    threeLetter: 'Met',
    chineseName: '甲硫氨酸',
    codons: [
      { codon: 'ATG', frequency: 27.7, fraction: 1.00, isOptimal: true },
    ]
  },
  {
    name: 'Phenylalanine',
    singleLetter: 'F',
    threeLetter: 'Phe',
    chineseName: '苯丙氨酸',
    codons: [
      { codon: 'TTT', frequency: 22.3, fraction: 0.57, isOptimal: true },
      { codon: 'TTC', frequency: 16.6, fraction: 0.43, isOptimal: false },
    ]
  },
  {
    name: 'Proline',
    singleLetter: 'P',
    threeLetter: 'Pro',
    chineseName: '脯氨酸',
    codons: [
      { codon: 'CCG', frequency: 23.2, fraction: 0.52, isOptimal: true },
      { codon: 'CCA', frequency: 8.5, fraction: 0.19, isOptimal: false },
      { codon: 'CCT', frequency: 7.2, fraction: 0.16, isOptimal: false },
      { codon: 'CCC', frequency: 5.5, fraction: 0.13, isOptimal: false },
    ]
  },
  {
    name: 'Serine',
    singleLetter: 'S',
    threeLetter: 'Ser',
    chineseName: '丝氨酸',
    codons: [
      { codon: 'AGC', frequency: 16.0, fraction: 0.28, isOptimal: true },
      { codon: 'TCG', frequency: 8.8, fraction: 0.15, isOptimal: false },
      { codon: 'TCT', frequency: 8.4, fraction: 0.15, isOptimal: false },
      { codon: 'AGT', frequency: 8.7, fraction: 0.15, isOptimal: false },
      { codon: 'TCC', frequency: 8.6, fraction: 0.15, isOptimal: false },
      { codon: 'TCA', frequency: 7.1, fraction: 0.12, isOptimal: false },
    ]
  },
  {
    name: 'Threonine',
    singleLetter: 'T',
    threeLetter: 'Thr',
    chineseName: '苏氨酸',
    codons: [
      { codon: 'ACC', frequency: 23.4, fraction: 0.44, isOptimal: true },
      { codon: 'ACG', frequency: 14.4, fraction: 0.27, isOptimal: false },
      { codon: 'ACT', frequency: 8.9, fraction: 0.17, isOptimal: false },
      { codon: 'ACA', frequency: 7.0, fraction: 0.13, isOptimal: false },
    ]
  },
  {
    name: 'Tryptophan',
    singleLetter: 'W',
    threeLetter: 'Trp',
    chineseName: '色氨酸',
    codons: [
      { codon: 'TGG', frequency: 15.3, fraction: 1.00, isOptimal: true },
    ]
  },
  {
    name: 'Tyrosine',
    singleLetter: 'Y',
    threeLetter: 'Tyr',
    chineseName: '酪氨酸',
    codons: [
      { codon: 'TAT', frequency: 16.1, fraction: 0.57, isOptimal: true },
      { codon: 'TAC', frequency: 12.2, fraction: 0.43, isOptimal: false },
    ]
  },
  {
    name: 'Valine',
    singleLetter: 'V',
    threeLetter: 'Val',
    chineseName: '缬氨酸',
    codons: [
      { codon: 'GTG', frequency: 26.3, fraction: 0.37, isOptimal: true },
      { codon: 'GTT', frequency: 18.3, fraction: 0.26, isOptimal: false },
      { codon: 'GTC', frequency: 15.3, fraction: 0.21, isOptimal: false },
      { codon: 'GTA', frequency: 10.9, fraction: 0.15, isOptimal: false },
    ]
  },
  {
    name: 'Stop',
    singleLetter: '*',
    threeLetter: 'Stop',
    chineseName: '终止',
    codons: [
      { codon: 'TAA', frequency: 2.0, fraction: 0.64, isOptimal: true }, // Ochre - Preferred
      { codon: 'TGA', frequency: 1.0, fraction: 0.29, isOptimal: false }, // Opal
      { codon: 'TAG', frequency: 0.3, fraction: 0.07, isOptimal: false }, // Amber
    ]
  },
];

export const findAminoAcidData = (query: string): AminoAcidData | null => {
  const normalized = query.trim().toLowerCase();
  
  return CODON_TABLE.find(aa => 
    aa.singleLetter.toLowerCase() === normalized ||
    aa.threeLetter.toLowerCase() === normalized ||
    aa.name.toLowerCase() === normalized ||
    aa.chineseName.includes(normalized) ||
    (normalized === 'stop' && aa.name === 'Stop') ||
    (normalized === '终止' && aa.chineseName === '终止')
  ) || null;
};

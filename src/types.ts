export interface Identitas {
  judul: string;
  mataPelajaran: string;
  faseKelas: string;
  alokasiWaktu: string;
  penyusun: string;
  sekolah: string;
}

export interface TujuanPembelajaran {
  id: string;
  teks: string; // ABCD format
  komponen: {
    audience: string;
    behavior: string;
    condition: string;
    degree: string;
  };
}

export interface QuranVerse {
  surah: string;
  ayat: string;
  arab: string;
  latin: string;
  terjemahan: string;
  tafsirSingkat: string;
  korelasiSains: string[];
}

export interface KurmaJenis {
  nama: string;
  karakteristik: string;
  kandunganKhas: string;
  indeksGlikemik: string;
  rekomendasi: string;
}

export interface PblGroup {
  namaKelompok: string;
  anggota: string[];
  peran: {
    ketua: string;
    pencariDataSains: string;
    pencariTafsir: string;
    penyusunPoster: string;
  };
}

export interface LkpdData {
  hipotesis: string;
  tabelPengamatan: {
    makanan: string;
    kecepatanEnergi: string; // Lambat / Cepat
    kandunganGula: string;
    efekLambung: string;
    seratKasar: string;
  }[];
  analisisMaryamm25: string;
  analisisBukaPuasa: string;
  kesimpulan: string;
  refleksiMandiri: string;
}

export interface SoalPilihanGanda {
  id: number;
  pertanyaan: string;
  pilihan: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  kunci: "A" | "B" | "C" | "D";
  penjelasanSainsDanAgama: string;
}

export interface SoalEssay {
  id: number;
  pertanyaan: string;
  rubrikPanduan: string;
}

export interface StudentAnswers {
  pilihanGanda: Record<number, string>;
  essay: Record<number, string>;
  essayEvaluations: Record<number, {
    score: number;
    feedback: string;
    loading: boolean;
  }>;
}

export interface RefleksiSiswa {
  pemahamanBaru: string;
  perubahanSikap: string;
  rasaSyukur: string;
  bintangModul: number;
}

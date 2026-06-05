import React, { useState } from "react";
import { identitasModul, tujuanPembelajaran } from "../data";
import { BookOpen, User, Calendar, Award, MapPin, CheckCircle, Info } from "lucide-react";
import { motion } from "motion/react";

export default function IdentitasDanCapaian() {
  const [selectedTp, setSelectedTp] = useState<string>("TP-1");

  const currentTp = tujuanPembelajaran.find(tp => tp.id === selectedTp) || tujuanPembelajaran[0];

  return (
    <div className="space-y-8">
      {/* Hero Welcome Cover */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-radial from-palm-800 to-palm-900 p-8 text-white shadow-xl md:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-date-500/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-25 -left-20 h-80 w-80 rounded-full bg-palm-600/20 blur-3xl"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-date-500/20 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-amber-date-200">
            🌿 E-Modul Pembelajaran Biologi & Keislaman
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight md:text-5xl">
            {identitasModul.judul}
          </h1>
          <p className="text-sm text-palm-100 md:text-base leading-relaxed">
            Menyelidiki Rahasia Botani, Rahasia Nutrisi Medis, dan Keajaiban Wahyu Qur’ani Buah Kurma dalam Wadah Problem Based Learning (PBL) Abad ke-21.
          </p>
        </div>
      </motion.div>

      {/* Grid: Identitas & Capaian */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Identitas Card */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 rounded-2xl border border-palm-100 bg-white p-6 shadow-sm"
        >
          <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-palm-900 border-b border-palm-100 pb-3 mb-4">
            <BookOpen className="h-5 w-5 text-palm-600" />
            Identitas Modul
          </h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-palm-100 text-palm-700">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Mata Pelajaran</p>
                <p className="text-sm font-semibold text-gray-800">{identitasModul.mataPelajaran}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-palm-100 text-palm-700">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Fase / Kelas</p>
                <p className="text-sm font-semibold text-gray-800">{identitasModul.faseKelas}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-palm-100 text-palm-700">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Alokasi Waktu</p>
                <p className="text-sm font-semibold text-gray-800">{identitasModul.alokasiWaktu}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-palm-100 text-palm-700">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Penyusun</p>
                <p className="text-sm font-semibold text-gray-800">{identitasModul.penyusun}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-palm-100 text-palm-700">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Sekolah/Lembaga</p>
                <p className="text-sm font-semibold text-gray-800">{identitasModul.sekolah}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CP & TP Section */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 rounded-2xl border border-palm-100 bg-white p-6 shadow-sm"
        >
          <div className="space-y-1 mb-6 border-b border-palm-100 pb-3">
            <h3 className="font-serif text-lg font-bold text-palm-900 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-palm-600" />
              Tujuan Pembelajaran (Format ABCD)
            </h3>
            <p className="text-xs text-gray-500">
              Setiap tujuan disusun sistematis mencakup Audience (A), Behavior (B), Condition (C), dan Degree (D).
            </p>
          </div>

          {/* Tab Selector for TP */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tujuanPembelajaran.map((tp, idx) => (
              <button
                key={tp.id}
                onClick={() => setSelectedTp(tp.id)}
                className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                  selectedTp === tp.id
                    ? "bg-palm-700 text-white shadow-sm"
                    : "bg-palm-50 text-palm-800 hover:bg-palm-100"
                }`}
              >
                Tujuan #{idx + 1}
              </button>
            ))}
          </div>

          {/* Interactive TP breakdown */}
          <div className="rounded-xl bg-palm-50/50 border border-palm-100/50 p-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-palm-700 bg-palm-100/80 px-2 py-0.5 rounded">
                Deskripsi Utama
              </span>
              <p className="text-sm font-medium text-gray-700 leading-relaxed italic">
                &ldquo;{currentTp.teks}&rdquo;
              </p>
            </div>

            {/* ABCD Decomposition */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-3 border border-palm-100 shadow-2xs">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  A - Audience
                </span>
                <p className="mt-1 text-xs text-gray-600 font-semibold">{currentTp.komponen.audience}</p>
                <p className="text-[10px] text-gray-400">Siapa peserta didik yang menjadi subjek belajar.</p>
              </div>

              <div className="rounded-lg bg-white p-3 border border-palm-100 shadow-2xs">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  B - Behavior
                </span>
                <p className="mt-1 text-xs text-gray-600 font-semibold">{currentTp.komponen.behavior}</p>
                <p className="text-[10px] text-gray-400">Tingkat perilaku kognitif/psikomotorik yang akan dicapai.</p>
              </div>

              <div className="rounded-lg bg-white p-3 border border-palm-100 shadow-2xs">
                <span className="text-[10px] font-bold text-amber-date-600 bg-amber-date-50 px-2 py-0.5 rounded">
                  C - Condition
                </span>
                <p className="mt-1 text-xs text-gray-600 font-semibold">{currentTp.komponen.condition}</p>
                <p className="text-[10px] text-gray-400">Keadaan/konteks pembelajaran yang dilalui peserta didik.</p>
              </div>

              <div className="rounded-lg bg-white p-3 border border-palm-100 shadow-2xs">
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                  D - Degree
                </span>
                <p className="mt-1 text-xs text-gray-600 font-semibold">{currentTp.komponen.degree}</p>
                <p className="text-[10px] text-gray-400">Kriteria sukses atau batas ketelitian yang dipersyaratkan.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-yellow-200 bg-amber-date-50/50 p-3.5 text-xs text-amber-date-800">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            <p>
              <strong>Keterampilan Abad 21:</strong> Modul ini mendukung pembentukan karakter berpikir kritis (Critical Thinking), kolaborasi kelompok (Collaboration), komunikasi persuasif (Communication), dan penyelesaian masalah riil (Problem Solving).
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

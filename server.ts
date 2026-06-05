import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser limit for rich interaction
  app.use(express.json());

  // Initialize server-side Gemini client safely (lazy-initialization pattern)
  let aiClient: GoogleGenAI | null = null;
  function getAiClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        console.warn("GEMINI_API_KEY is not configured or is placeholder. AI evaluation falls back to simulation.");
        return null;
      }
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // Health endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date() });
  });

  // Intellect/AI Evaluation of student essays
  app.post("/api/evaluate-essay", async (req, res) => {
    try {
      const { id, pertanyaan, jawabanSiswa, rubrikPanduan } = req.body;

      if (!pertanyaan || !jawabanSiswa) {
        return res.status(400).json({ error: "Pertanyaan dan jawaban siswa wajib diisi." });
      }

      const client = getAiClient();
      
      if (!client) {
        // High fidelity fallback simulation if API Key is missing for seamless local testing
        setTimeout(() => {
          const lowerAns = jawabanSiswa.toLowerCase();
          let score = 60;
          let feedback = "Bagus! Kamu telah berusaha menjawab. ";

          if (id === 1) {
            if (lowerAns.includes("oksitosin") || lowerAns.includes("gula") || lowerAns.includes("fruktosa") || lowerAns.includes("energi")) {
              score = 90;
              feedback += "Analisis kamu sangat tajam. Kamu berhasil mengaitkan monoksakarida (energi cepat) serta senyawa oxytocin-like pada ruthab dengan kemampuannya mempercepat kontraksi dinding rahim (miometrium) dan mencegah pendarahan pascamelahirkan. Teruskan berpikir kritis!";
            } else {
              score = 75;
              feedback += "Jawabanmu sudah cukup baik, namun cobalah untuk mengulas kaitan zat aktif di kurma yang menyerupai hormon oksitosin dan bagaimana fruktosa/glukosa menyumbang energi instan tanpa penguraian berat untuk otot rahim Maryam yang terkuras.";
            }
          } else if (id === 2) {
            if (lowerAns.includes("klorofil") || lowerAns.includes("fotosintesis") || lowerAns.includes("akar") || lowerAns.includes("air")) {
              score = 92;
              feedback += "Luar biasa! Hubungan klorofil ('khadiran' / tanaman menghijau) dengan konversi foton matahari gurun yang sangat terik menjadi cadangan gula terkonsentrasi sangat selaras dengan QS. Al-An'am: 99. Penjelasan adaptasi morfologi akar yang menjangkau air dalam gurun juga sangat baik.";
            } else {
              score = 70;
              feedback += "Upaya yang bagus! Untuk menyempurnakan tulisanmu, sertakan analisis biologis kloroplas pohon kurma yang efisien mengonsentrasikan gula fruktosa meskipun dibombardir sinar matahari gurun intens, serta kaitan dengan klorofil ('khadiran').";
            }
          } else if (id === 3) {
            if (lowerAns.includes("indeks glikemik") || lowerAns.includes("serat") || lowerAns.includes("insulin") || lowerAns.includes("potasium") || lowerAns.includes("kalium")) {
              score = 95;
              feedback += "Sempurna! Kamu memahami konsep homeostasis metabolisme tingkat sel dengan matang. Dibanding sirup manis yang disesaki HFCS (gula murni berkadar kejut insulin), serat pangan kurma melandai glukosa darah, sementara kaliumnya segera menyapu dehidrasi intraseluler.";
            } else {
              score = 75;
              feedback += "Cukup baik. Agar tulisanmu lebih saintifik, tambahkan perbandingan biokimia antara sirup manis berbasis High Fructose Corn Syrup yang memicu gejolak lonjakan glukosa ekstrim, dibandingkan kurma ber-Indeks Glikemik rendah dengan pelindung serat pangan alami.";
            }
          } else if (id === 4) {
            if (lowerAns.includes("fitokimia") || lowerAns.includes("antioksidan") || lowerAns.includes("polifenol") || lowerAns.includes("radikal bebas")) {
              score = 93;
              feedback += "Sangat mendalam! Kamu mengaitkan hadits Ajwa dengan senyawa flavonoid, polifenol, dan logam kofaktor penawar radikal bebas (ROS). Ini membuktikan khasiat detoksifikasi dan hepatoprotektif buah kurma dari radikal sel pemicu mutasi genetik.";
            } else {
              score = 72;
              feedback += "Jawaban yang bernilai tinggi. Kamu dapat menyempurnakannya dengan mengulas biokimia fitokimia kurma seperti flavonoid, fenolat, dan selenium yang bertindak mendonorkan elektron mandiri guna menjinakkan radikal oksigen reaktif.";
            }
          } else {
            if (lowerAns.length > 50) {
              score = 88;
              feedback += "Pemikiran filsafat sains yang matang! Menolak dikotomi sekuler sains-agama dengan memahami bahwa Ayat Kauniyah (ciptaan terobservasi) dan Ayat Qauliyah (wahyu firman) berasal dari Zat Yang Masa Esa adalah karakter sejati ilmuwan abad ke-21.";
            } else {
              score = 70;
              feedback += "Analisis yang baik. Cobalah untuk menjelaskan hubungan integratif bahwa sains empiris berfungsi membukakan tabir Sunnatullah yang tertulis di dalam kalam Al-Qur'an secara empiris, menyatukan nilai kognitif dan spiritual.";
            }
          }

          return res.json({ score, feedback, simulated: true });
        }, 1200);
        return;
      }

      // Query Gemini!
      const prompt = `
        Anda adalah seorang Guru Biologi senior terintegrasi Pesantren dan Ahli Kurikulum Pembelajaran Abad ke-21 di Indonesia.
        Tugas Anda adalah memvalidasi, menilai, dan memberikan umpan balik (feedback) formatif yang ramah, memotivasi, dan mendalam bagi seorang siswa SMA/MA Kelas XI yang sedang mengerjakan soal esai HOTS terintegrasi Agama dan Sains mengenai buah kurma.

        INFORMASI SOAL:
        - Pertanyaan Soal: "${pertanyaan}"
        - Rubrik Panduan Jawaban Ideal: "${rubrikPanduan}"

        JAWABAN SISWA:
        "${jawabanSiswa}"

        KETENTUAN OUTPUT JSON:
        Evaluasi jawaban siswa secara holistik. Berikan skor numerik bulat antara 0 hingga 100 berdasarkan kedalaman analisis, pemahaman konsep integrasi biologi/sains modern dan ayat Al-Qur'an/Agama sesuai rubrik.
        Tulis feedback dalam bahasa Indonesia yang komunikatif, positif, mendalam, dan mendidik (scaffolding). Sebutkan apa yang sudah bagus, jelaskan konsep sains dan kaitannya dengan agama yang luput atau perlu diperbaiki, serta berikan apresiasi.

        Format respon wajib berupa objek JSON dengan struktur berikut:
        {
          "score": nomor_skor_0_sampai_100,
          "feedback": "string_feedback_bahasa_indonesia_tanpa_markdown_tebal_panjang"
        }
      `;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const responseText = response.text || "{}";
      const cleanJson = responseText.trim();
      const parsed = JSON.parse(cleanJson);

      res.json({
        score: parsed.score || 85,
        feedback: parsed.feedback || "Jawabanmu berhasil dianalisis dengan baik. Pertahankan terus pemikiran sains abad 21 terintegrasi nilai keislaman ini!",
        simulated: false
      });

    } catch (err: any) {
      console.error("Error evaluating essay on server:", err);
      res.status(500).json({ error: "Gagal memproses evaluasi AI: " + err.message });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite server in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static production assets from /dist...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`E-Modul server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();

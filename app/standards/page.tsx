import { Metadata } from 'next'
import { CheckSquare, BarChart3, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SOP & Standar Mutu - RSUD Kepulauan Talaud',
  description: 'Standar operasional, protokol keamanan, dan sistem evaluasi kualitas layanan.',
}

export default function Standards() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">SOP & Standar Mutu</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Komitmen terhadap standar operasional tertinggi dan jaminan kualitas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <CheckSquare className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">SOP Cleaning</h3>
            <p className="text-sm text-muted-foreground">Standar Operasional berbasis Pencegahan & Pengendalian Infeksi (PPI) dengan protokol ketat</p>
          </div>

          <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20">
            <AlertCircle className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-bold mb-2">SOP Keamanan</h3>
            <p className="text-sm text-muted-foreground">Standar Keamanan Rumah Sakit mencakup Code White dan Code Red</p>
          </div>

          <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
            <BarChart3 className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">Evaluasi Berkala</h3>
            <p className="text-sm text-muted-foreground">Sistem pelaporan dan evaluasi bulanan untuk improvement berkelanjutan</p>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <h2 className="text-2xl font-bold mb-6">Protokol Keselamatan & Standar</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">1. Standar Operasional Cleaning Service</h3>
              <ul className="ml-4 space-y-1 text-muted-foreground">
                <li>• Protokol PPI yang ketat dan terukur</li>
                <li>• Penggunaan desinfektan bersertifikat</li>
                <li>• Jadwal pembersihan yang konsisten</li>
                <li>• Dokumentasi harian semua aktivitas</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">2. Standar Keamanan Rumah Sakit</h3>
              <ul className="ml-4 space-y-1 text-muted-foreground">
                <li>• Code White: Peningkatan perhatian/antisipasi</li>
                <li>• Code Red: Respon cepat terhadap insiden keamanan</li>
                <li>• Protokol komunikasi dengan manajemen</li>
                <li>• Koordinasi dengan aparat keamanan terkait</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">3. Sistem Pelaporan Harian</h3>
              <ul className="ml-4 space-y-1 text-muted-foreground">
                <li>• Laporan aktivitas cleaning dan keamanan</li>
                <li>• Pencatatan insiden dan tindakan korektif</li>
                <li>• Komunikasi dengan supervisi</li>
                <li>• Rekomendasi perbaikan berkelanjutan</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">4. Evaluasi Bulanan dengan Manajemen RSUD</h3>
              <ul className="ml-4 space-y-1 text-muted-foreground">
                <li>• Review kinerja tim cleaning dan satpam</li>
                <li>• Analisis KPI (Key Performance Indicator)</li>
                <li>• Identifikasi area improvement</li>
                <li>• Perencanaan tindakan perbaikan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
          <h2 className="text-2xl font-bold mb-4">Kepatuhan Regulasi</h2>
          <p className="text-muted-foreground mb-4">
            Semua aspek layanan outsourcing kami mematuhi:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Regulasi Ketenagakerjaan Nasional</li>
            <li>• Standar Kesehatan & Keselamatan Kerja (K3)</li>
            <li>• Peraturan Kemenkes tentang Pencegahan Infeksi</li>
            <li>• Kebijakan & SOP Internal RSUD Kepulauan Talaud</li>
            <li>• Standar Internasional tentang Kebersihan Rumah Sakit</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

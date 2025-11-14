import { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cleaning Service - RSUD Kepulauan Talaud',
  description: 'Layanan kebersihan profesional dengan standar PPI, pemeliharaan dan disinfeksi area rumah sakit.',
}

export default function CleaningService() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Cleaning Service</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Layanan kebersihan profesional sesuai standar Pencegahan dan Pengendalian Infeksi (PPI)
        </p>

        <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 mb-12">
          <h2 className="text-2xl font-bold mb-6">Cakupan Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Pembersihan area rawat inap',
              'Pembersihan IGD (Instalasi Gawat Darurat)',
              'Pembersihan ruang tindakan',
              'Pembersihan ruang perawatan intensif',
              'Pengelolaan limbah non-medis',
              'Disinfeksi area berisiko tinggi',
              'Pemeliharaan kebersihan toilet pasien & pengunjung',
              'Kebersihan taman, selasar, dan area publik RSUD',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Standar Operasional</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ SOP berbasis Pencegahan & Pengendalian Infeksi (PPI)</li>
              <li>✓ Penggunaan APD (Alat Pelindung Diri) wajib</li>
              <li>✓ Pemahaman dasar protokol keselamatan</li>
              <li>✓ Kontrol kualitas harian & mingguan</li>
              <li>✓ Supervisi lapangan berkelanjutan</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Kompetensi Tim</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Pelatihan cleaning hospital terstandar</li>
              <li>✓ Sertifikasi K3 dan kesehatan lingkungan</li>
              <li>✓ Pemahaman mendalam tentang PPI</li>
              <li>✓ Evaluasi kinerja setiap bulan</li>
              <li>✓ Program pengembangan berkelanjutan</li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary/5 p-8 rounded-lg border border-secondary/20">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Manfaat Layanan Kami</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Lingkungan RS yang higienis dan steril</li>
            <li>• Pencegahan infeksi nosokomial yang lebih efektif</li>
            <li>• Kenyamanan pasien dan keluarga terjamin</li>
            <li>• Efisiensi biaya operasional</li>
            <li>• Tenaga profesional berdedikasi 24 jam</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

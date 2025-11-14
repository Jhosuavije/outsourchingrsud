import { Metadata } from 'next'
import { Shield, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Layanan Satpam - RSUD Kepulauan Talaud',
  description: 'Layanan keamanan 24 jam dengan petugas bersertifikat dan terlatih profesional.',
}

export default function SatpamService() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Satpam (Keamanan)</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Pengamanan profesional 24 jam untuk menjamin keamanan area RSUD
        </p>

        <div className="bg-secondary/5 p-8 rounded-lg border border-secondary/20 mb-12">
          <h2 className="text-2xl font-bold mb-6">Lingkup Tugas Satpam</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Pengamanan pintu masuk & keluar',
              'Patroli area RSUD secara berkala',
              'Pengaturan lalu lintas internal',
              'Pengamanan area IGD khusus',
              'Penanganan tamu & keluarga pasien',
              'Respons cepat terhadap insiden keamanan',
              'Monitoring CCTV & area kritis',
              'Koordinasi dengan pihak berwenang bila diperlukan',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Keamanan 24 Jam</h3>
            <p className="text-sm text-muted-foreground">Pengamanan sepanjang waktu dengan sistem shift</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Tim Terlatih</h3>
            <p className="text-sm text-muted-foreground">Petugas bersertifikat Gada Pratama</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Responsif</h3>
            <p className="text-sm text-muted-foreground">Respons cepat terhadap setiap insiden</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Standar Kompetensi</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Sertifikat Gada Pratama minimal</li>
              <li>✓ Pelatihan komunikasi & pelayanan publik</li>
              <li>✓ Pemahaman SOP keamanan rumah sakit</li>
              <li>✓ Respons terhadap Code White & Code Red</li>
              <li>✓ Pengetahuan dasar first aid</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Karakteristik Tim</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Disiplin tinggi dan profesional</li>
              <li>✓ Responsif terhadap situasi darurat</li>
              <li>✓ Kemampuan komunikasi interpersonal baik</li>
              <li>✓ Siap bekerja dalam sistem shift 24 jam</li>
              <li>✓ Komitmen pada keselamatan pasien</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

import { Metadata } from 'next'
import { Users, GraduationCap, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tim & Rekrutmen - RSUD Kepulauan Talaud',
  description: 'Proses rekrutmen profesional dan program pelatihan tim cleaning service dan satpam.',
}

export default function Team() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tim & Rekrutmen</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Proses rekrutmen terukur dan program pelatihan berkelanjutan
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Seleksi Ketat</h3>
            <p className="text-sm text-muted-foreground">Proses seleksi terstruktur dan profesional untuk memastikan kualitas terbaik</p>
          </div>

          <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 text-center">
            <GraduationCap className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Pelatihan Komprehensif</h3>
            <p className="text-sm text-muted-foreground">Program pelatihan mendalam tentang kebersihan dan keamanan rumah sakit</p>
          </div>

          <div className="bg-accent/5 p-6 rounded-lg border border-accent/20 text-center">
            <Briefcase className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold mb-2">Evaluasi Berkelanjutan</h3>
            <p className="text-sm text-muted-foreground">Penilaian kinerja reguler setiap 3 bulan untuk pengembangan karir</p>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <h2 className="text-2xl font-bold mb-6">Proses Rekrutmen & Pelatihan</h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Pengumuman Lowongan',
                description: 'Publikasi lowongan kerja untuk posisi Cleaning Service dan Satpam'
              },
              {
                step: '2',
                title: 'Proses Seleksi Administratif',
                description: 'Verifikasi persyaratan, dokumen, dan kelengkapan lamaran'
              },
              {
                step: '3',
                title: 'Tes & Wawancara',
                description: 'Tes kemampuan dasar dan wawancara dengan panel profesional'
              },
              {
                step: '4',
                title: 'Pemeriksaan Latar Belakang',
                description: 'Background check untuk memastikan integritas dan keamanan'
              },
              {
                step: '5',
                title: 'Pelatihan Pre-Deployment',
                description: 'Program pelatihan intensif sebelum penugasan di RSUD'
              },
              {
                step: '6',
                title: 'Penempatan & Monitoring',
                description: 'Penugasan ke unit dan monitoring kinerja dalam masa percobaan'
              },
            ].map((item) => (
              <div key={item.step} className="border-b border-border pb-4 last:border-b-0">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Syarat Umum Pelamar</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>✓ Sehat jasmani dan rohani</li>
              <li>✓ Tidak memiliki catatan kriminal</li>
              <li>✓ Memiliki semangat kerja tinggi</li>
              <li>✓ Siap bekerja shift atau sesuai kebutuhan</li>
              <li>✓ Berdomisili di Kepulauan Talaud atau sekitarnya</li>
              <li>✓ Bersedia menjalani pelatihan</li>
            </ul>
          </div>

          <div className="bg-secondary/5 p-8 rounded-lg border border-secondary/20">
            <h3 className="text-2xl font-bold mb-4">Program Pengembangan</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>✓ Pelatihan dasar sesuai bidang</li>
              <li>✓ Program sertifikasi berkelanjutan</li>
              <li>✓ Workshop pengembangan keterampilan</li>
              <li>✓ Mentoring dan coaching profesional</li>
              <li>✓ Program kesejahteraan karyawan</li>
              <li>✓ Jalur karir yang jelas</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-accent/5 p-8 rounded-lg border border-accent/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Tertarik Bergabung?</h3>
          <p className="text-muted-foreground mb-6">
            Jika Anda tertarik menjadi bagian dari tim profesional kami, silakan hubungi bagian administrasi RSUD Kabupaten Kepulauan Talaud untuk informasi lebih lanjut mengenai lowongan yang tersedia.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </main>
  )
}

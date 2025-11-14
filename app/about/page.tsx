import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Outsourcing 2025 - RSUD Kepulauan Talaud',
  description: 'Pelajari tentang visi, misi, dan alasan RSUD memilih sistem outsourcing untuk layanan cleaning dan satpam.',
}

export default function About() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Tentang Outsourcing 2025</h1>
        
        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Alasan Sistem Outsourcing</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-4">
              <span className="text-primary font-bold min-w-6">1.</span>
              <span>Meningkatkan efisiensi operasional RSUD secara keseluruhan</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold min-w-6">2.</span>
              <span>Menjamin kualitas dan konsistensi pelayanan kebersihan & keamanan</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold min-w-6">3.</span>
              <span>Menutup kekurangan Sumber Daya Manusia (SDM) internal</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold min-w-6">4.</span>
              <span>Memastikan lingkungan RS tetap higienis dan aman untuk pasien serta tenaga kesehatan</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Visi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mewujudkan RSUD Talaud yang bersih, aman, dan humanis dengan pelayanan kesehatan yang berkualitas tinggi.
            </p>
          </div>

          <div className="bg-secondary/5 p-8 rounded-lg border border-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Misi</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>✓ Menghadirkan Cleaning Service profesional sesuai standar PPI</li>
              <li>✓ Menghadirkan Satpam dengan kemampuan pengamanan terlatih</li>
              <li>✓ Menjaga kenyamanan pasien dan keluarga</li>
              <li>✓ Meningkatkan mutu layanan RSUD secara menyeluruh</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
          <h3 className="text-2xl font-bold mb-4 text-accent">Komitmen Kami</h3>
          <p className="text-muted-foreground leading-relaxed">
            Kami berkomitmen untuk memberikan layanan outsourcing yang profesional, terukur, dan berkelanjutan. Setiap aspek dari layanan kami dirancang untuk mendukung misi RSUD dalam memberikan pelayanan kesehatan terbaik kepada masyarakat Kepulauan Talaud.
          </p>
        </div>
      </div>
    </main>
  )
}

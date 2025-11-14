import Link from 'next/link'
import { CheckCircle2, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center px-4">
        <div className="text-center text-primary-foreground max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Profesionalisme Kebersihan & Keamanan untuk Pelayanan Rumah Sakit yang Lebih Baik
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-balance">
            RSUD Kabupaten Kepulauan Talaud menghadirkan layanan outsourcing Cleaning Service dan Satpam yang lebih terkoordinasi, profesional, dan sesuai standar rumah sakit pada tahun 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cleaning-service"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Layanan Cleaning Service
            </Link>
            <Link
              href="/satpam-service"
              className="bg-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary-foreground/30 transition-colors"
            >
              Layanan Satpam
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Keunggulan Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: 'Tenaga Terlatih',
                description: 'Tenaga terlatih & bersertifikat dengan kompetensi tinggi'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Standar K3',
                description: 'Standar operasional berbasis K3 & kesehatan lingkungan'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Keamanan 24 Jam',
                description: 'Keamanan berbasis SOP RSUD dengan respons cepat'
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: 'Evaluasi Berkala',
                description: 'Pengawasan & evaluasi berkala untuk kualitas terjamin'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/cleaning-service" className="group">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Cleaning Service
                </h3>
                <p className="text-muted-foreground mb-4">
                  Layanan kebersihan profesional meliputi pembersihan area rawat inap, IGD, ruang tindakan, dan pengelolaan limbah non-medis dengan standar PPI.
                </p>
                <span className="text-primary font-bold group-hover:translate-x-2 transition-transform inline-block">
                  Pelajari Lebih Lanjut →
                </span>
              </div>
            </Link>

            <Link href="/satpam-service" className="group">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                  Layanan Satpam
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pengamanan 24 jam dengan petugas bersertifikat, pelatihan komunikasi, dan respons cepat untuk memastikan keamanan area RSUD.
                </p>
                <span className="text-secondary font-bold group-hover:translate-x-2 transition-transform inline-block">
                  Pelajari Lebih Lanjut →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

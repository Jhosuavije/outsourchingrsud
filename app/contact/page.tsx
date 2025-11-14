import { Metadata } from 'next'
import { MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hubungi Kami - RSUD Kepulauan Talaud',
  description: 'Formulir pertanyaan dan informasi kontak RSUD Kepulauan Talaud.',
}

export default function Contact() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Kami siap membantu menjawab pertanyaan Anda tentang layanan outsourcing kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Alamat</h3>
                  <p className="text-muted-foreground text-sm">
                    Rumah Sakit Umum Daerah<br />
                    Kabupaten Kepulauan Talaud<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground text-sm">
                    Layanan Pelayanan: 24 Jam<br />
                    Administrasi: Senin - Jumat, 08:00 - 16:00 WIT<br />
                    Sabtu - Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Formulir Pertanyaan</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subjek</label>
                <input
                  type="text"
                  placeholder="Subjek pertanyaan"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Pesan</label>
                <textarea
                  placeholder="Tulis pesan Anda di sini..."
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-md font-bold hover:opacity-90 transition-opacity"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Informasi Penting</h3>
          <p className="text-muted-foreground mb-4">
            Untuk pertanyaan lebih lanjut tentang rekrutmen atau kerja sama, silakan menghubungi bagian administrasi RSUD Kepulauan Talaud selama jam kerja kantor.
          </p>
          <p className="text-sm text-muted-foreground">
            Kami berkomitmen untuk memberikan respons terhadap semua pertanyaan dalam waktu 1x24 jam kerja.
          </p>
        </div>
      </div>
    </main>
  )
}
